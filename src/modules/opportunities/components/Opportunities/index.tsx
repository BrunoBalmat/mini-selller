import { Breakdown } from "../Breakdown";
import { SummaryCards } from "../SummaryCards";
import { TableOpportunities } from "../TableOpportunities";

import { useGetAllOpportunities } from "@/modules/opportunities/hooks";

export function Opportunities() {
	const { data = [] } = useGetAllOpportunities();

	if (!data.length) {
		return null;
	}

	return (
		<div className="space-y-6">
			<SummaryCards opportunities={data} />

			<TableOpportunities opportunities={data} />

			<Breakdown opportunities={data} />
		</div>
	);
}
