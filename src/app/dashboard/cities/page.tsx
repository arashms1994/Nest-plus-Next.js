"use server";

import { getCities } from "@/api/server-api/cities";
import { TableContainer } from "@/components/dashboard-components/tables/table.container";
import { ServerPageProps } from "@/type/serverTypes";
import CityTable from "./cities-table";

export default async function Cities({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const cities = getCities(params);
  return (
    <TableContainer title="شهر" createLink="/dashboard/cities/create">
      <CityTable cities={cities} />
    </TableContainer>
  );
}
