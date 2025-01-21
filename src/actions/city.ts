import { BASE_URL } from "@/config.server";
import { auth } from "@/lib/session";
import { CityFormSchema } from "@/lib/validations/serverActionsSchema";

import { CityFormState } from "@/type/serverActionsTypes";
import { redirect } from "next/navigation";

export async function createCiryAction(
  state: CityFormState,
  formData: FormData
) {
  const { accessToken } = await auth();
  if (!accessToken) {
    redirect("/auth/login");
  }

  const validatedFields = CityFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await fetch(`${BASE_URL}/cities`, {
    method: "post",
    body: JSON.stringify(validatedFields.data),
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });

  const data = await res.json();
  if (!res.ok) {
    return {
      massage: data.massage,
      errors: data.errors,
    };
  }
  redirect("/dashboard/cities");
}
