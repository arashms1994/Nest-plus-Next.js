import { useQuery } from "@tanstack/react-query";
import Axios from "../base";
import { ICategory } from "@/type/serverTypes";

export async function userGetCategory(slug: string) {
  const res = await Axios.get<ICategory>(`/categories/${slug}`);
  return res.data;
}

export function useUserCategoryQuery(slug: string) {
  return useQuery({
    queryKey: ["user-category", slug],
    queryFn: () => userGetCategory(slug),
  });
}