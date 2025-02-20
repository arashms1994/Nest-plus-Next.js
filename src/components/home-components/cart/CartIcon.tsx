"use client";

import React from "react";
export default CartIcon;
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Cart from "./Cart";

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
            <h1 className="font-semibold text-lg">سبد خرید</h1>
          </DrawerTitle>

          <div className="w-full">
            <Cart />
          </div>

          <DrawerFooter>
            <Button className="bg-black">ثبت سفارش</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
