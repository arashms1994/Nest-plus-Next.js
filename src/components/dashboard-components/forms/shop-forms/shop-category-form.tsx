"use client";

import { Stack } from "@mui/material";
import React, { useActionState } from "react";
import AIForm from "../AIForm";
import CategoryField from "../../fields/category-field";
import PropertiesField from "../../fields/properties-field";
import { ICategory } from "@/type/serverTypes";
import SubmitButton from "@/components/submit-button";
import { ShopCreateOrUpdateCategoryAction } from "@/actions/shop/shop-categories";

type CategoryFormProps = {
  defaultValue?: ICategory;
};

export default function ShopCategoryForm({ defaultValue }: CategoryFormProps) {
  const [state, action] = useActionState(ShopCreateOrUpdateCategoryAction, {
    message: "",
    success: false,
  });
  return (
    <form action={action}>
      <Stack spacing={2} mt={2}>
        {defaultValue?.id && (
          <input hidden name="id" defaultValue={defaultValue.id} />
        )}
        <CategoryField
          error={!!state?.errors?.parent}
          helperText={state?.errors?.parent}
          name="parent"
          defaultValue={defaultValue?.parent}
        />
        <PropertiesField
          name="properties"
          defaultValue={defaultValue?.properties}
        />
        <AIForm
          schema={[
            {
              name: "titleFa",
              label: "نام فارسی",
              type: "string",
              defaultValue: defaultValue?.titleFa,
              error: !!state.errors?.titleFa,
              helperText: state.errors?.titleFa,
            },
            {
              name: "titleEn",
              label: "نام انگلیسی",
              type: "string",
              defaultValue: defaultValue?.titleEn,
              error: !!state.errors?.titleEn,
              helperText: state.errors?.titleEn,
            },
            {
              name: "slug",
              label: "نشانک",
              type: "string",
              defaultValue: defaultValue?.slug,
              error: !!state.errors?.slug,
              helperText: state.errors?.slug,
            },
            {
              name: "returnReasonAlert",
              type: "textarea",
              label: "شرایط بازگشت",
              defaultValue: defaultValue?.returnReasonAlert,
              error: !!state.errors?.returnReasonAlert,
              helperText: state.errors?.returnReasonAlert,
            },
          ]}
        />
        <SubmitButton variant="contained">ذخیره</SubmitButton>
      </Stack>
    </form>
  );
}
