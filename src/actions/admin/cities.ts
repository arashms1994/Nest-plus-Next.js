"use server";

import { ApiError } from "@/api/server-api/base";
import { createCity, deleteCity, updateCity } from "@/api/server-api/cities";
import { ensureAuthenticated } from "@/lib/session";
import { formDataToObject } from "@/lib/utils";
import { CityFormState, CitySchemaZod } from "@/lib/validations/serverActionsSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export async function createOrUpdateCityAction(
  state: CityFormState,
  formData: FormData
) {
  await ensureAuthenticated();
  const id = formData.get("id");
  const validatedFields = CitySchemaZod.safeParse(formDataToObject(formData));
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    if (id) {
      await updateCity(id.toString(), validatedFields.data);
    } else {
      await createCity(validatedFields.data);
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
  redirect("/dashboard/cities");
}

export async function deleteCityAction(id: string) {
  await ensureAuthenticated();
  try {
    const res = await deleteCity(id);
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/dashboard/cities");
}