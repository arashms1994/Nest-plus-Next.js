import Axios from "../base";
import { IProduct, PaginatedResultApi } from "@/type/serverTypes";
import { useQuery } from "@tanstack/react-query";

export async function userGetProducts(
  params: {
    page?: string;
    pageSize?: string;
    brandSlug?: string;
    categorySlug?: string;
  } = {}
) {
  const res = await Axios.get<PaginatedResultApi<IProduct>>("/products", {
    params: {
      ...params,
      pageSize: params.pageSize || 12,
      ...(params.brandSlug && { brand: params.brandSlug }),
      ...(params.categorySlug && { category: params.categorySlug }),
    },
  });
  return res.data;
}

export function useUserProductsQuery(
  params: {
    page?: string;
    pageSize?: string;
    brandSlug?: string;
    categorySlug?: string;
  } = {}
) {
  return useQuery({
    queryKey: ["user-products", params],
    queryFn: () => userGetProducts(params),
  });
}
