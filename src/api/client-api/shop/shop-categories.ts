import { ICategory, PaginatedResultApi } from "@/type/serverTypes";
import Axios from "../base";
import { useQuery } from "@tanstack/react-query";

async function shopGetAllCategories(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<ICategory>>(
    "shop/categories",
    {
      params: { ...params, pageSize: 20 },
    }
  );
  return res.data;
}

export function useShopCategoriesQuery(q: string) {
  return useQuery({
    queryKey: ["shop-categories", q],
    queryFn: () => shopGetAllCategories({ q }),
  });
}
