import CategoryPageClient from "./CategoryPageClient";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CategoryPage({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: CategoryPageProps) {
  const params = await paramsPromise;
  const searchParams = await searchParamsPromise;
  const { slug } = params;

  return <CategoryPageClient slug={slug} searchParams={searchParams} />;
}
