import { IBrand, PaginatedResultApi } from "@/type/serverTypes";
import Axios from "../base";
import { useQuery } from "@tanstack/react-query";

async function getAllBrands(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<IBrand>>("admin/brands", {
    params: { ...params, pageSize: 20 },
  });
  return res.data;
}

export function useBrandsQuery(q: string) {
  return useQuery({
    queryKey: ["brands", q],
    queryFn: () => getAllBrands({ q }),
  });
}
