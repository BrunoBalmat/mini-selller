import { describe, it, expect } from "vitest";
import { NuqsAdapter } from "nuqs/adapters/react";
import { act, renderHook } from "@testing-library/react";

import { useSearchLead } from ".";

const wrapper = ({ children }: { children: React.ReactNode }) => (
	<NuqsAdapter>{children}</NuqsAdapter>
);

describe("useSearchLead", () => {
	it("should return the search value", () => {
		const { result } = renderHook(() => useSearchLead(), { wrapper });

		expect(result.current.value).toBe("");
	});

	it("should update the search value", () => {
		const { result } = renderHook(() => useSearchLead(), { wrapper });

		act(() => {
			result.current.setValue("test");
		});

		expect(result.current.value).toBe("test");
	});
});
