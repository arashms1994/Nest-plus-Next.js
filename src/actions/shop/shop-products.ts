"use server";

import { ApiError } from "@/api/server-api/base";
import { ensureAuthenticated } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";
import {
  ProductFormState,
  ProductSchemaZod,
} from "@/lib/validations/serverActionsSchema";
import { shopCreateProduct, shopDeleteProduct, shopUpdateProduct } from "@/api/server-api/shop/shop-products";

export async function ShopCreateOrUpdateProductAction(
  state: ProductFormState,
  formData: FormData
) {
  await ensureAuthenticated();
  const code = formData.get("code");
  const validatedFields = ProductSchemaZod.safeParse(
    formDataToObject(formData)
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    if (code) {
      await shopUpdateProduct(code.toString(), validatedFields.data);
    } else {
      await shopCreateProduct(validatedFields.data);
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
  redirect("/shop/products");
}

export async function shopDeleteProductAction(id: string) {
  await ensureAuthenticated();
  try {
    const res = await shopDeleteProduct(id);
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/shop/products");
}
