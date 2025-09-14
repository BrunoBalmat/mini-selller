import { useRef, useState, type MouseEvent } from "react";

import { HeaderDrawer } from "./Header";
import { FooterDrawer } from "./Footer";
import type { DrawerProps } from "./types";
import { useFormEditLead, useFormConverting } from "@/modules/leads/hooks";
import type { OpportunityData } from "@/modules/leads/hooks/useFormConverting/types";
import { ContentDrawer } from "./Content";

const INITIAL_CONVERSION_DATA = {
	stage: "Prospecting",
	amount: 0,
};

export const Drawer = ({ open, onClose, lead, refetch }: DrawerProps) => {
	const [conversionData, setConversionData] = useState<OpportunityData>(
		INITIAL_CONVERSION_DATA
	);

	const callbackConvert = () => {
		onCloseDrawer();
		refetch();
	};

	const {
		onConvert,
		isConverting,
		errorMessage: conversionErrorMessage,
	} = useFormConverting(callbackConvert);

	const { onSubmit, isEditing, setIsEditing, form } = useFormEditLead(
		lead,
		conversionData,
		callbackConvert
	);

	const containerRef = useRef<HTMLDivElement>(null);

	const onContainerClick = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === containerRef.current) {
			onCloseDrawer();
		}
	};

	const onCloseDrawer = () => {
		setIsEditing(false);
		setConversionData(INITIAL_CONVERSION_DATA);
		onClose();
	};

	const onCancel = () => {
		setIsEditing(false);
		setConversionData(INITIAL_CONVERSION_DATA);
	};

	if (!open) {
		return null;
	}

	return (
		<div
			className="fixed inset-0 bg-gray-500/40 transition-opacity z-50"
			ref={containerRef}
			onClick={onContainerClick}
		>
			<div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform z-[9999]">
				<form className="flex flex-col h-full" onSubmit={onSubmit}>
					<HeaderDrawer onClose={onCloseDrawer} />

					<ContentDrawer
						lead={lead}
						form={form}
						isEditing={isEditing}
						conversionData={conversionData}
						setConversionData={setConversionData}
						conversionErrorMessage={conversionErrorMessage}
					/>

					<FooterDrawer
						lead={lead}
						onCancel={onCancel}
						isEditing={isEditing}
						isConverting={isConverting}
						onEdit={() => setIsEditing(true)}
						isSubmittingEdit={form.formState.isSubmitting}
						onConvert={() => onConvert(lead, conversionData)}
					/>
				</form>
			</div>
		</div>
	);
};
