import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { NavbarAvatar } from "./navbarAvatar";

const NavbarSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
          <span className="sr-only">NEST+</span>
        </Link>

        <div className="grid gap-2 py-6">
          <Link
            href="#"
            className="flex w-full items-center py-2 text-lg font-semibold"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="flex w-full items-center py-2 text-lg font-semibold"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="flex w-full items-center py-2 text-lg font-semibold"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="flex w-full items-center py-2 text-lg font-semibold"
            prefetch={false}
          >
            Contact
          </Link>
          <NavbarAvatar />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
