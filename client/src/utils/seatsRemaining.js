export const SeatsRemaining = (trip, bookings = []) => {
  const total  = trip?.seatsTotal || 0;
  const tripId = trip?.id;

  const booked = bookings
    .filter(b => String(b?.tripId) === tripId)
    .reduce((sum, b) => sum + (((b?.numSeats ?? b?.seats) ?? 1) || 0), 0);

  return Math.max(0, total - booked);
};
