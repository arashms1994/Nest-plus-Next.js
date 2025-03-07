import React, { useState } from "react";
import MultiAsyncListField from "./multi-async-list-field";
import { useColorsQuery } from "@/api/client-api/admin/colors";
import { IColor } from "@/type/serverTypes";

type ColorFieldProps = {
  name: string;
  defaultValue?: IColor[];
};

export default function ColorsField({ defaultValue, name }: ColorFieldProps) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useColorsQuery(query);
  return (
    <MultiAsyncListField
      options={data?.results ?? []}
      getOptionLabel={(o) => o.title}
      isLoading={isLoading}
      label="رنگ ها"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}
