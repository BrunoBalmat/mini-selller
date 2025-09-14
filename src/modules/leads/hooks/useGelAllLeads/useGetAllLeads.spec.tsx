import { NuqsAdapter } from "nuqs/adapters/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import db from "../../../../../__mocks__/db.json";

import { useGetAllLeads } from ".";
import { LeadService } from "../../services";

vi.mock("../../services", () => ({
	LeadService: {
		getAll: vi.fn(),
	},
}));

describe("useGetAllLeads", () => {
	let queryClient: QueryClient;

	beforeEach(() => {
		queryClient = new QueryClient({
			defaultOptions: {
				queries: {
					retry: false,
				},
			},
		});
		vi.clearAllMocks();
	});

	const wrapper = ({ children }: { children: React.ReactNode }) => (
		<QueryClientProvider client={queryClient}>
			<NuqsAdapter>{children}</NuqsAdapter>
		</QueryClientProvider>
	);

	it("should return the leads", async () => {
		vi.mocked(LeadService.getAll).mockResolvedValue(db.leads);

		const { result } = renderHook(() => useGetAllLeads(), { wrapper });

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true);
		});

		expect(result.current.data).toEqual(db.leads);
		expect(LeadService.getAll).toHaveBeenCalledTimes(1);
	});
});
