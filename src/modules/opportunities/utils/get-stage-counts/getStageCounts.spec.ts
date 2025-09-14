import { describe, it, expect } from "vitest";
import { getStageCounts } from ".";
import type { Opportunity } from "../../interfaces";

describe("getStageCounts", () => {
	it("should return the correct stage counts", () => {
		const opportunities: Opportunity[] = [
			{
				stage: "Closed Won",
				id: "1",
				name: "Opportunity 1",
				amount: 1000,
				accountName: "Account 1",
				leadId: 1,
			},
			{
				stage: "Closed Won",
				id: "2",
				name: "Opportunity 2",
				amount: 2000,
				accountName: "Account 2",
				leadId: 2,
			},
		];
		const stageCounts = getStageCounts(opportunities);
		expect(stageCounts).toEqual({ "Closed Won": 2 });
	});
});
