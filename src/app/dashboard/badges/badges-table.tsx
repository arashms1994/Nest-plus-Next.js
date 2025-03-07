"use client";

import { deleteBadgeAction } from "@/actions/admin/badges";
import AITable from "@/components/dashboard-components/tables/AITable";
import DeleteAlertDialog from "@/components/delete-dialog";
import { IBadge, PaginatedResultApi } from "@/type/serverTypes";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";
import Link from "next/link";
import { use } from "react";

export function BadgesTable({
  badges,
}: {
  badges: Promise<PaginatedResultApi<IBadge>>;
}) {
  const allBadges = use(badges);
  return (
    <>
      <AITable
        actions={(p) => (
          <Stack direction={"row"}>
            <Tooltip title="ویرایش">
              <IconButton
                color="secondary"
                component={Link}
                href={"/dashboard/badges/update/" + p.id}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="حذف">
              <DeleteAlertDialog
                onConfirm={async () => deleteBadgeAction(p.id)}
              >
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </DeleteAlertDialog>
            </Tooltip>
          </Stack>
        )}
        data={allBadges}
        schema={[
          {
            title: "شناسه",
            render: (row) => row.id,
          },
          {
            title: "عنوان",
            render: (row) => row.title,
          },
          {
            title: "icon",
            render: (row) => row.icon,
          },
          {
            title: "بروزرسانی",
            render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
          },
        ]}
      />
    </>
  );
}
