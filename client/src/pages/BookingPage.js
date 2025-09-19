// app/(public)/booking/[id]/page.jsx
"use client"

import { useState, useMemo, useEffect } from "react";
import { BookTrip } from "@/components/_bookTrip/bookTrip";
import { useBooking } from "@/hooks/useBooking";        // GET eksisterende bookings
import { useBookATrip } from "@/hooks/useBookATrip";    // POST booking (samme stil som useLogin)
import { useTrips } from "@/hooks/useTrips";
import { useAuth } from "@/providers/auth.provider";

import { LoadingWavyDots } from "@/components/UI/Loading.../LoadingWavyDots";
import { ErrorMessage } from "@/components/UI/Error.../ErrorMessage";
import { SeatsRemaining } from "@/utils/seatsRemaining";

export default function BookingPage({ id }) {
  // hooks 
  const { data: tripData,    loading: tripLoading,    error: tripError }    = useTrips(id);
  const { data: bookingData, loading: bookingLoading, error: bookingError } = useBooking();
  const { loginData, loading: authLoading } = useAuth();
  const { book, error: postError }  = useBookATrip();

  // UI state
  const [seats, setSeats]     = useState(1);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  // data
  const trip     = Array.isArray(tripData)    ? tripData[0] : (tripData ?? null);
  const bookings = Array.isArray(bookingData) ? bookingData : [];

  // beregning
  const remaining = useMemo(() => SeatsRemaining(trip, bookings), [trip, bookings]);
  const maxSeats  = Math.min(remaining, 4);

  // Hvis seats ændrer sig
  useEffect(() => {

    if (maxSeats <= 0) setSeats(0);
    else if (seats === 0) setSeats(1);
    else if (seats > maxSeats) setSeats(maxSeats);
  }, [maxSeats]);

  const totalPrice = (trip?.pricePerSeat || 0) * (seats || 0);


  // loaders & errors
  if (tripLoading || bookingLoading || authLoading) return <LoadingWavyDots text="Indlæser..." />;
  if (tripError   || bookingError   || postError) return <ErrorMessage message="Error fetching trip" />;


  return (
    <div className="max-w-sm mx-auto">

      {success && (
        <div className="mb-3 rounded-xl bg-green-100 text-green-800 px-3 py-2 text-sm">
          {success}
        </div>
      )}
      {postError && <ErrorMessage message={postError.message || "Kunne ikke reservere plads."} />}

      {!loginData && (
        <div className="mb-3 mt-4 rounded-xl bg-yellow-50 text-yellow-800 px-3 py-2 text-xs">
          <p>Log ind for at kunne fuldføre bookingen.</p>
        </div>
      )}

      <BookTrip
        trip={trip}
        maxSeats={maxSeats}
        seats={seats}
        message={message}
        totalPrice={totalPrice}
        onSeatsChange={(n) => setSeats(Math.min(n, maxSeats))}
        onMessageChange={setMessage}
        onBack={() => history.back()}
        onSubmit={async (e) => {
          e.preventDefault();
          setSuccess("");

          if (!loginData) return;

          const payload = { tripId: trip.id, numSeats: seats };
          const result = await book(payload);
          if (result) setSuccess("Din plads er reserveret");
        }}
      />

    </div>
  );
}
