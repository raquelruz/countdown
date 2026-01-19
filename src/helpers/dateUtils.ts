export const getDaysLeft = (targetDate) => {
	const today = new Date();
	const target = new Date(targetDate + "T00:00:00");

	const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
	const end = new Date(target.getFullYear(), target.getMonth(), target.getDate());

	const diffMs = end.getTime() - start.getTime();
	const oneDayMs = 1000 * 60 * 60 * 24;



	return Math.ceil(diffMs / oneDayMs);
};
