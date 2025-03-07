"use server";

import { ApiError } from "@/api/server-api/base";
import { ensureAuthenticated } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";
import {
  FormState,
  ProductFormState,
  ProductPriceFormState,
  ProductPriceSchemaZod,
  ProductSchemaZod,
} from "@/lib/validations/serverActionsSchema";
import {
  shopAddProductPrice,
  shopCreateProduct,
  shopDeleteProduct,
  shopUpdateProduct,
} from "@/api/server-api/shop/shop-products";
import { SellerInfo } from "@/type/serverTypes";

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

export async function shopAddPriceProductAction(
  prevState: ProductPriceFormState,
  formData: FormData
): Promise<FormState<SellerInfo>> {
  await ensureAuthenticated();
  console.log("formdata", formData);

  const code = formData.get("code");

  const validatedFields = ProductPriceSchemaZod.safeParse(
    formDataToObject(formData)
  );
  console.log("code", code);
  console.log("validatedFields", validatedFields.data);

  if (!code || typeof code !== "string") {
    return { message: "کد نامعتبر" };
  }

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "خطا در اعتبارسنجی",
    };
  }

  try {
    await shopAddProductPrice(code as any, validatedFields.data as SellerInfo);
    return { message: "محصول با موفقیت اضافه شد", success: true };
  } catch (e) {
    console.error(e);
    return {
      message: "خطا در ارتباط با سرور",
      success: false,
    };
  }
}
