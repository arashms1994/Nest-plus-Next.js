import { ServerPageProps } from "@/type/serverTypes";
import { ColorsTable } from "./colors-table";
import { getColors } from "@/api/server-api/colors";
import { TableContainer } from "@/components/dashboard-components/tables/table.container";

export default async function ColorsPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const colors = await getColors(params);
  return (
    <TableContainer title="رنگ" createLink="/dashboard/colors/create">
      <ColorsTable colors={colors} />
    </TableContainer>
  );
}
