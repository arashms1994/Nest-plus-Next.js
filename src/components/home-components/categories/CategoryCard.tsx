import { ICategory } from "@/type/serverTypes";
import Link from "next/link";
import React from "react";

interface ICategoryCardProps {
  category: ICategory;
}

const CategoryCard = (category: ICategoryCardProps) => {
  return (
    <Link href={"/category/" + category.category.slug}>
      <div className="flex flex-col justify-center items-center gap-2 w-24 h-36 m-2">
        <div className="w-15 h-15 rounded-full">
          <img
            src={category.category.icon}
            alt={category.category.titleFa}
            className="w-full h-full rounded-full"
          />
        </div>
        <p className="font-normal text-lg">{category.category.titleFa}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
