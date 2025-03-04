"use client"

import { createOrderAction } from "@/actions/user/orders";
import CityField, { ComboboxDemo } from "@/components/dashboard-components/fields/city-field";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ICity, IOrder } from "@/type/serverTypes";
import React, { useActionState, useState } from "react";

interface ICheckoutProps {
  defaultValue?: IOrder;
}

const CheckoutForm = ({ defaultValue }: ICheckoutProps) => {
  // const [state, action] = useActionState(createOrderAction, {
  //   message: "",
  //   success: false,
  // });

  return (
    <Card className="flex flex-col w-96 justify-center items-center p-2">
      <CardHeader className="text-lg text-center w-44 font-normal border-b-2 border-gray-700">تکمیل سفارش</CardHeader>
      <CardContent>
        <form action="" className="flex flex-col p-3">
          <CityField name="city"/>
          <ComboboxDemo/>

        </form>
      </CardContent>
    </Card>
  );
};

export default CheckoutForm;
