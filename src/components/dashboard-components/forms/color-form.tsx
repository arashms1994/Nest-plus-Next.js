"use client";

import { createOrUpdateColorAction } from "@/actions/admin/colors";
import { Stack } from "@mui/material";
import { useActionState } from "react";
import AIForm from "./AIForm";
import { IColor } from "@/type/serverTypes";
import SubmitButton from "@/components/submit-button";

type ColorFormProps = {
  defaultValue?: IColor;
};
export default function ColorForm({ defaultValue }: ColorFormProps) {
  const [state, action] = useActionState(createOrUpdateColorAction, {
    message: "",
    success: false,
  });
  return (
    <form action={action}>
      {defaultValue?.id && (
        <input hidden name="id" defaultValue={defaultValue.id} />
      )}
      <Stack spacing={2} mt={2}>
        <AIForm
          schema={[
            {
              name: "title",
              type: "string",
              label: "نام رنگ",
              defaultValue: defaultValue?.title,
              error: !!state.errors?.code,
              helperText: state.errors?.code,
            },
            {
              name: "hexCode",
              label: "کد رنگ",
              type: "color",
              defaultValue: defaultValue?.hexCode,
              error: !!state.errors?.slug,
              helperText: state.errors?.slug,
            },
          ]}
        />
        <SubmitButton variant="contained">ذخیره</SubmitButton>
      </Stack>
    </form>
  );
}
