"use client";

import { useBrandsQuery } from "@/api/client-api/admin/brands";
import { IBrand } from "@/type/serverTypes";
import { useState } from "react";
import AsyncListField from "./async-list-field";

type Props = {
  name: string;
  defaultValue?: IBrand;
};

export default function BrandField({ name, defaultValue }: Props) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useBrandsQuery("");
  return (
    <AsyncListField
      options={data?.results ?? []}
      getOptionLabel={(o) => o.titleFa}
      isLoading={isLoading}
      label="برند"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}
