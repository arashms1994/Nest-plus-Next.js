"use client";

import { deleteBrandAction } from "@/actions/brands";
import AITable from "@/components/dashboard-components/tables/AITable";
import DeleteAlertDialog from "@/components/delete-dialog";
import { IBrand, PaginatedResultApi } from "@/type/serverTypes";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";
import Link from "next/link";
import { use } from "react";

export function BrandsTable({
  brands,
}: {
  brands: Promise<PaginatedResultApi<IBrand>>;
}) {
  const brandsList = use(brands);
  return (
    <AITable
      actions={(p) => (
        <Stack direction={"row"}>
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={"/dashboard/brands/update/" + p.id}
            >
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="حذف">
            <DeleteAlertDialog onConfirm={async () => deleteBrandAction(p.id)}>
              <IconButton color="error">
                <Delete />
              </IconButton>
            </DeleteAlertDialog>
          </Tooltip>
        </Stack>
      )}
      data={brandsList}
      schema={[
        {
          title: "نشانک",
          render: (row) => row.slug,
        },
        {
          title: "نام فارسی",
          render: (row) => row.titleFa,
        },
        {
          title: "نام انگلیسی",
          render: (row) => row.titleEn,
        },
        {
          title: "بروزرسانی",
          render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
        },
      ]}
    />
  );
}
