import Link from "next/link";
import React from "react";
import { NavbarAvatar } from "./navbarAvatar";
import CartIcon from "../cart/CartIcon";
import { IUser } from "@/type/serverTypes";
import { ModeToggle } from "@/components/theme-toggle/ModeToggle";

const NavbarLinks = ({
  user,
  accessToken,
}: {
  user: IUser;
  accessToken: string;
}) => {
  return (
    <div className="flex justify-center items-center gap-1">
      <ModeToggle />
      <CartIcon />
      <NavbarAvatar user={user} accessToken={accessToken} />
    </div>
  );
};

export default NavbarLinks;
