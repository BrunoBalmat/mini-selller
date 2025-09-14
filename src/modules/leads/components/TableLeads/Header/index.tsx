import { useQueryState } from "nuqs";
import { Filter } from "lucide-react";

import { QUERY_PARAMS, SELECT_OPTIONS } from "@/shared/constants";

import { FieldSearch } from "../../FieldSearch";

export const HeaderTable = () => {
	const [orderBy, setOrderBy] = useQueryState(QUERY_PARAMS.ORDER_BY, {
		defaultValue: "",
	});

	return (
		<div
			className="p-4 bg-white border-b border-gray-200 mt-4"
			data-testid="header-table"
		>
			<div className="flex flex-col sm:flex-row gap-4">
				<FieldSearch />

				<div className="relative">
					<Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />

					<select
						value={orderBy}
						onChange={(e) => setOrderBy(e.target.value)}
						data-testid="order-by-select"
						className="pl-10 pr-8 py-2 border border-gray-300 rounded-md outline-none appearance-none bg-white"
					>
						{SELECT_OPTIONS.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
};
