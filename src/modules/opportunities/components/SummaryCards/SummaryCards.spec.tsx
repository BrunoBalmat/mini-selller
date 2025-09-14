import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { SummaryCards } from ".";
import { formatCurrency } from "@/shared/utils";

describe("SummaryCards", () => {
	it("should render", () => {
		render(<SummaryCards opportunities={[]} />);

		expect(screen.getByText("Total Opportunities")).toBeDefined();
		expect(screen.getByText("Total Value")).toBeDefined();
		expect(screen.getByText("Closed Won")).toBeDefined();
	});

	it("should render with opportunities", () => {
		render(
			<SummaryCards
				opportunities={[
					{
						id: "1",
						name: "Opportunity 1",
						accountName: "Account 1",
						leadId: 1,
						amount: 1000,
						stage: "Closed Won",
					},
				]}
			/>
		);

		expect(screen.getByText("Total Opportunities")).toBeDefined();
		expect(screen.getByTestId("total-opportunities")).toBeDefined();
		expect(screen.getByText("Total Value")).toBeDefined();
		expect(screen.getByTestId("total-value")).toBeDefined();
		expect(screen.getByText("Closed Won")).toBeDefined();
		expect(screen.getByTestId("closed-won")).toBeDefined();
		expect(screen.getByText(formatCurrency(1000))).toBeDefined();
	});
});
