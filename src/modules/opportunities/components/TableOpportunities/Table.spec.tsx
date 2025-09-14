import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { COL_HEADER } from "./utils";
import { TableOpportunities } from ".";
import { formatCurrency } from "@/shared/utils";

describe("TableOpportunities", () => {
	it("should render", () => {
		render(<TableOpportunities opportunities={[]} />);

		COL_HEADER.forEach((col) => {
			expect(screen.getByText(col)).toBeDefined();
		});
	});

	it("should render with opportunities", () => {
		render(
			<TableOpportunities
				opportunities={[
					{
						id: "1",
						name: "Opportunity 1",
						accountName: "Account 1",
						leadId: 1,
						amount: 1000,
						stage: "Closed Won",
						createdAt: "2021-01-01",
					},
				]}
			/>
		);

		COL_HEADER.forEach((col) => {
			expect(screen.getByText(col)).toBeDefined();
		});

		expect(screen.getByText("Opportunity 1")).toBeDefined();
		expect(screen.getByText("Account 1")).toBeDefined();
		expect(screen.getByText("Closed Won")).toBeDefined();
		expect(screen.getByText(formatCurrency(1000))).toBeDefined();
	});
});
