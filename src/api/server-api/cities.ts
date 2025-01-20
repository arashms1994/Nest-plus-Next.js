import { BASE_URL } from "@/config.server";
import { auth } from "@/lib/session";
import { ICity, PaginatedResultApi } from "@/type/serverTypes";

export const getCities = async (
  params?: any
): Promise<PaginatedResultApi<ICity>> => {
  const { accessToken } = await auth();
  const search = new URLSearchParams(params);
  const data = await fetch(`${BASE_URL}/cities?${search.toString()}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  }).then((res) => res.json());
  return data;
};
