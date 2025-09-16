import { Danish } from "./danishCapitals";

export function filterTrips(trips, from, to) {
    
  const fromValue = Danish(from);
  const toValue = Danish(to);


  return trips.filter(({ cityDeparture, cityDestination }) =>
    (!fromValue || Danish(cityDeparture).includes(fromValue)) &&
    (!toValue   || Danish(cityDestination).includes(toValue))
  );
}
