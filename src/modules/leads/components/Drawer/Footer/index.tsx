import { Save, TrendingUp, XCircle } from "lucide-react";

import type { FooterDrawerProps } from "./types";
import { Button } from "@/shared/components";

export function FooterDrawer({
	lead,
	onEdit,
	onCancel,
	isEditing,
	onConvert,
	isConverting,
	isSubmittingEdit,
}: FooterDrawerProps) {
	if (isEditing) {
		return (
			<div className="border-t border-gray-200 p-6 flex space-x-3">
				<Button
					type="submit"
					disabled={isSubmittingEdit}
					loading={isSubmittingEdit}
				>
					<Save className="h-4 w-4 mr-2" />
					Save Changes
				</Button>

				<Button type="button" onClick={onCancel} variant="tertiary">
					<XCircle className="h-4 w-4 mr-2" />
					Cancel
				</Button>
			</div>
		);
	}

	return (
		<div className="border-t border-gray-200 p-6">
			<div className="space-y-3">
				<Button type="button" onClick={onEdit}>
					Edit Lead
				</Button>

				{lead.status !== "Converted" && (
					<Button
						type="button"
						onClick={onConvert}
						disabled={isConverting}
						loading={isConverting}
						variant="secondary"
					>
						<TrendingUp className="h-4 w-4 mr-2" />
						Convert to Opportunity
					</Button>
				)}
			</div>
		</div>
	);
}
