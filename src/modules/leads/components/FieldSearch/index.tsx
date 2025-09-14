import { Search } from "lucide-react";

import { useSearchLead } from "@/modules/leads/hooks";

export function FieldSearch() {
	const { value, onSubmit, onChange } = useSearchLead();

	return (
		<form
			className="border border-gray-300 rounded-md w-full h-10 flex items-center px-4 gap-4"
			onSubmit={onSubmit}
			data-testid="field-search"
		>
			<button type="submit" data-testid="submit-button">
				<Search className="h-4 w-4 text-gray-400" data-testid="search-icon" />
			</button>

			<input
				type="text"
				value={value}
				onChange={onChange}
				placeholder="Search by name or company..."
				className="w-full pr-4 h-full border-none outline-none"
			/>
		</form>
	);
}
