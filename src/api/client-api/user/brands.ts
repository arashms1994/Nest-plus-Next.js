import { IBrand } from "@/type/serverTypes";
import { useQuery } from "@tanstack/react-query";
import Axios from "../base";

export async function userGetBrand(slug: string) {
  const res = await Axios.get<IBrand>(`/brands/${slug}`);
  return res.data;
}

export function useUserBrandQuery(slug: string) {
  return useQuery({
    queryKey: ["user-brand", slug],
    queryFn: () => userGetBrand(slug),
  });
}
