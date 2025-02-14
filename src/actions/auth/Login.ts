"use server";
import "server-only";

import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";
import { loginRequest } from "@/api/server-api/auth";
import { ApiError } from "@/api/server-api/base";
import { FormState, LoginFormSchema, LoginFormState, LoginType } from "@/lib/validations/serverActionsSchema";
import { LoginResponse } from "@/type/serverTypes";
import { chooseAuthRedirectPath } from "./helper";


export async function loginAction(state: LoginFormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse(formDataToObject(formData));
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  let data: LoginResponse | undefined = undefined;
  try {
    data = await loginRequest(validatedFields.data);
    await createSession({
      accessToken: data.tokens.accessToken,
      refreshToken: data.tokens.refreshToken,
      role: data.user.role,
    });
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        message: e.message,
        errors: e.body as FormState<LoginType>["errors"],
      };
    }
  }
  const path = chooseAuthRedirectPath(data?.user.role);
  redirect(path);
}