import { userGetProductById } from "@/api/server-api/user/user-products";
import ProductPage from "@/components/product-components/product-page/productPage";
import { IProduct, SellerInfo } from "@/type/serverTypes";

interface ProductPageProps {
  params: Promise<{ code: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ProductPageRoute({ params }: ProductPageProps) {
  const { code } = await params;
  const product: IProduct = await userGetProductById(code);

  const productSeller: SellerInfo =
    product.bestSeller ||
    ({
      id: "default-seller",
    } as SellerInfo);

  return <ProductPage product={product} productSeller={productSeller} />;
}
