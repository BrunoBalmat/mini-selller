import type { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> & {
	variant?: "primary" | "secondary" | "tertiary";
	loading?: boolean;
};
