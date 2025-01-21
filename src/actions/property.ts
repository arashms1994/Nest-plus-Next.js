import { BASE_URL } from "@/config.server";
import { auth } from "@/lib/session";
import { formDataToObject } from "@/lib/utils";
import { PropertySchemaZod } from "@/lib/validations/serverActionsSchema";
import { PropertyFormState } from "@/type/serverActionsTypes";
import { redirect } from "next/navigation";

export async function createPropertyAction(
  state: PropertyFormState,
  formData: FormData
) {
  const { accessToken } = await auth();
  if (!accessToken) {
    redirect("/auth/login");
  }

  const validatedFields = PropertySchemaZod.safeParse(
    formDataToObject(formData)
  );
  console.log(validatedFields.data);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await fetch(`${BASE_URL}/properties`, {
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
      message: data.message,
      errors: data.errors,
    };
  }
  redirect("/dashboard/properties");
}
