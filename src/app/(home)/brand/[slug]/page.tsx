import BrandPageClient from "./BrandPageClient";

interface BrandPageProps {
  params: Promise<{ slug: string }>;
  searchParams?: { page?: string; pageSize?: string };
}

export default async function BrandPage({
  params: paramsPromise,
  searchParams,
}: BrandPageProps) {
  const params = await paramsPromise;
  const { slug } = params;

  return <BrandPageClient slug={slug} searchParams={searchParams} />;
}
