import { userGetbrands } from "@/api/server-api/user/user-brands";
import { userGetCategories } from "@/api/server-api/user/user-category";
import HomePage from "./HomePage";

export default async function Page({ searchParams }: any) {
  const brands = await userGetbrands();
  const categories = await userGetCategories();
  return (
    <HomePage
      searchParams={searchParams}
      brands={brands.results}
      categories={categories.results}
    />
  );
}
