import { useFetch } from "./useFetch";

export function useSlides() {

return useFetch('/api/slides', "GET");
}