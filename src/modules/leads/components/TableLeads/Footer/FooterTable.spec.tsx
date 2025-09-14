import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { FooterTable } from ".";

describe("FooterTable", () => {
	it("should render", () => {
		render(<FooterTable totalLeads={10} leads={[]} isEmpty={false} />);
	});

	it("should not render if isEmpty is true", () => {
		render(<FooterTable totalLeads={10} leads={[]} isEmpty={true} />);

		expect(screen.queryByText("Showing 10 of 10 leads")).toBeNull();
	});
});
