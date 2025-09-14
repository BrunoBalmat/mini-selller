import { STAGE_COLORS } from "@/shared/constants";

export function getStageColor(stage: string) {
	if (!STAGE_COLORS[stage]) {
		return STAGE_COLORS.default;
	}

	return STAGE_COLORS[stage];
}
