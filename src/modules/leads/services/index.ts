import { api } from "@/config";
import type { Lead } from "../interfaces";

async function getAll(
	name: string | null,
	status: string | null
): Promise<Lead[]> {
	const params = new URLSearchParams();

	if (name?.length) {
		params.set("name", name);
	}

	if (status?.length) {
		params.set("status", status);
	}

	const response = await api.get(`/leads?${params.toString()}`);
	return response.data;
}

async function getById(id: number): Promise<Lead> {
	const response = await api.get(`/leads/${id}`);
	return response.data;
}

async function patch(id: number, data: Partial<Lead>): Promise<Lead> {
	const response = await api.patch(`/leads/${id}`, data);
	return response.data;
}

async function updateStatus(id: string): Promise<Lead> {
	const { data } = await api.patch<Lead>(`/leads/${id}`, {
		status: "Converted",
	});
	return data;
}

export const LeadService = {
	patch,
	getAll,
	getById,
	updateStatus,
};
