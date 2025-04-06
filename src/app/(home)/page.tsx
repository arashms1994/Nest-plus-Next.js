import { userGetbrands } from "@/api/server-api/user/user-brands";
import HomePage from "./HomePage";
import { userGetCategories } from "@/api/server-api/user/user-category";

export default async function Page() {
  const brands = await userGetbrands();
  const categories = await userGetCategories();

  return <HomePage brands={brands.results} categories={categories.results} />;
}
