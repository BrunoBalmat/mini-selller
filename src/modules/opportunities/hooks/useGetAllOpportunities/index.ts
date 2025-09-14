import { useQuery } from "@tanstack/react-query";

import { OpportunityService } from "../../services";

export function useGetAllOpportunities() {
	return useQuery({
		queryKey: ["opportunities"],
		queryFn: async () => await OpportunityService.getAll(),
	});
}
