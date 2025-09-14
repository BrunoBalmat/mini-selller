export function formatCurrency(amount: number | undefined) {
	if (!amount) return "0";

	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
}
