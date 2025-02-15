"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IUser } from "@/type/serverTypes";
import AuthProvider from "@/providers/AuthProvider";
import { deleteSession } from "@/lib/session";

interface INavbarAvatarProps {
  user: IUser;
  accessToken: string;
}

export async function NavbarAvatar({ user, accessToken }: INavbarAvatarProps) {
  const handleLogOut = () => {
    deleteSession();
  };

  return (
    <AuthProvider accessToken={accessToken || ""}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-9 w-9">
            <AvatarImage
              alt={`${user?.firstName.charAt(0)}${user?.lastName.charAt(0)}`}
            />
            <AvatarFallback>{`${user?.firstName.charAt(
              0
            )}${user?.lastName.charAt(0)}`}</AvatarFallback>
            <span className="sr-only">Toggle user menu</span>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-10">
          {accessToken && (
            <>
              <DropdownMenuItem className="font-bold text-lg">
                John Doe
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href="/profile"
                  className="block w-full text-left"
                  prefetch={false}
                >
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Button
                  variant="outline"
                  className="block w-full text-left"
                  onClick={}
                >
                  Logout
                </Button>
              </DropdownMenuItem>{" "}
            </>
          )}
          {!accessToken && (
            <DropdownMenuItem asChild>
              <Link
                href="/auth/login"
                className="block w-full text-left"
                prefetch={false}
              >
                Login
              </Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </AuthProvider>
  );
}
