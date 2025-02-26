"use client";

import { Alert, Stack } from "@mui/material";
import React, { useActionState, useEffect } from "react";
import AIForm from "../AIForm";
import { useRouter } from "next/navigation";
import { IProduct } from "@/type/serverTypes";
import { shopAddPriceProductAction } from "@/actions/shop/shop-products";
import SubmitButton from "@/components/submit-button";

type ProductFormProps = {
  defaultValue?: IProduct;
};

function ShopProductForm({ defaultValue }: ProductFormProps) {
  const [state, action] = useActionState(shopAddPriceProductAction, {
    message: "",
    success: false,
  });
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      router.push("/shop/products");
    }
  }, [state.success, router]);

  return (
    <form action={action}>
      <input hidden name="code" defaultValue={defaultValue?.id} />

      <Stack
        direction="column"
        gap={5}
        alignItems="center"
        justifyContent="center"
      >
        {state.message && <Alert severity="warning">{state.message}</Alert>}
        <AIForm
          schema={[
            {
              name: "price",
              type: "number",
              label: "قیمت",
              defaultValue: defaultValue?.bestSeller?.price,
              error: !!state.errors?.price,
              helperText: state.errors?.price?.join(", "),
            },
            {
              name: "count",
              label: "موجودی",
              size: 6,
              type: "number",
              defaultValue: defaultValue?.bestSeller?.count,
              error: !!state.errors?.count,
              helperText: state.errors?.count?.join(", "),
            },
            {
              name: "discount",
              label: "تخفیف",
              size: 6,
              type: "number",
              defaultValue: defaultValue?.bestSeller?.discount,
              error: !!state.errors?.discount,
              helperText: state.errors?.discount?.join(", "),
            },
          ]}
        />
        <SubmitButton variant="contained">ذخیره</SubmitButton>
      </Stack>
    </form>
  );
}

export default ShopProductForm;
