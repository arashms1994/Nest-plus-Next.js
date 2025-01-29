import { getProperties } from "@/api/server-api/properties";
import { TableContainer } from "@/components/dashboard-components/tables/table.container";
import { ServerPageProps } from "@/type/serverTypes";
import { PropertiesTable } from "./properties-table";

export default async function Properties({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const properties = await getProperties(params);
  return (
    <TableContainer title="مشخصات" createLink="/dashboard/properties/create">
      <PropertiesTable properties={properties} />
    </TableContainer>
  );
}
