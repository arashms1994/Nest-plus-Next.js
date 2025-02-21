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
import { PercentSquareIcon, User } from "lucide-react";
import {
  Person,
  Person2,
  Person2Rounded,
  Person3,
  PersonOffOutlined,
} from "@mui/icons-material";

interface INavbarAvatarProps {
  user: IUser;
  accessToken: string;
}

export async function NavbarAvatar({ user, accessToken }: INavbarAvatarProps) {
  return (
    <AuthProvider accessToken={accessToken || ""}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <User />
            {/* <AvatarFallback>{`${user?.firstName.charAt(
              0
            )}${user?.lastName.charAt(0)}`}</AvatarFallback> */}
            <span className="sr-only">Toggle user menu</span>
          </Button>
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
                  حساب کاربری
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/orders"
                  className="block w-full text-left"
                  prefetch={false}
                >
                  سفارشات
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Button variant="outline" className="block w-full text-left">
                  خروج
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
                ورود
              </Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </AuthProvider>
  );
}
