"use client";

import { Button, IconButton, Stack, TextField } from "@mui/material";
import React, { useActionState, useState } from "react";
import { Remove } from "@mui/icons-material";
import AIForm from "./AIForm";
import SubmitButton from "@/components/submit-button";
import { IProperty, IPropertyOption } from "@/type/serverTypes";
import { createOrUpdatePropertyAction } from "@/actions/properties";
type Props = {
  defaultValue?: IProperty;
};

export default function PropertyForm({ defaultValue }: Props) {
  const [state, action] = useActionState(createOrUpdatePropertyAction, {
    message: "",
    success: false,
  });
  const [options, setOptions] = useState<IPropertyOption[]>(
    defaultValue?.options ?? []
  );
  const addOption = () => {
    const t = new Date().toISOString();
    setOptions((old) => [...old, { id: t, value: "", label: "" }]);
  };
  const removeOption = (value: string) => {
    setOptions((old) => old.filter((item) => item.id !== value));
  };
  return (
    <form action={action}>
      {defaultValue?.id && (
        <input type="hidden" name="id" defaultValue={defaultValue?.id} />
      )}
      <Stack spacing={2} mt={2}>
        <AIForm
          schema={[
            {
              name: "name",
              type: "string",
              label: "نام ویژگی",
              defaultValue: defaultValue?.name,
              error: !!state.errors?.name,
              helperText: state.errors?.name,
            },
            {
              name: "label",
              type: "string",
              label: "نام قابل نمایش",
              defaultValue: defaultValue?.label,
              error: !!state.errors?.label,
              helperText: state.errors?.label,
            },
            {
              name: "type",
              type: "string",
              label: "نوع داده",
              defaultValue: defaultValue?.type,
              error: !!state.errors?.type,
              helperText: state.errors?.type,
            },
          ]}
        />
        {options.map((item, index) => (
          <Stack direction={"row"} spacing={2} key={item.id}>
            <TextField
              fullWidth
              name={`options.${index}.label`}
              label="برچسب"
              defaultValue={defaultValue?.options?.[index]?.label}
            />
            <TextField
              fullWidth
              name={`options.${index}.value`}
              label="مقدار"
              defaultValue={defaultValue?.options?.[index]?.value}
            />
            <IconButton onClick={() => removeOption(item.id)}>
              <Remove />
            </IconButton>
          </Stack>
        ))}

        <Button onClick={addOption}>اضافه کردن آپشن</Button>
        <SubmitButton variant="contained">ذخیره</SubmitButton>
      </Stack>
    </form>
  );
}
