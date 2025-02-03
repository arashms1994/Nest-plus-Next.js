"use client";

import { useActionState } from "react";
import AIForm from "./AIForm";
import { createOrUpdateCityAction } from "@/actions/admin/cities";
import { Stack } from "@mui/material";
import SubmitButton from "@/components/submit-button";
import { ICity } from "@/type/serverTypes";

type CityFormProps = {
  defaultValue?: ICity;
};
export default function CityForm({ defaultValue }: CityFormProps) {
  const [state, action] = useActionState(createOrUpdateCityAction, {
    message: "",
    success: false,
  });
  return (
    <form action={action}>
      {defaultValue?.id && <input name="id" defaultValue={defaultValue.id} />}
      <Stack spacing={2} mt={2}>
        <AIForm
          schema={[
            {
              name: "code",
              type: "string",
              label: "پیش شماره",
              defaultValue: defaultValue?.code,
              error: !!state.errors?.code,
              helperText: state.errors?.code,
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
              name: "name",
              type: "string",
              label: "نام شهر",
              defaultValue: defaultValue?.name,
              error: !!state.errors?.name,
              helperText: state.errors?.name,
            },
          ]}
        />
        <SubmitButton variant="contained">ایجاد شهر</SubmitButton>
      </Stack>
    </form>
  );
}
