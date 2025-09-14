import type { Lead } from "../../interfaces";

export interface DrawerProps {
	lead: Lead;
	open: boolean;
	onClose: () => void;
	refetch: () => void;
}
