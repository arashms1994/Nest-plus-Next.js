"use client";
import React, { useState } from "react";
import AsyncListField from "./async-list-field";
import { ICategory } from "@/type/serverTypes";
import { useCategoriesQuery } from "@/api/client-api/admin/categories";

type Props = {
  name: string;
  defaultValue?: ICategory;
  error?: boolean;
  helperText?: string;
};

export default function CategoryField({
  name,
  defaultValue,
  error,
  helperText,
}: Props) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useCategoriesQuery(query);
  return (
    <AsyncListField
      error={error}
      helperText={helperText}
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