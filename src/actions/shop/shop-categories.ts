"use server";

import { ApiError } from "@/api/server-api/base";
import { ensureAuthenticated } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";
import {
  CategoryFormState,
  CategorySchemaZod,
} from "@/lib/validations/serverActionsSchema";
import {
  shopCreateCategory,
  shopDeleteCategory,
  shopUpdateCategory,
} from "@/api/server-api/shop/shop-categories";

export async function ShopCreateOrUpdateCategoryAction(
  state: CategoryFormState,
  formData: FormData
) {
  /// validate input
  await ensureAuthenticated();
  const id = formData.get("id");
  const validatedFields = CategorySchemaZod.safeParse(
    formDataToObject(formData)
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    if (id) {
      await shopUpdateCategory(id.toString(), validatedFields.data);
    } else {
      await shopCreateCategory(validatedFields.data);
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
  redirect("/dashboard/categories");
}

export async function shopDeleteCategoryAction(id: string) {
  await ensureAuthenticated();
  try {
    await shopDeleteCategory(id);
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/dashboard/categories");
}
