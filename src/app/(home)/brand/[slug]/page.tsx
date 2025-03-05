import BrandPageClient from "./BrandPageClient";

interface BrandPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BrandPage({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: BrandPageProps) {
  const params = await paramsPromise;
  const { slug } = params;
  const searchParams = await searchParamsPromise;

  return <BrandPageClient slug={slug} searchParams={searchParams} />;
}
