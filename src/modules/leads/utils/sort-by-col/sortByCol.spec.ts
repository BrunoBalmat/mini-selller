import { describe, it, expect } from "vitest";

import db from "../../../../../__mocks__/db.json";
import { sortByCol } from ".";
import type { Lead } from "../../interfaces";

describe("sortByCol", () => {
	it("should sort leads by name ascending", () => {
		const leads = db.leads as Lead[];
		const sortedLeads = sortByCol(leads, { field: "name", direction: "asc" });
		const result = db.leads.sort((a, b) => a.name.localeCompare(b.name));
		expect(sortedLeads).toEqual(result);
	});

	it("should sort leads by name descending", () => {
		const leads = db.leads as Lead[];
		const sortedLeads = sortByCol(leads, { field: "name", direction: "desc" });
		const result = db.leads.sort((a, b) => b.name.localeCompare(a.name));
		expect(sortedLeads).toEqual(result);
	});

	it("should sort leads by company ascending", () => {
		const leads = db.leads as Lead[];
		const sortedLeads = sortByCol(leads, { field: "company", direction: "asc" });
		const result = db.leads.sort((a, b) => a.company.localeCompare(b.company));
		expect(sortedLeads).toEqual(result);
	});

	it("should sort leads by company descending", () => {
		const leads = db.leads as Lead[];
		const sortedLeads = sortByCol(leads, { field: "company", direction: "desc" });
		const result = db.leads.sort((a, b) => b.company.localeCompare(a.company));
		expect(sortedLeads).toEqual(result);
	});

	it("should sort leads by source ascending", () => {
		const leads = db.leads as Lead[];
		const sortedLeads = sortByCol(leads, { field: "source", direction: "asc" });
		const result = db.leads.sort((a, b) => a.source.localeCompare(b.source));
		expect(sortedLeads).toEqual(result);
	});

	it("should sort leads by source descending", () => {
		const leads = db.leads as Lead[];
		const sortedLeads = sortByCol(leads, { field: "source", direction: "desc" });
		const result = db.leads.sort((a, b) => b.source.localeCompare(a.source));
		expect(sortedLeads).toEqual(result);
	});

	it("should sort leads by score ascending", () => {
		const leads = db.leads as Lead[];
		const sortedLeads = sortByCol(leads, { field: "score", direction: "asc" });
		const result = db.leads.sort((a, b) => a.score - b.score);
		expect(sortedLeads).toEqual(result);
	});

	it("should sort leads by score descending", () => {
		const leads = db.leads as Lead[];
		const sortedLeads = sortByCol(leads, { field: "score", direction: "desc" });
		const result = db.leads.sort((a, b) => b.score - a.score);
		expect(sortedLeads).toEqual(result);
	});

	it("should sort leads by status ascending", () => {
		const leads = db.leads as Lead[];
		const sortedLeads = sortByCol(leads, { field: "status", direction: "asc" });
		const result = db.leads.sort((a, b) => a.status.localeCompare(b.status));
		expect(sortedLeads).toEqual(result);
	});

	it("should sort leads by status descending", () => {
		const leads = db.leads as Lead[];
		const sortedLeads = sortByCol(leads, { field: "status", direction: "desc" });
		const result = db.leads.sort((a, b) => b.status.localeCompare(a.status));
		expect(sortedLeads).toEqual(result);
	});

	it("should return original leads when sortConfig is null", () => {
		const leads = db.leads as Lead[];
		const sortedLeads = sortByCol(leads, null);
		expect(sortedLeads).toEqual(leads);
	});
});
