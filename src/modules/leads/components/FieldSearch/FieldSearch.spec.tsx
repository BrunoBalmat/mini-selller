import { NuqsAdapter } from "nuqs/adapters/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useSearchLead } from "@/modules/leads/hooks";

import { FieldSearch } from ".";

vi.mock("@/modules/leads/hooks", () => ({
	useSearchLead: vi.fn(),
}));

const client = new QueryClient();

const sut = ({ children }: { children: React.ReactNode }) => (
	<QueryClientProvider client={client}>
		<NuqsAdapter>{children}</NuqsAdapter>
	</QueryClientProvider>
);

const mockSubmit = vi.fn();
const mockOnChange = vi.fn();
const mockSetValue = vi.fn();

describe("FieldSearch", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		vi.mocked(useSearchLead).mockReturnValue({
			value: "",
			onSubmit: mockSubmit,
			onChange: mockOnChange,
			setValue: mockSetValue,
		});
	});

	it("should render with all elements", () => {
		render(<FieldSearch />, { wrapper: sut });

		expect(
			screen.getByPlaceholderText("Search by name or company...")
		).toBeDefined();
	});

	it("should call onSubmit when the form is submitted", () => {
		render(<FieldSearch />, { wrapper: sut });

		fireEvent.submit(screen.getByTestId("submit-button"));

		expect(mockSubmit).toHaveBeenCalled();
	});
});
