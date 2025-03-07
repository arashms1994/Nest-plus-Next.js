"use server";
import "server-only";

import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { AUTH_BASE_URL } from "@/config.server";
import { formDataToObject } from "@/lib/utils";
import { RegisterFormState } from "@/type/authTypes";
import { RegisterFormSchema } from "@/lib/validations/serverActionsSchema";

export async function sellerRegisterAction(state: RegisterFormState, formData: FormData) {
  const validatedFields = RegisterFormSchema.safeParse(
    formDataToObject(formData)
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    const res = await fetch(`${AUTH_BASE_URL}/auth/seller/register`, {
      method: "post",
      body: JSON.stringify(validatedFields.data),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      return {
        message: data.message,
        errors: data.errors,
      };
    } else {
      await createSession({
        accessToken: data.tokens.accessToken,
        refreshToken: data.tokens.refreshToken,
      });
    }
  } catch (err) {
    console.log(err);
    return {
      message: "register failed",
    };
  }
  redirect("/shop");
}
