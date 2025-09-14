import { formatCurrency } from "./index";
import { describe, it, expect } from "vitest";

describe("formatCurrency", () => {
	it("should format currency", () => {
		expect(formatCurrency(1000)).toBe("$1,000.00");
	});

	it("should return 0 if amount is undefined", () => {
		expect(formatCurrency(undefined)).toBe("0");
	});
});
