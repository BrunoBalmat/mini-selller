import { describe, it, expect } from "vitest";
import { getStageColor } from ".";

describe("getStageColor", () => {
	it("should return the correct stage color", () => {
		expect(getStageColor("Closed Won")).toBe("bg-green-100 text-green-800");
		expect(getStageColor("Prospecting")).toBe("bg-blue-100 text-blue-800");
		expect(getStageColor("Qualification")).toBe(
			"bg-yellow-100 text-yellow-800"
		);
		expect(getStageColor("Proposal")).toBe("bg-orange-100 text-orange-800");
		expect(getStageColor("Negotiation")).toBe("bg-purple-100 text-purple-800");
		expect(getStageColor("Closed Lost")).toBe("bg-red-100 text-red-800");
		expect(getStageColor("default")).toBe("bg-gray-100 text-gray-800");
	});
});
