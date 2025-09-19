import { useFetch } from "./useFetch";

export function useTrips(id) {

  const endpoint = id ? `/api/trips/${id}` : "/api/trips";
  
  return useFetch(endpoint, { method: "GET" });
}