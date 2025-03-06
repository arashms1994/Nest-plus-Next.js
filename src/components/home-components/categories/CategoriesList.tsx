"use client";

import React from "react";
import CategoryCard from "./CategoryCard";
import { ICategory } from "@/type/serverTypes";

interface CategoriesListProps {
  categories: ICategory[];
}

const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded m-5 p-2">
      <div className="border-b-2 border-cyan-700">
        <h2 className="text-2xl font-semibold">دسته بندی ها</h2>
      </div>
      <div className="flex gap-4 flex-wrap justify-center items-center">
        {categories.map((c) => (
          <CategoryCard key={c.id} category={c} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
