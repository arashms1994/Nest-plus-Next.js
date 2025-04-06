"use client";

import React from "react";
export default CartIcon;
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Cart from "./Cart";
import Link from "next/link";

export function CartIcon() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <ShoppingCart />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm flex flex-col items-center justify-center">
          <DrawerTitle className="text-center">
            <div className="font-semibold text-lg">سبد خرید</div>
          </DrawerTitle>

          <div className="w-full pt-2">
            <Cart />
          </div>

          <DrawerFooter>
            <Link href="/user-dashboard/checkout">
              <Button className="bg-black">ثبت سفارش</Button>
            </Link>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
