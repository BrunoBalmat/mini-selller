import { Fragment, useState } from "react";

import { useGetAllLeads } from "@/modules/leads/hooks";
import type { Lead } from "@/modules/leads/interfaces";

import { Drawer } from "../Drawer";
import { HeaderTable } from "./Header";
import { FooterTable } from "./Footer";
import { ContentTable } from "./Content";
import { ErrorState } from "./ErrorState";
import { LoadingState } from "./LoadingState";

export function TableLeads() {
	const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
	const { data = [], isError, refetch, isFetching } = useGetAllLeads();

	const isEmpty = data.length === 0;
	const totalLeads = data?.length;

	if (isFetching) {
		return <LoadingState />;
	}

	if (isError) {
		return <ErrorState onRetry={refetch} />;
	}

	return (
		<Fragment>
			<section>
				<h2 className="text-xl font-semibold text-gray-900">
					Leads ({totalLeads})
				</h2>

				<div className="bg-white rounded-lg shadow">
					<HeaderTable />

					<ContentTable
						leads={data}
						isEmpty={isEmpty}
						setSelectedLead={setSelectedLead}
					/>

					<FooterTable totalLeads={totalLeads} leads={data} isEmpty={isEmpty} />
				</div>
			</section>

			<Drawer
				refetch={refetch}
				lead={selectedLead!}
				open={!!selectedLead}
				onClose={() => setSelectedLead(null)}
			/>
		</Fragment>
	);
}
