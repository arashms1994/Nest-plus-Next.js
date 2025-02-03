"use client";

import { createOrUpdateBrandAction } from "@/actions/admin/brands";
import { Stack } from "@mui/material";
import { useActionState } from "react";
import AIForm from "./AIForm";
import { IBrand } from "@/type/serverTypes";
import SubmitButton from "@/components/submit-button";

type BrandFormType = {
  brand?: IBrand;
};
export const BrandForm = ({ brand }: BrandFormType) => {
  const [state, action] = useActionState(createOrUpdateBrandAction, {
    message: "",
    success: false,
  });
  return (
    <form action={action}>
      <Stack spacing={2} mt={2}>
        {brand?.id && <input hidden name="id" defaultValue={brand.id} />}
        <AIForm
          schema={[
            {
              name: "titleFa",
              label: "نام فارسی",
              type: "string",
              defaultValue: brand?.titleFa,
              error: !!state.errors?.titleFa,
              helperText: state.errors?.titleFa,
            },
            {
              name: "titleEn",
              label: "نام انگلیسی",
              type: "string",
              defaultValue: brand?.titleEn,
              error: !!state.errors?.titleEn,
              helperText: state.errors?.titleEn,
            },
            {
              name: "slug",
              label: "نشانک",
              type: "string",
              defaultValue: brand?.slug,
              error: !!state.errors?.slug,
              helperText: state.errors?.slug,
            },
            {
              name: "logo",
              type: "image",
              defaultValue: brand?.logo,
              error: !!state.errors?.logo,
              helperText: state.errors?.logo,
            },
          ]}
        />
        <SubmitButton variant="contained">ذخیره</SubmitButton>
      </Stack>
    </form>
  );
};
