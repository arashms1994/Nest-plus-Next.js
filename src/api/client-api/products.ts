import { useQuery } from "@tanstack/react-query";
import Axios from "./base";
import { IProduct, PaginatedResultApi } from "@/type/serverTypes";

async function getAllProducts(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<IProduct>>("/admin/products", {
    params: { ...params, pageSize: 25 },
  });
  return res.data;
}

export function useProductsQuery(q: string) {
  return useQuery({
    queryKey: ["products", q],
    queryFn: () => getAllProducts({ q }),
  });
}
