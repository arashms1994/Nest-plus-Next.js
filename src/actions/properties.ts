"use server";

import { ApiError } from "@/api/server-api/base";
import { ensureAuthenticated } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";
import { PropertyFormState } from "@/type/serverActionsTypes";
import {
  createProperties,
  deleteProperties,
  updateProperties,
} from "@/api/server-api/properties";
import { PropertySchemaZod } from "@/lib/validations/serverActionsSchema";

export async function createOrUpdatePropertyAction(
  state: PropertyFormState,
  formData: FormData
) {
  await ensureAuthenticated();
  const id = formData.get("id");
  const validatedFields = PropertySchemaZod.safeParse(
    formDataToObject(formData)
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    if (id) {
      await updateProperties(id.toString(), validatedFields.data);
    } else {
      await createProperties(validatedFields.data);
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
  redirect("/dashboard/properties");
}

export async function deletePropertyAction(id: string) {
  await ensureAuthenticated();
  try {
    const res = await deleteProperties(id);
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/dashboard/properties");
}
