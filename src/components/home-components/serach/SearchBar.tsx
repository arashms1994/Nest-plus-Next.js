"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div className="flex justify-start items-center bg-gray-100 rounded-sm h-9">
      <Search className="text-gray-400" />
      <Input
        type="search"
        placeholder="جستجو"
        className="w-96 bg-gray-100 rounded-r-none border-none"
        onChange={handleSearch}
      />
    </div>
  );
}
