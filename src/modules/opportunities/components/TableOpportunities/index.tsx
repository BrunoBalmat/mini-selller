import { format } from "date-fns";
import { Building, DollarSign, User } from "lucide-react";

import { formatCurrency } from "@/shared/utils";
import { getStageColor } from "@/modules/opportunities/utils";

import { COL_HEADER } from "./utils";
import type { TableProps } from "./types";

export function TableOpportunities({ opportunities }: TableProps) {
	const renderStageColor = (stage: string) => {
		return getStageColor(stage);
	};

	const formatDate = (date: string) => {
		return format(new Date(date), "MM/dd/yyyy");
	};

	return (
		<div className="bg-white rounded-lg shadow">
			<div className="px-6 py-4 border-b border-gray-200">
				<h3 className="text-lg font-medium text-gray-900">Opportunities</h3>
			</div>

			<div className="overflow-x-auto max-h-[500px] overflow-y-auto">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50 sticky top-0 z-10">
						<tr>
							{COL_HEADER.map((col) => (
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									{col}
								</th>
							))}
						</tr>
					</thead>

					<tbody className="bg-white divide-y divide-gray-200">
						{opportunities.map((opportunity) => (
							<tr key={opportunity.id} className="hover:bg-gray-50">
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<div className="flex-shrink-0 h-8 w-8">
											<div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
												<User className="h-4 w-4 text-green-600" />
											</div>
										</div>
										<div className="ml-4">
											<div className="text-sm font-medium text-gray-900">
												{opportunity.name}
											</div>
											<div className="text-sm text-gray-500">
												ID: {opportunity.id}
											</div>
										</div>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<Building className="h-4 w-4 text-gray-400 mr-2" />
										<div className="text-sm text-gray-900">
											{opportunity.accountName}
										</div>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<span
										className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${renderStageColor(
											opportunity.stage
										)}`}
									>
										{opportunity.stage}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<DollarSign className="h-4 w-4 text-gray-400 mr-1" />
										<span className="text-sm text-gray-900">
											{formatCurrency(opportunity.amount)}
										</span>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{formatDate(opportunity.createdAt)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
