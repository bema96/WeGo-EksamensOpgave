import { useFetch } from "./useFetch";

export function useTrips() {

return useFetch('/api/trips', "GET");
}