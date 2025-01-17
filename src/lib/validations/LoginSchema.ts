import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "لطفا یک ایمیل معتبر وارد کنید." }).trim(),
  password: z
    .string()
    .min(8, { message: "حداقل ۸ کارکتر" })
    .regex(/[a-zA-Z]/, { message: "شامل یک حرف باید باشد." })
    .regex(/[0-9]/, { message: "شامل یک عدد باید باشد." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "حداقل یک کارکتر عجیب بزارید.",
    })
    .trim(),
});

export type LoginFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
