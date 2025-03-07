import { ServerPageProps } from "@/type/serverTypes";
import { BadgesTable } from "./badges-table";
import { TableContainer } from "@/components/dashboard-components/tables/table-container";
import { getBadges } from "@/api/server-api/admin/badges";

export default async function BadgesPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const badges = getBadges(params);
  return (
    <TableContainer title="برچسب ها" createLink="/dashboard/badges/create">
      <BadgesTable badges={badges} />
    </TableContainer>
  );
}
