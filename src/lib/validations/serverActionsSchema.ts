import { z } from "zod";

export const BadgeFormSchema = z.object({
    icon: z.string().url().trim(),
    title: z.string().min(1, "Title is required").trim(),
  });

  export const CityFormSchema = z.object({
    code: z.string().trim(),
    slug: z.string().trim(),
    name: z.string().trim(),
  });

  export const PropertySchemaZod = z.object({
    name: z.string().min(1, "Name is required").trim(),
    label: z.string().min(1, "Label is required").trim(),
    type: z.string().min(1, "Type is required").trim(),
    options: z
      .array(
        z.object({
          label: z.string().min(1, "Option label is required").trim(),
          value: z.string().min(1, "Option value is required").trim(),
        })
      )
      .optional(), // Options array is optional
  });