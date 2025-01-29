"use client";

import { Stack, TextField } from "@mui/material";
import { useActionState } from "react";
import { createOrUpdateBadgeAction } from "@/actions/badges";
import SingleUpload from "@/components/upload/single-upload";
import SubmitButton from "@/components/submit-button";
import { IBadge } from "@/type/serverTypes";

type CreateBadgeFormProps = { defaultValue?: Partial<IBadge> };

export const CreateBadgeForm = ({ defaultValue }: CreateBadgeFormProps) => {
  const [state, action] = useActionState(
    createOrUpdateBadgeAction,
    undefined,
    "/dashboard/badges"
  );
  console.log(state);
  return (
    <Stack spacing={2}>
      <form action={action}>
        {defaultValue?.id && (
          <input type="hidden" name="id" defaultValue={defaultValue?.id} />
        )}
        <Stack spacing={2}>
          <SingleUpload name="icon" defaultValue={defaultValue?.icon} />
          <TextField
            error={state?.errors?.title}
            helperText={state?.errors?.title}
            fullWidth
            defaultValue={defaultValue?.title}
            name="title"
            label="عنوان"
          />
          <SubmitButton variant="contained">ذخیره</SubmitButton>
        </Stack>
      </form>
    </Stack>
  );
};
