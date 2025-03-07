"use client";

import Link from "next/link";
import NavbarSheet from "./navbarSheet";
import NavbarLinks from "./navbarLinks";
import SearchBar from "../serach/SearchBar";
import { useCallback } from "react";
import { useSearch } from "@/providers/SearchProvider";

interface INavBarProps {
  accessToken: string;
  role: string;
}

const Navbar = ({ accessToken, role }: INavBarProps) => {
  const { setSearchQuery } = useSearch();

  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
    },
    [setSearchQuery]
  );

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-8">
      <NavbarSheet />

      <nav className="ml-auto hidden lg:flex justify-between items-center w-full p-9">
        <div className="ml-auto hidden lg:flex justify-between items-center">
          <div>
            <Link
              href="/"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}
            >
              <h1 className="text-lg font-semibold">+Nest</h1>
            </Link>
          </div>

          <SearchBar onSearch={handleSearch} />
        </div>

        <NavbarLinks accessToken={accessToken} role={role} />
      </nav>
    </header>
  );
};

export default Navbar;
