export const getScoreColor = (score: number) => {
	if (score >= 90) return "text-green-600";
	if (score >= 80) return "text-yellow-600";
	if (score >= 70) return "text-orange-600";
	return "text-red-600";
};
