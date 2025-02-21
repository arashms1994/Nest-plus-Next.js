"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const PaymentCard = () => {
  return (
      <Card className="w-full max-w-md p-6 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">درگاه پرداخت بانکی</CardTitle>
          <CardDescription>مشخصات کارت اعتباری خود را وارد کنید</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">شماره کارت</Label>
              <Input
                id="cardNumber"
                type="text"
                placeholder="1111 1111 1111 1111"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expirationDate">تاریخ انقضا</Label>
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger id="expirationMonth">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i + 1} value={i + 1}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="expirationYear">
                      <SelectValue placeholder="YY" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem key={i + 2023} value={i + 2023}>
                          {i + 2023}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" type="text" placeholder="123" required />
              </div>
            </div>
            <div>
              <Label htmlFor="cardholderName">ایمیل(اختیاری)</Label>
              <Input
                id="cardholderName"
                type="text"
                placeholder="example@gmail.com"
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="text-muted-foreground">مجموع</div>
            <div className="text-2xl font-bold">تومان</div>
          </div>
          <Button type="submit" className="px-6 py-2">
            پرداخت
          </Button>
        </CardFooter>
      </Card>
  );
};

export default PaymentCard;
