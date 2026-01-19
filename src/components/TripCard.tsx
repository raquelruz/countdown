import type { Trip } from "../types/countdown.types";

interface TripCardProps {
	trip: Trip;
	daysLeft: number,
	onRemove: () => void;
}

export const TripCard = ({ trip, daysLeft, onRemove }: TripCardProps) => {
	const isPast = daysLeft < 0;
	const isToday = daysLeft === 0;

	let statusLabel = "";

	if (isPast) statusLabel = "Ya pasó";
	else if (isToday) statusLabel = "¡Es hoy!";
	else statusLabel = `Faltan ${daysLeft} días`;

	const statusColor = isPast ? "text-red-400" : isToday ? "text-blue-600" : "text-secondary";

	return (
		<article className="flex items-center justify-between px-4 py-3 rounded-xl border border-border bg-brackground backdrop-blur-sm transition-all hover:border-accent">
			<div>
				<h2 className="text-base font-semibold text-text">{trip.name}</h2>

				<p className="text-xs text-text-muted mt-2">
					{new Date(trip.date + "T00:00:00").toLocaleDateString("es-ES")}
				</p>

				<p className={`text-sm mt-1.5 font-medium ${statusColor}`}>{statusLabel}</p>
			</div>

			<button
				type="button"
				onClick={onRemove}
				className="text-xs px-3 py-1.5 rounded-full border border-slate-400/70 text-slate-200 hover:bg-slate-800 transition-colors"
			>
				Eliminar
			</button>
		</article>
	);
};
