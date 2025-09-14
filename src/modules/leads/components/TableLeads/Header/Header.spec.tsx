import { useQueryState } from "nuqs";
import { NuqsAdapter } from "nuqs/adapters/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { QUERY_PARAMS, SELECT_OPTIONS } from "@/shared/constants";

import { HeaderTable } from ".";

const wrapper = ({ children }: { children: React.ReactNode }) => (
	<NuqsAdapter>{children}</NuqsAdapter>
);

vi.mock("nuqs", () => ({
	useQueryState: vi.fn().mockReturnValue(["", vi.fn()]),
}));

describe("HeaderTable", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should render", () => {
		render(<HeaderTable />, { wrapper });

		expect(
			screen.getByPlaceholderText("Search by name or company...")
		).toBeDefined();

		SELECT_OPTIONS.forEach((option) => {
			expect(screen.getByText(option.label)).toBeDefined();
		});
	});

	it("should call useQueryState with the correct parameters", () => {
		render(<HeaderTable />, { wrapper });

		expect(useQueryState).toHaveBeenCalledWith(QUERY_PARAMS.ORDER_BY, {
			defaultValue: "",
		});
	});

	it("should call setOrderBy when select value changes", () => {
		render(<HeaderTable />, { wrapper });

		const setOrderBy = vi.mocked(useQueryState).mock.results[0].value[1];

		fireEvent.change(screen.getByTestId("order-by-select"), {
			target: { value: "New" },
		});

		expect(setOrderBy).toHaveBeenCalledWith("New");
	});
});
