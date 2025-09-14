import { describe, it, expect } from "vitest";
import { NuqsAdapter } from "nuqs/adapters/react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { HomeLeads } from ".";

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
	<QueryClientProvider client={queryClient}>
		<NuqsAdapter>{children}</NuqsAdapter>
	</QueryClientProvider>
);

describe("HomeLeads", () => {
	it("should render", () => {
		render(<HomeLeads />, { wrapper });
	});

	it("should render all components", () => {
		render(<HomeLeads />, { wrapper });

		expect(screen.getByTestId("header")).toBeDefined();
	});
});
