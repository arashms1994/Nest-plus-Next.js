import { BASE_URL } from "@/config.server";
import { auth } from "@/lib/session";
import { ICategory, PaginatedResultApi } from "@/type/serverTypes";

export const getCategories = async (
  params?: any
): Promise<PaginatedResultApi<ICategory>> => {
  const { accessToken } = await auth();
  const search = new URLSearchParams(params);
  const data = await fetch(`${BASE_URL}/categories?${search.toString()}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  }).then((res) => res.json());
  return data;
};
