import { useState } from "react";
import { Building, Mail, Star, User } from "lucide-react";

import { STATUS_COLORS } from "@/shared/constants";
import type { SortBy, SortConfig, SortDirection } from "@/modules/leads/interfaces";
import { getScoreColor, sortByCol } from "@/modules/leads/utils";

import { SortButton } from "../SortButton";

import { COL_HEADER } from "./utils";
import type { ContentTableProps } from "./types";
import { EmptyState } from "../EmptyState";

export const ContentTable = ({
	leads,
	isEmpty,
	setSelectedLead,
}: ContentTableProps) => {
	const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

	const sortedLeads = sortByCol(leads, sortConfig);

	const onSortBy = (field: SortBy) => {
		setSortConfig((prev) => {
			if (!prev || prev.field !== field) {
				return { field, direction: "asc" as SortDirection };
			}
			
			if (prev.direction === "asc") {
				return { field, direction: "desc" as SortDirection };
			}
			
			return null;
		});
	};

	if (isEmpty) {
		return <EmptyState />;
	}

	return (
		<div className="overflow-x-auto max-h-[500px] overflow-y-auto">
			<table className="min-w-full divide-y divide-gray-200">
				<thead className="bg-gray-50 sticky top-0 z-10">
					<tr>
						{COL_HEADER.map((col) => (
							<th
								key={col.value}
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								<SortButton
									field={col.label}
									handleSort={() => onSortBy(col.value as SortBy)}
									sortField={sortConfig?.field}
									sortDirection={sortConfig?.direction}
								/>
							</th>
						))}
					</tr>
				</thead>

				<tbody className="bg-white divide-y divide-gray-200">
					{sortedLeads.map((lead) => (
						<tr
							key={lead.id}
							onClick={() => setSelectedLead(lead)}
							className={`hover:bg-gray-50 cursor-pointer transition-colors ${
								lead.id == 1 ? "opacity-75 bg-blue-50" : ""
							}`}
						>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<div className="flex-shrink-0">
										<div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
											<User className="h-4 w-4 text-blue-600" />
										</div>
									</div>
									<div className="ml-4">
										<div className="text-sm font-medium text-gray-900">
											{lead.name}
										</div>
										<div className="text-sm text-gray-500 flex items-center">
											<Mail className="h-3 w-3 mr-1" />
											{lead.email}
										</div>
									</div>
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<Building className="h-4 w-4 text-gray-400 mr-2" />
									<div className="text-sm text-gray-900">{lead.company}</div>
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{lead.source}
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<Star
										className={`h-4 w-4 mr-1 ${getScoreColor(lead.score)}`}
									/>
									<span
										className={`text-sm font-medium ${getScoreColor(
											lead.score
										)}`}
									>
										{lead.score}
									</span>
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<span
									className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
										STATUS_COLORS[lead.status]
									}`}
								>
									{lead.status}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
