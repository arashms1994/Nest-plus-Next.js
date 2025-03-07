import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "لطفا یک ایمیل معتبر وارد کنید." }).trim(),
  password: z.string(),
  role: z.coerce.number(),
});
