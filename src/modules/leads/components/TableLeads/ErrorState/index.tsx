import { AlertTriangle } from "lucide-react";

interface ErrorStateProps {
	onRetry: () => void;
}

export const ErrorState = ({ onRetry }: ErrorStateProps) => (
	<div className="min-h-[70vh] bg-white rounded-lg shadow flex items-center flex-col justify-center gap-8">
		<AlertTriangle className="h-24 w-24 text-orange-500" />

		<h2 className="text-xl font-semibold text-gray-900">Error Loading Data</h2>

		<button
			onClick={onRetry}
			className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
		>
			Retry
		</button>
	</div>
);
