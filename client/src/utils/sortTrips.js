
const PREF_FLAG = {
  music:   "allowMusic",
  børn:    "allowChildren",
  dyr:     "allowPets",
  rygning: "allowSmoking",
};

export function sortTrips( trips, { seats = 1, bagSizeId = null, comfort = false, prefs = [] } = {}, bagOptions = [] ) {


  const bagIds = bagOptions.map(o => o.id);        
  const needIdx = bagSizeId == null ? -1 : bagIds.indexOf(bagSizeId);

  return trips.filter(t => {
    const okSeats    = t.seatsTotal >= seats;
    const okBag      = needIdx < 0 ? true : bagIds.indexOf(t.bagSizeId) >= needIdx;
    const okComfort  = !comfort || t.hasComfort === true;
    const okPrefs    = prefs.every(p => t[PREF_FLAG[p]] === true);

    return okSeats && okBag && okComfort && okPrefs;
  });
}
