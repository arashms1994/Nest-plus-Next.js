import { useQuery } from "@tanstack/react-query";
import Axios from "../base";
import { IProduct, PaginatedResultApi } from "@/type/serverTypes";

async function shopGetAllProducts(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<IProduct>>("/shop/products", {
    params: { ...params, pageSize: 25 },
  });
  return res.data;
}

export function useShopProductsQuery(q: string) {
  return useQuery({
    queryKey: ["shop-products", q],
    queryFn: () => shopGetAllProducts({ q }),
  });
}
