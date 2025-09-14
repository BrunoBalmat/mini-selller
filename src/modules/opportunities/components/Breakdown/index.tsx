import { getStageCounts, getStageColor } from "../../utils";
import type { BreakdownProps } from "./types";

export function Breakdown({ opportunities }: BreakdownProps) {
	const stageCounts = getStageCounts(opportunities);

	const renderStageColor = (stage: string) => {
		return getStageColor(stage);
	};

	return (
		<div className="bg-white rounded-lg shadow p-6">
			<h3 className="text-lg font-medium text-gray-900 mb-4">
				Pipeline Overview
			</h3>
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
				{Object.entries(stageCounts).map(([stage, count]) => (
					<div key={stage} className="text-center">
						<div
							className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${renderStageColor(
								stage
							)} mb-2`}
						>
							{stage}
						</div>
						<div className="text-2xl font-bold text-gray-900">{count}</div>
					</div>
				))}
			</div>
		</div>
	);
}
