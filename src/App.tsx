import { useState } from "react";
import "./App.css";
import { TripForm } from "./components/TripForm";
import { TripList } from "./components/TripList";
import { ThemeToggle } from "./components/ThemeToggle";

export const App = () => {
	const [trips, setTrips] = useState([
		{
			id: 1,
			name: "Viaje a Viena",
			date: "2026-02-17",
		},
	]);

	const handleAddTrip = (name, date) => {
		const newTrip = {
			id: Date.now(),
			name,
			date,
		};

		setTrips((prevTrips) => [...prevTrips, newTrip]);
	};

	const handleRemoveTrip = (id) => {
		setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== id));
	};

	return (
		<main className="h-screen flex items-center justify-center bg-background text-text font-sans px-4">
			<section className="w-full rounded-2xl border border-border bg-background-soft shadow-2xl p-6 md:p-8">
				<header className="mb-6">
					<div className="flex justify-between">
						<p className="text-[0.7rem] uppercase tracking-[0.18em] text-text-muted">
							React + TypeScript · Props
						</p>
						<ThemeToggle />
					</div>
					<h1 className="mt-1 text-2xl font-semibold">Mis próximos viajes ✈️</h1>
					<p className="mt-1 text-sm text-text-muted">
						Añade tus viajes con fecha y mira cuántos días quedan para cada uno.
					</p>
				</header>

				<TripForm onAddTrip={handleAddTrip} />
				<TripList trips={trips} onRemoveTrip={handleRemoveTrip} />
			</section>
		</main>
	);
};
