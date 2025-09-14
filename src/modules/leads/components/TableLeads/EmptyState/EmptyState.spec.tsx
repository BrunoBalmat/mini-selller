import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { EmptyState } from ".";

describe("EmptyState", () => {
	it("should render", () => {
		render(<EmptyState />);

		expect(screen.getByText("No leads found")).toBeDefined();
		expect(
			screen.getByText("Start by adding some leads to your system.")
		).toBeDefined();
	});
});
