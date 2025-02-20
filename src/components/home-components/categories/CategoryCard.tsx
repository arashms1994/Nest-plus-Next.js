import { ICategory } from "@/type/serverTypes";
import Link from "next/link";
import React from "react";

interface ICategoryCardProps {
  category: ICategory;
}

const CategoryCard = (category: ICategoryCardProps) => {
  return (
    <Link href={"/category/" + category.category.slug}>
      <div className="flex flex-col justify-center items-center gap-1 w-[75px] h-[120px] m-2">
        <div className="w-12 h-12 rounded-full">
          <img
            src={category.category.icon}
            alt={category.category.titleFa}
            className="w-full h-full rounded-full"
          />
        </div>
        <p className="font-normal text-sm">{category.category.titleFa}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
