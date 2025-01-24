import { z } from "zod";
import { slug } from "./customValidations";

export interface FormState<G> {
  message?: string;
  success?: boolean;
  errors?: Partial<Record<keyof G, string[]>>;
}

export const BadgeFormSchema = z.object({
  icon: z.string().url().trim(),
  title: z.string().min(1, "Title is required").trim(),
});

export const BrandSchemaZod = z.object({
  titleFa: z.string().min(1, "Title (FA) is required"),
  titleEn: z.string().min(1, "Title (EN) is required"),
  slug: slug(),
  logo: z.string().url().optional(),
});
export type BrandType = z.infer<typeof BrandSchemaZod>;
export type BrandFormState = FormState<BrandType>;

export const CategorySchemaZod = z.object({
  titleEn: z.string().min(1, "Name is required").trim(),
  titleFa: z.string().min(1, "Name is required").trim(),
  slug: slug(),
  icon: z.string().url().trim().optional(),
  returnReasonAlert: z.string().trim().optional(),
  properties: z.array(z.string()).optional(),
  parent: z.string().optional(),
});

export type CategoryType = z.infer<typeof CategorySchemaZod>;
export type CategoryFormState = FormState<CategoryType>;

export const CitySchemaZod = z.object({
  name: z.string().min(1, "Name is required").trim(),
  code: z.string().min(1, "Code is required").trim(),
  slug: slug(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type CityType = z.infer<typeof CitySchemaZod>;
export type CityFormState = FormState<CityType>;

export const ColorSchemaZod = z.object({
  title: z.string().min(1, "Title is required").trim(),
  hexCode: z
    .string()
    .min(1, "Hex code is required")
    .trim()
    .regex(/^#([0-9A-Fa-f]{3}){1,2}$/, "Invalid hex code format"),
});

export type ColorType = z.infer<typeof ColorSchemaZod>;
export type ColorFormState = FormState<ColorType>;

export const CommentSchemaZod = z.object({
  text: z.string().min(1, "Text is required").trim(),
  rating: z
    .number()
    .int()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot exceed 5")
    .optional(),
  product: z.number(),
});

export type CommentType = z.infer<typeof CommentSchemaZod>;
export type CommentFormState = FormState<CommentType>;

const ReviewSchemaZod = z.object({
  title: z.string().min(1, "Review title is required").trim(),
  value: z.string().min(1, "Review value is required").trim(),
  name: z.string().min(1, "Review name is required").trim(),
});

const SpecificationSchemaZod = z.object({
  title: z.string().min(1, "Specification title is required").trim(),
  value: z.string().min(1, "Specification value is required").trim(),
  name: z.string().min(1, "Specification name is required").trim(),
});

const ImageSchemaZod = z.object({
  main: z.string().url("Main image must be a valid URL").trim(),
  list: z
    .array(z.string().url("List images must be valid URLs").trim())
    .optional(),
});

export const ProductSchemaZod = z.object({
  code: z.coerce.number().int().positive("Code must be a positive integer"),
  titleFa: z.string().min(1, "Title (FA) is required").trim(),
  titleEn: z.string().min(1, "Title (EN) is required").trim(),
  status: z.enum(["marketable", "unmarketable"]).default("marketable"),
  images: ImageSchemaZod,
  colors: z.array(z.string()).optional(),
  badges: z.array(z.string()).optional(),
  category: z.string(),
  brand: z.string(),
  review: z.array(ReviewSchemaZod).optional(),
  specifications: z.array(SpecificationSchemaZod).optional(),
  expert_reviews: z.string().trim().optional(),
});

export type ProductType = z.infer<typeof ProductSchemaZod>;
export type ProductFormState = FormState<ProductType>;

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
    .optional(),
});

export type PropertyType = z.infer<typeof PropertySchemaZod>;
export type PropertyFormState = FormState<PropertyType>;

export const SellerSchemaZod = z.object({
  user: z.string(),
  name: z.string().min(1, "Name is required").trim(),
  slug: slug(),
});

export type SellerType = z.infer<typeof SellerSchemaZod>;
export type SellerFormState = FormState<SellerType>;
