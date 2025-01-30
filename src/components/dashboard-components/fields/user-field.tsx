"use client";

import { IUser } from "@/type/serverTypes";
import React, { useState } from "react";
import AsyncListField from "./async-list-field";
import { useUserQuery } from "@/api/client-api/users";

type Props = {
  name: string;
  defaultValue?: IUser;
  error?: boolean;
  helperText?: string;
};

export default function UserField({
  name,
  defaultValue,
  error,
  helperText,
}: Props) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useUserQuery(query);
  return (
    <AsyncListField
      error={error}
      helperText={helperText}
      options={data?.results ?? []}
      getOptionLabel={(o) => o.email}
      isLoading={isLoading}
      label="کاربر"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}
