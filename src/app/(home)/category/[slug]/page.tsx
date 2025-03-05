import CategoryPageClient from "./CategoryPageClient";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams?: { page?: string; pageSize?: string };
}

export default async function CategoryPage({
  params: paramsPromise,
  searchParams,
}: CategoryPageProps) {
  const params = await paramsPromise;
  const { slug } = params;

  return <CategoryPageClient slug={slug} searchParams={searchParams} />;
}
