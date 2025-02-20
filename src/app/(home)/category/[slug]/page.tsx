// app/categories/[id]/page.tsx
import { userGetCategory } from "@/api/server-api/user/user-category";
import { ICategory } from "@/type/serverTypes";
import { notFound } from "next/navigation";


export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  let category: ICategory;
  try {
    category = await userGetCategory(slug);
  } catch (error) {
    notFound();
  }

  return (
    <div>
      <h1>{category.titleFa}</h1>
      <p>{category.icon}</p>
    </div>
  );
}