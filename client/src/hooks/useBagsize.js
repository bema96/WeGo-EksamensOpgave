import { useFetch } from "./useFetch";

export function useBagsize() {

return useFetch('/api/bagsizes', "GET");
}