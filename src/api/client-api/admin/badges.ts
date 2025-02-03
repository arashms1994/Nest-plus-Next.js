import { IBadge, PaginatedResultApi } from "@/type/serverTypes";
import Axios from "./base";
import { useQuery } from "@tanstack/react-query";

async function getAllBadges(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<IBadge>>("admin/badges", {
    params: { ...params, pageSize: 20 },
  });
  return res.data;
}

export function useBadgesQuery(q: string) {
  return useQuery({
    queryKey: ["badges", q],
    queryFn: () => getAllBadges({ q }),
  });
}
