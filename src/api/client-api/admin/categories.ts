import { ICategory, PaginatedResultApi } from "@/type/serverTypes";
import Axios from "./base";
import { useQuery } from "@tanstack/react-query";

async function getAllCategories(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<ICategory>>(
    "admin/categories",
    {
      params: { ...params, pageSize: 20 },
    }
  );
  return res.data;
}

export function useCategoriesQuery(q: string) {
  return useQuery({
    queryKey: ["categories", q],
    queryFn: () => getAllCategories({ q }),
  });
}
