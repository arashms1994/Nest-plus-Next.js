"use client";

import { ICity } from "@/type/serverTypes";
import { useState } from "react";
import AsyncListField from "./async-list-field";
import { useUserCitiesQuery } from "@/api/client-api/user/cities";

type Props = {
  name: string;
  defaultValue?: ICity;
};

export default function CityField({ name, defaultValue }: Props) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useUserCitiesQuery("");
  return (
    <AsyncListField
      options={data?.results ?? []}
      getOptionLabel={(o) => o.name}
      isLoading={isLoading}
      label="شهر"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}

