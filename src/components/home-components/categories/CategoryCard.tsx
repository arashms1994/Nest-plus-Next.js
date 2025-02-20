import { ICategory } from "@/type/serverTypes";
import Link from "next/link";
import React from "react";

interface ICategoryCardProps {
  category: ICategory;
}

const CategoryCard = (category: ICategoryCardProps) => {
  return (
    <Link href={"/category/" + category.category.slug}>
      <div className="flex flex-col justify-center items-center gap-1 w-20 h-32 m-2">
        <div className="w-14 h-14 rounded-full">
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
