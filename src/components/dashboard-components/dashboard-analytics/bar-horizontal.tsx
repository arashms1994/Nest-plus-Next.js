"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "فروردین", desktop: 186, mobile: 80 },
  { month: "اردیبهشت", desktop: 305, mobile: 200 },
  { month: "خرداد", desktop: 237, mobile: 120 },
  { month: "تیر", desktop: 73, mobile: 190 },
  { month: "مرداد", desktop: 209, mobile: 130 },
  { month: "شهریور", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#14b8a6",
  },
  mobile: {
    label: "Mobile",
    color: "#06b6d4",
  },
  label: {
    color: "#e5e5e5",
  },
} satisfies ChartConfig;

export function BarHorizontalAnalytics() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>چارت فروش ماهانه</CardTitle>
        <CardDescription>فروردین - شهریور 1403</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          رشد ماهانه 5.2 % <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          مجموع فروشهای 6 ماهه اول سال
        </div>
      </CardFooter>
    </Card>
  );
}
