import { X } from "lucide-react";

import type { HeaderDrawerProps } from "./types";

export function HeaderDrawer({ onClose }: HeaderDrawerProps) {
	return (
		<div className="flex items-center justify-between p-6 border-b border-gray-200">
			<h2 className="text-lg font-semibold text-gray-900">Lead Details</h2>
			<button
				onClick={onClose}
				className="text-gray-400 hover:text-gray-600 transition-colors"
			>
				<X className="h-6 w-6" />
			</button>
		</div>
	);
}
