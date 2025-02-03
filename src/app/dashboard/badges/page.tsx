import { ServerPageProps } from "@/type/serverTypes";
import { BadgesTable } from "./badges-table";
import { getBadges } from "@/api/server-api/badges";
import { TableContainer } from "@/components/dashboard-components/tables/table-container";

export default async function BadgesPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const badges = getBadges(params);
  return (
    <TableContainer title="برچسب ها" createLink="/dashboard/badges/create">
      <BadgesTable badges={badges} />
    </TableContainer>
  );
}
