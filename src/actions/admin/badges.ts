"use server";

import { createBadge, deleteBadge, updateBadge } from "@/api/server-api/admin/badges";
import { ApiError } from "@/api/server-api/base";
import { ensureAuthenticated } from "@/lib/session";
import { formDataToObject } from "@/lib/utils";
import { BadgeFormSchema } from "@/lib/validations/serverActionsSchema";
import { BadgeFormState } from "@/type/serverActionsTypes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createOrUpdateBadgeAction(
  state: BadgeFormState,
  formData: FormData
) {
  await ensureAuthenticated();
  const id = formData.get("id");
  const validatedFields = BadgeFormSchema.safeParse(formDataToObject(formData));
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    if (id) {
      await updateBadge(id.toString(), validatedFields.data);
    } else {
      await createBadge(validatedFields.data);
    }
  } catch (e) {
    console.log(e);
    if (e instanceof ApiError) {
      return {
        message: e.message,
        errors: e.body?.errors,
      };
    } else {
      return {
        message: "failed with call api",
        success: false,
      };
    }
  }
  redirect("/dashboard/badges");
}

export async function deleteBadgeAction(id: string) {
  await ensureAuthenticated();
  try {
    const res = await deleteBadge(id);
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/dashboard/badges");
}