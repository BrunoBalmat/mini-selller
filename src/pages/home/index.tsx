import { Header, TableLeads } from "@/modules/leads/components";
import { Opportunities } from "@/modules/opportunities/components";

export const HomeLeads = () => (
	<main className="container mx-auto px-8">
		<Header />

		<TableLeads />

		<Opportunities />
	</main>
);
