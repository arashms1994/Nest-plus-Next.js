import { BASE_URL } from "@/config.server";
import { auth } from "@/lib/session";
import { IProduct, PaginatedResultApi } from "@/type/serverTypes";

export const getProducts = async (
  params?: any
): Promise<PaginatedResultApi<IProduct>> => {
  const { accessToken } = await auth();
  const search = new URLSearchParams(params);
  const data = await fetch(`${BASE_URL}/products?${search.toString()}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  }).then((res) => res.json());
  return data;
};
