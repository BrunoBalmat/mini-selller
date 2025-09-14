import { User } from "lucide-react";

export const EmptyState = () => (
	<div className="min-h-[70vh] bg-white rounded-lg shadow flex items-center flex-col justify-center gap-8">
		<User className="mx-auto h-12 w-12 text-gray-400 mb-4" />
		<h3 className="text-lg font-medium text-gray-900 mb-2">No leads found</h3>
		<p className="text-gray-500">Start by adding some leads to your system.</p>
	</div>
);
