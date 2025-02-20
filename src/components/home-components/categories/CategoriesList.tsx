import { userGetCategories } from "@/api/server-api/user/user-category";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategoriesList = async () => {
  const categories = await userGetCategories();
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 border-2 rounded m-5 p-2">
        <div className="border-b-2 border-cyan-700">
          <h2 className="text-2xl font-semibold">دسته بندی ها</h2>
        </div>
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {categories.results.map((c) => (
            <CategoryCard key={c.id} category={c}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesList;
