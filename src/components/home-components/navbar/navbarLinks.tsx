import Link from "next/link";
import React from "react";
import { NavbarAvatar } from "./navbarAvatar";
import CartIcon from "../cart/CartIcon";
import { IUser } from "@/type/serverTypes";
import { ModeToggle } from "@/components/theme-toggle/ModeToggle";
import { Button } from "@/components/ui/button";

interface INavBarLinksProps {
  accessToken: string;
  role: string;
}

const NavbarLinks = ({ accessToken, role }: INavBarLinksProps) => {
  return (
    <div className="flex justify-center items-center gap-1">
      <Link href="/auth/seller/register">
        <Button variant="outline">فروشنده شوید</Button>
      </Link>
      <ModeToggle />
      <CartIcon />
      <NavbarAvatar accessToken={accessToken} role={role} />
    </div>
  );
};

export default NavbarLinks;
