"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>سفارش شما با موفقیت ثبت گردید.</CardTitle>
        <CardDescription>شماره پیگیری:</CardDescription>
      </CardHeader>
      <CardContent><h3 className="font-medium text-lg">368547951</h3></CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/">
          <Button variant="outline" className="bg-purple-600 text-white">بازگشت به صفحه اصلی</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
