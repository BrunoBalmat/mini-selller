import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Header } from ".";

describe("Header", () => {
	it("should render", () => {
		render(<Header />);
	});

	it("should render with the correct text", () => {
		render(<Header />);

		expect(screen.getByText("Mini Seller Console")).toBeDefined();
		expect(
			screen.getByText("Manage leads and convert them to opportunities")
		).toBeDefined();
	});
});
