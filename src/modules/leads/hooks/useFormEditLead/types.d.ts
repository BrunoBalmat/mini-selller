import type { SchemaEditLead } from "@/modules/leads/utils";
import type { OpportunityData } from "../useFormConverting/types";

export type EditLeadAndCreateOpportunityPayload = {
	currentLead: Lead;
	formValues: SchemaEditLead;
	opportunityData: OpportunityData;
};
