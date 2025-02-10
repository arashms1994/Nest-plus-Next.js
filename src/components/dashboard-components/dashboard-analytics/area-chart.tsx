"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
    color: "#f43f5e",
  },
  mobile: {
    label: "Mobile",
    color: "#6366f1",
  },
} satisfies ChartConfig

export function AreaChartAnalytics() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>چارت فروش</CardTitle>
        <CardDescription>
        مجموع فروشهای 6 ماه گذشته
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
            رشد ماه جدید 5.2% <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
            فروردین - شهریور 1403
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
