import type { OpportunityData } from "@/modules/leads/hooks/useFormConverting/types";
import type { Lead } from "@/modules/leads/interfaces";
import type { SchemaEditLead } from "@/modules/leads/utils/schema-edit-lead";
import type { Dispatch, SetStateAction } from "react";

export interface ContentDrawerProps {
	lead: Lead;
	isEditing: boolean;
	conversionData: OpportunityData;
	form: UseFormReturn<SchemaEditLead>;
	conversionErrorMessage: string | null;
	setConversionData: Dispatch<SetStateAction<OpportunityData>>;
}
