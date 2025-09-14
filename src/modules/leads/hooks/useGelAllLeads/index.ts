import { useQueryState } from "nuqs";
import { useQuery } from "@tanstack/react-query";

import { LeadService } from "../../services";

export function useGetAllLeads() {
	const [search] = useQueryState("search");
	const [orderBy] = useQueryState("orderBy");

	return useQuery({
		queryKey: ["leads", search, orderBy],
		queryFn: async () => await LeadService.getAll(search, orderBy),
		refetchOnWindowFocus: false,
	});
}
