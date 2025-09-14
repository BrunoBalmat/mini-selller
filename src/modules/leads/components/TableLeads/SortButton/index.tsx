import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import type { SortButtonProps } from "./types";

export const SortButton = ({ 
	handleSort, 
	field, 
	sortField, 
	sortDirection 
}: SortButtonProps) => {
	const isActive = sortField === field;
	
	const getIcon = () => {
		if (!isActive) return <ArrowUpDown className="ml-1 h-3 w-3" />;
		if (sortDirection === "asc") return <ArrowUp className="ml-1 h-3 w-3" />;
		return <ArrowDown className="ml-1 h-3 w-3" />;
	};

	return (
		<button
			onClick={() => handleSort(field as any)}
			className={`flex items-center hover:text-gray-700 cursor-pointer ${
				isActive ? "text-blue-600 font-medium" : ""
			}`}
		>
			{field}
			{getIcon()}
		</button>
	);
};
