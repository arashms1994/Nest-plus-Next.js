import { ApiError } from "@/api/server-api/base";
import { userCreateOrder } from "@/api/server-api/user/user-orders";
import { ensureAuthenticated } from "@/lib/session";
import { formDataToObject } from "@/lib/utils";
import { orderFormSchema, OrderFormState } from "@/lib/validations/serverActionsSchema";
import { redirect } from "next/navigation";

interface CreateOrderActionResponse {
    message?: string;
    errors?: Record<string, string[]>;
    success?: boolean;
  }
  
  export async function createOrderAction(
    state: OrderFormState,
    formData: FormData
  ): Promise<CreateOrderActionResponse | void> {
    await ensureAuthenticated();
  
    const validatedFields = orderFormSchema.safeParse(formDataToObject(formData));
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
  
    try {
      await userCreateOrder(validatedFields.data);
      redirect("/user-dashboard/orders");
    } catch (e) {
      console.error("Error creating order:", e);
      if (e instanceof ApiError) {
        return {
          message: e.message,
          errors: e.body?.errors,
        };
      }
      return {
        message: "Failed to create order due to an API error",
        success: false,
      };
    }
  }