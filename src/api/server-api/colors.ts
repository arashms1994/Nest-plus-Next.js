import { BASE_URL } from "@/config.server";
import { auth } from "@/lib/session";
import { IColor, PaginatedResultApi } from "@/type/serverTypes";

export const getColors = async (
  params?: any
): Promise<PaginatedResultApi<IColor>> => {
  const { accessToken } = await auth();
  const search = new URLSearchParams(params);
  const data = await fetch(`${BASE_URL}/colors?${search.toString()}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  }).then((res) => res.json());
  return data;
};
