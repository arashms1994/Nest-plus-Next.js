"use server";


import { ApiError } from "@/api/server-api/base";
import { createBrand, deleteBrand, updateBrand } from "@/api/server-api/admin/brands";
import { ensureAuthenticated } from "@/lib/session";
import { formDataToObject } from "@/lib/utils";
import {
  BrandFormState,
  BrandSchemaZod,
} from "@/lib/validations/serverActionsSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createOrUpdateBrandAction(
  state: BrandFormState,
  formData: FormData
) {
  await ensureAuthenticated();
  const id = formData.get("id");
  const validatedFields = BrandSchemaZod.safeParse(formDataToObject(formData));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    if (id) {
      await updateBrand(id.toString(), validatedFields.data);
    } else {
      await createBrand(validatedFields.data);
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
  redirect("/dashboard/brands");
}

export async function deleteBrandAction(id: string) {
  await ensureAuthenticated();
  try {
    const res = await deleteBrand(id);
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/dashboard/brands");
}
