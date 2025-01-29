"use client";

import { createOrUpdateProductAction } from "@/actions/products";
import { Stack } from "@mui/material";
import React, { useActionState } from "react";
import AIForm from "./AIForm";
import CategoryField from "../fields/category-field";
import BrandField from "../fields/brand-field";
import BadgeField from "../fields/badges-fields";
import ColorsField from "../fields/colors-field";
import { IProduct } from "@/type/serverTypes";
import SingleUpload from "@/components/upload/single-upload";
import SubmitButton from "@/components/submit-button";

type ProductFormProps = {
  defaultValue?: IProduct;
};

function ProductForm({ defaultValue }: ProductFormProps) {
  const [state, action] = useActionState(createOrUpdateProductAction, {
    message: "",
    success: false,
  });
  return (
    <form action={action}>
      {defaultValue?.code && (
        <input hidden name="code" defaultValue={defaultValue.code} />
      )}
      <Stack spacing={2} mt={2}>
        <Stack gap={2} direction="row">
          <SingleUpload
            name="images.main"
            defaultValue={defaultValue?.images.main}
          />
          <SingleUpload
            multi
            name="images.list"
            defaultValue={defaultValue?.images.list}
          />
        </Stack>

        <Stack direction="row" gap={2}>
          <CategoryField
            name="category"
            defaultValue={defaultValue?.category}
          />
          <BrandField name="brand" defaultValue={defaultValue?.brand} />
        </Stack>
        <Stack direction="row" gap={2}>
          <BadgeField name="badges" defaultValue={defaultValue?.badges} />
          <ColorsField name="colors" defaultValue={defaultValue?.colors} />
        </Stack>
        <AIForm
          schema={[
            {
              name: "code",
              type: "number",
              label: "کد کالا",
              defaultValue: defaultValue?.code,
              error: !!state.errors?.code,
              helperText: state.errors?.code,
            },
            {
              name: "titleFa",
              label: "نام فارسی",
              size: 6,
              type: "string",
              defaultValue: defaultValue?.titleFa,
              error: !!state.errors?.titleFa,
              helperText: state.errors?.titleFa,
            },
            {
              name: "titleEn",
              label: "نام انگلیسی",
              size: 6,
              type: "string",
              defaultValue: defaultValue?.titleEn,
              error: !!state.errors?.titleEn,
              helperText: state.errors?.titleEn,
            },
            {
              name: "expert_reviews",
              label: "توضیحات",
              type: "textarea",
              defaultValue: defaultValue?.expert_reviews,
              error: !!state.errors?.expert_reviews,
              helperText: state.errors?.expert_reviews,
            },
          ]}
        />
        <SubmitButton variant="contained">ذخیره</SubmitButton>
      </Stack>
    </form>
  );
}

export default ProductForm;
