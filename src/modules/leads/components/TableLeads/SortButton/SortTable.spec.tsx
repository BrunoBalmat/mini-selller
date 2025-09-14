import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { SortButton } from "./index";

describe("SortButton", () => {
	it("should render", () => {
		render(<SortButton handleSort={() => {}} field="name" />);
		expect(screen.getByText("name")).toBeDefined();
	});

	it("should call handleSort when clicked", () => {
		const handleSort = vi.fn();
		render(<SortButton handleSort={handleSort} field="name" />);
		screen.getByText("name").click();
		expect(handleSort).toHaveBeenCalledWith("name");
	});
});
