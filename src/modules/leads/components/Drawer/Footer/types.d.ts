export interface FooterDrawerProps {
	lead: Lead;
	isEditing: boolean;
	isConverting: boolean;
	onCancel: () => void;
	onConvert: () => void;
	onEdit: () => void;
	isSubmittingEdit: boolean;
}
