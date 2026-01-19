import { TripCard } from "./TripCard";
import { getDaysLeft } from "../helpers/dateUtils";
import type { Trip } from "../types/countdown.types";

type TripList = {
	trips: Trip[];
	onRemoveTrip: (id: number) => void;
}

export const TripList = ({ trips, onRemoveTrip }: TripList) => {
	if (trips.length === 0) {
		return <p className="text-sm text-text italic">Aún no has añadido ningún viaje.</p>;
	}

	return (
		<div className="grid gap-3">
			{trips.map((trip) => {
				const daysLeft = getDaysLeft(trip.date); 

				return (
					<TripCard
						key={trip.id}
						trip={trip}
						daysLeft={daysLeft} 
						onRemove={() => onRemoveTrip(trip.id)}
					/>
				);
			})}
		</div>
	);
};
