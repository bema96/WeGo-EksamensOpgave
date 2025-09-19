// map fra præference-key -> feltnavn i trip
const preference = {
  music:   "allowMusic",
  børn:    "allowChildren",
  dyr:     "allowPets",
  rygning: "allowSmoking",
};


export function filteredTrips(trips, selectedFilter = "") {
  if (!selectedFilter) return trips;

  if (selectedFilter.startsWith("seats>=")) {
    const n = Number(selectedFilter.split(">=")[1] || 1);
    return trips.filter(trip => (trip.seatsTotal || 0) >= n);
  }

  if (selectedFilter.startsWith("bag=")) {
    const id = selectedFilter.split("=")[1] ?? "";
    return id === "" ? trips : trips.filter(trip => trip.bagSizeId === id);
  }

  if (selectedFilter === "comfort") {
    return trips.filter(trip => trip.hasComfort === true);
  }

  if (selectedFilter.startsWith("preference:")) {
    const key  = selectedFilter.split(":")[1];
    const flag = preference[key];
    return flag ? trips.filter(trip => trip[flag] === true) : trips;
  }

  return trips;
}
