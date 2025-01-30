"use server";

import {
  createSeller,
  deleteSeller,
  updateSeller,
} from "@/api/server-api/sellers";
import { ApiError } from "@/api/server-api/base";
import { ensureAuthenticated } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";
import {
  SellerFormState,
  SellerSchemaZod,
} from "@/lib/validations/serverActionsSchema";

export async function createOrUpdateSellerAction(
  state: SellerFormState,
  formData: FormData
) {
  /// validate input
  await ensureAuthenticated();
  const id = formData.get("id");
  const validatedFields = SellerSchemaZod.safeParse(formDataToObject(formData));
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    if (id) {
      await updateSeller(id.toString(), validatedFields.data);
    } else {
      await createSeller(validatedFields.data);
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
  redirect("/dashboard/sellers");
}

export async function deleteSellerAction(id: string) {
  await ensureAuthenticated();
  try {
    const res = await deleteSeller(id);
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/dashboard/sellers");
}
