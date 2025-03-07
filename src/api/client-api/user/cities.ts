import { useQuery } from "@tanstack/react-query";
import Axios from "../base";
import { ICity, PaginatedResultApi } from "@/type/serverTypes";

async function userGetAllCities(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<ICity>>("/cities", {
    params: { ...params, pageSize: 25 },
  });
  return res.data;
}

export function useUserCitiesQuery(q: string) {
  return useQuery({
    queryKey: ["user-cities", q],
    queryFn: () => userGetAllCities({ q }),
  });
}