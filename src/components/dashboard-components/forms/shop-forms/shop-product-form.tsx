"use client";

import { Alert, Stack } from "@mui/material";
import React, { useActionState, useEffect } from "react";
import { SellerInfo } from "@/type/serverTypes";
import SubmitButton from "@/components/submit-button";
import AIForm from "../AIForm";
import { shopAddPriceProductAction } from "@/actions/shop/shop-products";
import { useRouter } from "next/navigation";

type ProductFormProps = {
  defaultValue?: SellerInfo;
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
      {defaultValue?.id && (
        <input hidden name="id" defaultValue={defaultValue.id} />
      )}
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
              name: "lastPrice",
              type: "number",
              label: "قیمت",
              defaultValue: defaultValue?.lastPrice,
              error: !!state.errors?.lastPrice,
              helperText: state.errors?.lastPrice?.join(", "),
            },
            {
              name: "count",
              label: "موجودی",
              size: 6,
              type: "number",
              defaultValue: defaultValue?.count,
              error: !!state.errors?.count,
              helperText: state.errors?.count?.join(", "),
            },
            {
              name: "discount",
              label: "تخفیف",
              size: 6,
              type: "number",
              defaultValue: defaultValue?.discount,
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
