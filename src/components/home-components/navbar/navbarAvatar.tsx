"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

interface IAvatarProps {
  accessToken: string;
  role: string;
}

export function NavbarAvatar({ accessToken, role }: IAvatarProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <User />
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
            {role === "1" && (
              <>
                <DropdownMenuItem asChild>
                  <Link
                    href="/user-dashboard"
                    className="block w-full text-left"
                    prefetch={false}
                  >
                    حساب کاربری
                  </Link>
                </DropdownMenuItem>
              </>
            )}
            {role === "2" && (
              <>
                <DropdownMenuItem asChild>
                  <Link
                    href="/shop"
                    className="block w-full text-left"
                    prefetch={false}
                  >
                    حساب کاربری
                  </Link>
                </DropdownMenuItem>
              </>
            )}
            {role === "3" && (
              <>
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard"
                    className="block w-full text-left"
                    prefetch={false}
                  >
                    حساب کاربری
                  </Link>
                </DropdownMenuItem>
              </>
            )}
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
  );
}
