import type { Dispatch, SetStateAction } from "react";

import type { Lead } from "@/modules/leads/interfaces";

export interface ContentTableProps {
	leads: Lead[];
	isEmpty: boolean;
	setSelectedLead: Dispatch<SetStateAction<Lead | null>>;
}
