import type { Lead, SortBy, SortConfig } from "../../interfaces";

export function sortByCol(leads: Lead[], sortConfig: SortConfig | null): Lead[] {
	if (!sortConfig) return leads;

	const { field, direction } = sortConfig;

	const comparators: Record<SortBy, (a: Lead, b: Lead) => number> = {
		name: (a, b) => a.name.localeCompare(b.name),
		company: (a, b) => a.company.localeCompare(b.company),
		source: (a, b) => a.source.localeCompare(b.source),
		score: (a, b) => a.score - b.score,
		status: (a, b) => a.status.localeCompare(b.status),
	};

	const comparator = comparators[field];
	const result = [...leads].sort(comparator);

	return direction === "desc" ? result.reverse() : result;
}
