import { TableContainer } from "@/components/dashboard-components/tables/table-container";
import { UsersTable } from "./user-table";
import { getAllUsers } from "@/api/server-api/admin/users";
import { ServerPageProps } from "@/type/serverTypes";

export default async function UsersPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const users = getAllUsers(params);
  return (
    <TableContainer title="کاربران" createLink="/dashboard/users/create">
      <UsersTable users={users} />
    </TableContainer>
  );
}
