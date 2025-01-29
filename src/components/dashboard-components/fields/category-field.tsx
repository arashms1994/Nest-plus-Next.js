"use client";

import { useCategoriesQuery } from "@/api/client-api/categories";
import { ICategory } from "@/type/serverTypes";
import { useState } from "react";
import AsyncListField from "./async-list-field";

type Props = {
  name: string;
  defaultValue?: ICategory;
};

export default function CategoryField({ name, defaultValue }: Props) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useCategoriesQuery(query);
  return (
    <AsyncListField
      options={data?.results ?? []}
      getOptionLabel={(o) => o.titleFa}
      groupBy={(o) => o.parent?.titleFa ?? "root"}
      isLoading={isLoading}
      label="دسته بندی"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}
