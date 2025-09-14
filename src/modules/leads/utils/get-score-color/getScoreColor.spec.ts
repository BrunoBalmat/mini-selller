import { describe, it, expect } from "vitest";
import { getScoreColor } from "./index";

describe("getScoreColor", () => {
	it("should return the correct color for a score", () => {
		expect(getScoreColor(90)).toBe("text-green-600");
		expect(getScoreColor(80)).toBe("text-yellow-600");
		expect(getScoreColor(70)).toBe("text-orange-600");
		expect(getScoreColor(60)).toBe("text-red-600");
	});
});
