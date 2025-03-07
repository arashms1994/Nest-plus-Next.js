import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

async function shopAddProductPrice(
  code: string,
  body: { price: number; count: number; discount: number }
): Promise<IProduct> {
  const res = await Axios.post<IProduct>(
    `/sellers/product/${code}/add-price`,
    body
  );
  return res.data;
}

export function useShopProductsPriceQuery(q: string) {
  return useQuery({
    queryKey: ["shop-products-price", q],
    queryFn: () => shopAddProductPrice({ q }),
  });
}

// export function useAddProductPriceMutation() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: ({
//       code,
//       body,
//     }: {
//       code: string;
//       body: { price: number; count: number; discount: number };
//     }) => shopAddProductPrice(code, body),
//     onSuccess: () => {
//       queryClient.invalidateQueries(["shop-products-price"]);
//     },
//   });
// }
