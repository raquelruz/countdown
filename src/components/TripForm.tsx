import { useState } from "react";

type TripFormProps = {
	onAddTrip: (name: string, date: string) => void;
}

export const TripForm = ({ onAddTrip }: TripFormProps) => {
	const [name, setName] = useState<string>("");
	const [date, setDate] = useState<string>("");

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!name.trim() || !date) {
			return;
		}

		onAddTrip(name.trim(), date);
		setName("");
		setDate("");
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-3 mb-7">
			<div className="flex flex-col gap-1">
				<label htmlFor="trip-name" className="text-xs text-text">
					Nombre del viaje
				</label>

				<input
					id="trip-name"
					type="text"
					value={name}
					onChange={(event) => setName(event.target.value)}
					placeholder="Ej. Roma con amigas"
					className="px-2 py-2 rounded-lg border border-border bg-background text-text text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary"
				/>
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="trip-date" className="text-xs text-text">
					Fecha
				</label>

				<input
					id="trip-date"
					type="date"
					value={date}
					onChange={(event) => setDate(event.target.value)}
					className="px-2 py-2 rounded-lg border border-slate-500/50 bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
				/>
			</div>

			<button
	type="submit"
	className="
		self-end
		px-4 py-2
		rounded-lg
		font-semibold
		text-sm
		text-white
		bg-blue-600
		hover:bg-blue-500
		active:bg-blue-700
		transition-colors
	"
>
	Añadir
</button>
		</form>
	);
};
