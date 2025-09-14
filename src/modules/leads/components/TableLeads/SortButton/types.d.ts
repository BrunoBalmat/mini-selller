import type { SortBy, SortDirection } from "@/modules/leads/interfaces";

export interface SortButtonProps {
	handleSort: (field: SortBy) => void;
	field: string;
	sortField?: SortBy | null;
	sortDirection?: SortDirection | null;
}
