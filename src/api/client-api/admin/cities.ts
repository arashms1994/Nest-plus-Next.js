import { useQuery } from "@tanstack/react-query";
import Axios from "../base";
import { ICity, PaginatedResultApi } from "@/type/serverTypes";

async function getAllCities(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<ICity>>("/admin/cities", {
    params: { ...params, pageSize: 25 },
  });
  return res.data;
}

export function useCitiesQuery(q: string) {
  return useQuery({
    queryKey: ["cities", q],
    queryFn: () => getAllCities({ q }),
  });
}
