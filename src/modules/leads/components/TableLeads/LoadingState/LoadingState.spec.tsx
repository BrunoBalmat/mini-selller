import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { LoadingState } from ".";

describe("LoadingState", () => {
	it("should render", () => {
		render(<LoadingState />);

		expect(screen.getByText("Loading leads...")).toBeDefined();
	});
});
