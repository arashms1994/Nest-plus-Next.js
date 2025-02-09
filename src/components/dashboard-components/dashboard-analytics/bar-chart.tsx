"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "فروردین", desktop: 186, mobile: 80 },
  { month: "اردیبهشت", desktop: 305, mobile: 200 },
  { month: "خرداد", desktop: 237, mobile: 120 },
  { month: "تیر", desktop: 73, mobile: 190 },
  { month: "مرداد", desktop: 209, mobile: 130 },
  { month: "شهریور", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#14b8a6",
  },
  mobile: {
    label: "Mobile",
    color: "#06b6d4",
  },
} satisfies ChartConfig

export function BarChartAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>چارت 6 ماهه</CardTitle>
        <CardDescription>فروردین - شهریور 1403</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          رشد ماه جدید 5.2% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          مجموع بازدیدهای 6 ماه گذشته
        </div>
      </CardFooter>
    </Card>
  )
}
