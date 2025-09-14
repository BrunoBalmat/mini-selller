export type SortBy = "name" | "company" | "source" | "score" | "status";

export type SortDirection = "asc" | "desc";

export interface SortConfig {
	field: SortBy;
	direction: SortDirection;
}
