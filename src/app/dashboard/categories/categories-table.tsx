"use client";

import { deleteCategoryAction } from "@/actions/categories";
import AITable from "@/components/dashboard-components/tables/AITable";
import DeleteAlertDialog from "@/components/delete-dialog";
import { ICategory, IProperty, PaginatedResultApi } from "@/type/serverTypes";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";
import Link from "next/link";

export function CategoriesTable({
  categories,
}: {
  categories: PaginatedResultApi<ICategory>;
}) {
  return (
    <AITable
      actions={(p) => (
        <Stack direction={"row"}>
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={"/dashboard/categories/update/" + p.id}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <DeleteAlertDialog
              onConfirm={async () => deleteCategoryAction(p.id)}
            >
              <IconButton color="error">
                <Delete />
              </IconButton>
            </DeleteAlertDialog>
          </Tooltip>
        </Stack>
      )}
      subTable={{
        header: "ویژگی ها",
        key: "properties",
        schema: [
          {
            title: "شماره",
            render: (row: IProperty) => row.id,
          },
          {
            title: "برچسب",
            render: (row) => row.label,
          },
          {
            title: "نام",
            render: (row) => row.name,
          },
          {
            title: "نوع داده",
            render: (row) => row.type,
          },
        ],
      }}
      data={categories}
      schema={[
        {
          title: "نشانک",
          render: (row) => row.slug,
        },
        {
          title: "دسته بندی مادر",
          render: (row) => row.parent?.slug ?? "-",
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
