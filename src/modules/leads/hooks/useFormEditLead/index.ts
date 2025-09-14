import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import type { Lead } from "@/modules/leads/interfaces";
import { LeadService } from "@/modules/leads/services";
import { schemaEditLead } from "@/modules/leads/utils";
import type { SchemaEditLead } from "@/modules/leads/utils";
import { OpportunityService } from "@/modules/opportunities/services";

import type { OpportunityData } from "../useFormConverting/types";
import type { EditLeadAndCreateOpportunityPayload } from "./types";

export const useFormEditLead = (
	lead: Lead | null,
	conversionData: OpportunityData,
	callbackConvert: () => void
) => {
	const [isEditing, setIsEditing] = useState(false);

	const form = useForm<SchemaEditLead>({
		mode: "onBlur",
		resolver: zodResolver(schemaEditLead),
		values: {
			email: lead?.email ?? "",
			status: lead?.status ?? "",
		},
	});

	const queryClient = useQueryClient();

	const editLeadAndCreateOpportunityMutation = useMutation({
		mutationKey: ["edit-lead-and-create-opportunity"],
		mutationFn: async ({
			currentLead,
			formValues,
			opportunityData,
		}: EditLeadAndCreateOpportunityPayload) => {
			const leadPayload: Lead = {
				...currentLead,
				email: formValues.email,
				status: formValues.status,
			};

			const amount = opportunityData.amount ?? 0;
			const stage = opportunityData.stage ?? "Prospecting";

			await Promise.all([
				LeadService.patch(currentLead.id, leadPayload),
				OpportunityService.create({
					leadId: currentLead.id,
					name: currentLead.name,
					accountName: currentLead.company,
					amount,
					stage,
				}),
			]);
		},
		onSuccess: async () => {
			await Promise.all([
				queryClient.invalidateQueries({ queryKey: ["leads"] }),
				queryClient.invalidateQueries({ queryKey: ["opportunities"] }),
			]);
			setIsEditing(false);
			callbackConvert();
		},
	});

	const onSubmit = form.handleSubmit((formValues: SchemaEditLead) => {
		if (!lead) return;
		editLeadAndCreateOpportunityMutation.mutate({
			currentLead: lead,
			formValues,
			opportunityData: conversionData,
		});
	});

	return {
		form,
		onSubmit,
		isEditing,
		setIsEditing,
		isSavingChanges: editLeadAndCreateOpportunityMutation.isPending,
	};
};
