"use client";

import AITable from "@/components/dashboard-components/tables/AITable";
import { IProduct, PaginatedResultApi } from "@/type/serverTypes";
import { Edit } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";
import Link from "next/link";

export function ShopProductTable({
  products,
}: {
  products: PaginatedResultApi<IProduct>;
}) {
  return (
    <AITable
      actions={(p) => (
        <Stack direction={"row"}>
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={`/shop/products/${p.id}/add-price`}
            >
              <Edit />
            </IconButton>
          </Tooltip>
        </Stack>
      )}
      data={products}
      schema={[
        {
          title: "کد",
          render: (row) => row.code,
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
          title: "دسته بندی",
          render: (row) => row.category.titleFa,
        },
        {
          title: "برند",
          render: (row) => row.brand.titleFa,
        },
        {
          title: "قیمت گذاری",
          render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
        },
      ]}
    />
  );
}
