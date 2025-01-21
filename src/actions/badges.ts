"use server";
import { createBadge, deleteBadge } from "@/api/server-api/badges";
import { auth } from "@/lib/session";
import { BadgeFormSchema } from "@/lib/validations/serverActionsSchema";
import { BadgeFormState, DeleteFormState } from "@/type/serverActionsTypes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createBadgeAction(
  state: BadgeFormState,
  formData: FormData
) {
  const { accessToken } = await auth();
  if (!accessToken) {
    redirect("/auth/login");
  }

  const validatedFields = BadgeFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { res, data } = await createBadge(validatedFields.data, accessToken);
  if (!res.ok) {
    return {
      massage: data.massage,
      errors: data.errors,
    };
  }
  redirect("/dashboard/badges");
}

export async function deleteBadgeAction(
  state: DeleteFormState,
  formData: FormData
) {
  const id = (formData.get("id") || "").toString();
  const res = await deleteBadge(id);

  if (res.ok) {
    revalidatePath("/dashboard/badges");
    return {
      massage: "ok",
    };
  }

  const data = await res.json();

  return {
    massage: data.massage as string,
  };
}
