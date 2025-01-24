import { z } from "zod";

export const slug = () =>
  z
    .string()
    .min(1, "Slug is required")
    .trim()
    .toLowerCase()
    .regex(
      /^[a-z0-9-]+$/,
      "Slug can only contain lowercase letters, numbers, and hyphens"
    );

export const password = () =>
  z
    .string()
    .min(8, { message: "حداقل ۸ کارکتر" })
    .regex(/[a-zA-Z]/, { message: "شامل یک حرف باید باشد." })
    .regex(/[0-9]/, { message: "شامل یک عدد باید باشد." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "حداقل یک کارکتر عجیب بزارید.",
    });
