import { Calendar, DollarSign, TrendingUp } from "lucide-react";

import { formatCurrency } from "@/shared/utils";
import { getStageCounts } from "@/modules/opportunities/utils";

import type { SummaryCardsProps } from "./types";

export function SummaryCards({ opportunities }: SummaryCardsProps) {
	const getTotalValue = () => {
		return opportunities.reduce(
			(acc, opportunity) => acc + opportunity.amount,
			0
		);
	};

	const stageCounts = getStageCounts(opportunities);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
			<div className="bg-white rounded-lg shadow p-4">
				<div className="flex items-center">
					<div className="flex-shrink-0">
						<TrendingUp className="h-8 w-8 text-blue-600" />
					</div>
					<div className="ml-3">
						<p className="text-sm font-medium text-gray-500">
							Total Opportunities
						</p>
						<p
							className="text-2xl font-semibold text-gray-900"
							data-testid="total-opportunities"
						>
							{opportunities.length}
						</p>
					</div>
				</div>
			</div>

			<div className="bg-white rounded-lg shadow p-4">
				<div className="flex items-center">
					<div className="flex-shrink-0">
						<DollarSign className="h-8 w-8 text-green-600" />
					</div>
					<div className="ml-3">
						<p className="text-sm font-medium text-gray-500">Total Value</p>
						<p
							className="text-2xl font-semibold text-gray-900"
							data-testid="total-value"
						>
							{formatCurrency(getTotalValue())}
						</p>
					</div>
				</div>
			</div>

			<div className="bg-white rounded-lg shadow p-4">
				<div className="flex items-center">
					<div className="flex-shrink-0">
						<Calendar className="h-8 w-8 text-purple-600" />
					</div>
					<div className="ml-3">
						<p className="text-sm font-medium text-gray-500">Closed Won</p>
						<p
							className="text-2xl font-semibold text-gray-900"
							data-testid="closed-won"
						>
							{stageCounts["Closed Won"] || 0}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
