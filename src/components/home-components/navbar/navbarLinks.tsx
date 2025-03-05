import Link from "next/link";
import React from "react";
import { NavbarAvatar } from "./navbarAvatar";
import CartIcon from "../cart/CartIcon";
import { IUser } from "@/type/serverTypes";
import { ModeToggle } from "@/components/theme-toggle/ModeToggle";
import { Button } from "@/components/ui/button";

const NavbarLinks = ({
  role,
  accessToken,
}: {
  role: string;
  accessToken: string;
}) => {
  return (
    <div className="flex justify-center items-center gap-1">
      <Link href="/auth/seller/register">
        <Button variant="outline">فروشنده شوید</Button>
      </Link>
      <ModeToggle />
      <CartIcon />
      <NavbarAvatar role={role} accessToken={accessToken} />
    </div>
  );
};

export default NavbarLinks;
