import type { FooterProps } from "./types";

export const FooterTable = ({ totalLeads, leads, isEmpty }: FooterProps) => {
	if (isEmpty) {
		return null;
	}

	return (
		<div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
			<p className="text-sm text-gray-500">
				Showing {leads.length} of {totalLeads} leads
			</p>
		</div>
	);
};
