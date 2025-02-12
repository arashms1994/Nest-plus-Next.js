"use client";
import { Stack } from "@mui/material";
import React, { useActionState } from "react";
import AIForm from "./AIForm";
import CategoryField from "../fields/category-field";
import PropertiesField from "../fields/properties-field";
import SingleUpload from "@/components/upload/single-upload";
import { createOrUpdateCategoryAction } from "@/actions/admin/categories";
import { ICategory } from "@/type/serverTypes";
import SubmitButton from "@/components/submit-button";

type CategoryFormProps = {
  defaultValue?: ICategory;
};

export default function CategoryForm({ defaultValue }: CategoryFormProps) {
  const [state, action] = useActionState(createOrUpdateCategoryAction, {
    message: "",
    success: false,
  });
  return (
    <form action={action}>
      <Stack mt={2} spacing={2}>
        {defaultValue?.id && (
          <input hidden defaultValue={defaultValue.id} name="id" />
        )}
        <CategoryField
          defaultValue={defaultValue?.parent}
          error={!!state?.errors?.parent}
          helperText={state?.errors?.parent}
          name="parent"
        />
        <PropertiesField
          defaultValue={defaultValue?.properties}
          name="properties"
        />
        <SingleUpload defaultValue={defaultValue?.icon} name="icon" />
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
