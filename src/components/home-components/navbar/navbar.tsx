"use client"

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import NavbarSheet from "./navbarSheet";
import NavbarLinks from "./navbarLinks";
import { NavbarAvatar } from "./navbarAvatar";
import { IUser } from "@/type/serverTypes";

const Navbar = ({
  user,
  accessToken
}: {
  user: IUser
  accessToken:string
}) => {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-8">
      <NavbarSheet />

      <nav className="ml-auto hidden lg:flex justify-between items-center w-full p-9">
        <div className="ml-auto hidden lg:flex justify-between items-center">
          <div>
            <Link
              href="/"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors  hover:text-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}
              >
              <NavbarAvatar user={user} accessToken={accessToken}/>
            </Link>
          </div>

          <div className="flex justify-start items-center bg-gray-100 rounded-sm h-9">
            <Search className="text-gray-400" />
            <Input
              type="search"
              placeholder="جستجو"
              className="w-96 bg-gray-100 rounded-r-none border-none"
            />
          </div>
        </div>

        <NavbarLinks />
      </nav>
    </header>
  );
};

export default Navbar;
