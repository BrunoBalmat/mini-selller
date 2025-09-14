import type { Opportunity } from "../../interfaces";

export function getStageCounts(opportunities: Opportunity[]) {
	return opportunities.reduce((acc, opportunity) => {
		acc[opportunity.stage] = (acc[opportunity.stage] || 0) + 1;
		return acc;
	}, {} as Record<string, number>);
}
