import { clsx } from "clsx";
import type { ButtonProps } from "./types";

export function Button({
	children,
	disabled,
	loading,
	variant = "primary",
	...props
}: ButtonProps) {
	return (
		<button
			disabled={disabled || loading}
			className={clsx(
				"w-full px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2",
				variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
				variant === "secondary" && "bg-green-600 text-white hover:bg-green-700",
				variant === "tertiary" && "bg-gray-300 text-gray-700 hover:bg-gray-400",
				disabled && "opacity-50 cursor-not-allowed"
			)}
			{...props}
		>
			{loading ? (
				<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
			) : (
				children
			)}
		</button>
	);
}
