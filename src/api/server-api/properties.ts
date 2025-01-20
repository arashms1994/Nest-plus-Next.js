import { BASE_URL } from "@/config.server";
import { auth } from "@/lib/session";
import { IProperty, PaginatedResultApi } from "@/type/serverTypes";

export const getProperties = async (
  params?: any
): Promise<PaginatedResultApi<IProperty>> => {
  const { accessToken } = await auth();
  const search = new URLSearchParams(params);
  const data = await fetch(`${BASE_URL}/properties?${search.toString()}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  }).then((res) => res.json());
  return data;
};
