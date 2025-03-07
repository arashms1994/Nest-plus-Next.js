import { usePropertiesQuery } from "@/api/client-api/admin/properties";
import React, { useState } from "react";
import MultiAsyncListField from "./multi-async-list-field";
import { IProperty } from "@/type/serverTypes";

type PropertiesFieldProps = {
  name: string;
  defaultValue?: IProperty[];
};

export default function PropertiesField({
  defaultValue,
  name,
}: PropertiesFieldProps) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = usePropertiesQuery(query);
  return (
    <MultiAsyncListField
      options={data?.results ?? []}
      getOptionLabel={(o) => o.label}
      groupBy={(o) => o.type}
      isLoading={isLoading}
      label="ویژگی ها"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}
