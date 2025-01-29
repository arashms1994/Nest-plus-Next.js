"use client";

import { deleteCityAction } from "@/actions/cities";
import AITable from "@/components/dashboard-components/tables/AITable";
import DeleteAlertDialog from "@/components/delete-dialog";
import { ICity, PaginatedResultApi } from "@/type/serverTypes";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";
import Link from "next/link";
import { use } from "react";

export default function CityTable({
  cities,
}: {
  cities: Promise<PaginatedResultApi<ICity>>;
}) {
  const allCity = use(cities);
  return (
    <AITable
      actions={(p) => (
        <Stack direction={"row"}>
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={"/dashboard/cities/update/" + p.id}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <DeleteAlertDialog
              onConfirm={async () => {
                deleteCityAction(p.id);
              }}
            >
              <IconButton color="error">
                <Delete />
              </IconButton>
            </DeleteAlertDialog>
          </Tooltip>
        </Stack>
      )}
      data={allCity}
      schema={[
        {
          title: "شناسه",
          render: (row) => row.id,
        },
        {
          title: "کد شهر",
          render: (row) => row.slug,
        },
        {
          title: "نام فارسی",
          render: (row) => row.name,
        },
        {
          title: "پیش شماره",
          render: (row) => row.code,
        },
        {
          title: "تاریخ ساخت",
          render: (row) => new Date(row.createdAt).toLocaleDateString("fa"),
        },
        {
          title: "آخرین بروزرسانی",
          render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
        },
      ]}
    />
  );
}
