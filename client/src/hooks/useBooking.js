import { useFetch } from "./useFetch";

export function useBooking(id) {

  const endpoint = id ? `/api/bokkings/${id}` : "/api/bookings";
  
  return useFetch(endpoint, { method: "GET" });
}