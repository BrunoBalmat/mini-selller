import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { LeadService } from "@/modules/leads/services";
import { OpportunityService } from "@/modules/opportunities/services";
import type { Lead } from "@/modules/leads/interfaces";
import type { OpportunityData } from "./types";

type ConvertLeadPayload = {
	lead: Lead;
	opportunityData: OpportunityData;
};

export function useFormConverting(
	callbackAfterSuccessfulConversion: () => void
) {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const queryClient = useQueryClient();

	const convertLeadToOpportunityMutation = useMutation({
		mutationKey: ["lead-conversion"],
		mutationFn: async ({ lead, opportunityData }: ConvertLeadPayload) => {
			if (!opportunityData.stage) {
				throw new Error("Stage is required");
			}

			const amount = opportunityData.amount ?? 0;
			const stage = opportunityData.stage ?? "Prospecting";

			await Promise.all([
				OpportunityService.create({
					leadId: lead.id,
					name: lead.name,
					accountName: lead.company,
					amount,
					stage,
				}),
				LeadService.updateStatus(String(lead.id)),
			]);
		},
		onSuccess: async () => {
			await Promise.all([
				queryClient.refetchQueries({ queryKey: ["leads"] }),
				queryClient.refetchQueries({ queryKey: ["opportunities"] }),
			]);
			callbackAfterSuccessfulConversion();
		},
		onError: (unknownError) => {
			setErrorMessage(
				unknownError instanceof Error
					? unknownError.message
					: "Unexpected error"
			);
		},
	});

	const onConvert = (lead: Lead, opportunityData: OpportunityData) => {
		setErrorMessage(null);
		convertLeadToOpportunityMutation.mutate({ lead, opportunityData });
	};

	useEffect(() => {
		if (!errorMessage) return;
		const timeoutId = setTimeout(() => setErrorMessage(null), 5000);
		return () => clearTimeout(timeoutId);
	}, [errorMessage]);

	return {
		isConverting: convertLeadToOpportunityMutation.isPending,
		onConvert,
		errorMessage,
	};
}
