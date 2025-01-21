"use server";
import "server-only";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { AUTH_BASE_URL } from "@/config.server";
import { LoginFormSchema } from "@/lib/validations/LoginSchema";
import { LoginFormState } from "@/type/authTypes";

export async function loginAction(state: LoginFormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const res = await fetch(`${AUTH_BASE_URL}/auth/login`, {
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
  }
  await createSession({
    accessToken: data.tokens.accessToken,
    refreshToken: data.tokens.refreshToken,
  });
  redirect("/dashboard");
}
