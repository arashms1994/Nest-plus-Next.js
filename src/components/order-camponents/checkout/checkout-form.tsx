"use client";

import { createOrderAction } from "@/actions/user/orders";
import CityField from "@/components/dashboard-components/fields/city-field";
import ProductCard from "@/components/product-components/product-card/productCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCartStore } from "@/providers/CartProvider";
import { ICity, IOrder } from "@/type/serverTypes";
import React, { useActionState, useState } from "react";
import { DatePicker } from "./DatePicker";

interface ICheckoutProps {
  defaultValue?: IOrder;
}

const CheckoutForm = ({ defaultValue }: ICheckoutProps) => {
  // const [state, action] = useActionState(createOrderAction, {
  //   message: "",
  //   success: false,
  // });
  const { items } = useCartStore((state) => state);

  return (
    <Card className="flex flex-col w-[800px] justify-center items-center p-2">
      <CardHeader className="text-lg text-center w-44 font-normal border-b-2 border-gray-700">
        تکمیل سفارش
      </CardHeader>
      <CardContent className="w-full">
        <form
          action=""
          className="flex flex-col justify-center items-center gap-2 py-2"
        >
          <Textarea
            className="w-full"
            name="street"
            placeholder="لطفا آدرس پستی خود را وارد نمایید."
          />
          <div className="flex justify-center items-center gap-2 w-full">
            <CityField name="city" />
            <Input
              className="w-full h-14"
              placeholder="کد پستی خود را وارد نمایید."
              name="postalCode"
            />
          <DatePicker/>
          </div>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {items.map((item) => (
              <ProductCard
                key={item.product.id}
                product={{ ...item.product, bestSeller: item.productSeller }}
                productSeller={item.productSeller}
              />
            ))}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CheckoutForm;
