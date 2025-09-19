import { useFetch } from "./useFetch";

export function useReview() {

return useFetch('/api/reviews', "GET");
}