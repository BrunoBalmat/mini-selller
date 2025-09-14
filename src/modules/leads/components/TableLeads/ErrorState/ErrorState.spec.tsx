import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { ErrorState } from ".";

describe("ErrorState", () => {
	it("should render", () => {
		render(<ErrorState onRetry={() => {}} />);

		expect(screen.getByText("Error Loading Data")).toBeDefined();
		expect(screen.getByText("Retry")).toBeDefined();
	});

	it("should call onRetry when the button is clicked", () => {
		const onRetry = vi.fn();
		render(<ErrorState onRetry={onRetry} />);

		fireEvent.click(screen.getByText("Retry"));

		expect(onRetry).toHaveBeenCalled();
	});
});
