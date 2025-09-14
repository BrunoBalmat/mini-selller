import { api } from "@/config";

interface CreateOpportunity {
	leadId: number;
	stage: string;
	amount: number;
	accountName: string;
	name: string;
}

async function create(opportunity: CreateOpportunity) {
	return await api.post("/opportunities", {
		...opportunity,
		createdAt: new Date().toISOString(),
	});
}

async function getAll() {
	const response = await api.get("/opportunities");
	return response.data;
}

export const OpportunityService = {
	create,
	getAll,
};
