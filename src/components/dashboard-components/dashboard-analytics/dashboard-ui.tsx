"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./analytics-components/table-analytics";
import {
  BarChart3,
  ArrowUp,
  ArrowDown,
  Users,
  Clock,
  MousePointer2,
} from "lucide-react";
import { useState } from "react";
import { Card } from "./analytics-components/card-analytics";

// Sample analytics data
type AnalyticsData = {
  id: string;
  page: string;
  visitors: number;
  bounceRate: number;
  avgTime: string;
  trend: "up" | "down";
  percentageChange: number;
};

const analyticsData: AnalyticsData[] = [
  {
    id: "1",
    page: "صفحه اصلی",
    visitors: 12453,
    bounceRate: 42.3,
    avgTime: "2m 35s",
    trend: "up",
    percentageChange: 12.5,
  },
  {
    id: "2",
    page: "محصولات",
    visitors: 8932,
    bounceRate: 38.7,
    avgTime: "3m 12s",
    trend: "up",
    percentageChange: 8.2,
  },
  {
    id: "3",
    page: "مقالات",
    visitors: 5621,
    bounceRate: 45.1,
    avgTime: "1m 45s",
    trend: "down",
    percentageChange: 3.8,
  },
  {
    id: "4",
    page: "درباره ما",
    visitors: 3254,
    bounceRate: 40.2,
    avgTime: "1m 15s",
    trend: "up",
    percentageChange: 5.3,
  },
  {
    id: "5",
    page: "ارتباط با ما",
    visitors: 2845,
    bounceRate: 48.6,
    avgTime: "0m 55s",
    trend: "down",
    percentageChange: 2.1,
  },
];

export default function DashboardAnalytics() {
  const [sortColumn, setSortColumn] = useState<keyof AnalyticsData>("visitors");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const sortedData = [...analyticsData].sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return 0;
  });

  const handleSort = (column: keyof AnalyticsData) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        آنالیزها
        <BarChart3 className="h-8 w-8" />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                بازدیدها
              </p>
              <h2 className="text-3xl font-bold">33,105</h2>
            </div>
            <Users className="h-8 w-8 text-primary" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                میانگین  ساعت
              </p>
              <h2 className="text-3xl font-bold">2m 8s</h2>
            </div>
            <Clock className="h-8 w-8 text-primary" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                نرخ پرش
              </p>
              <h2 className="text-3xl font-bold">42.9%</h2>
            </div>
            <MousePointer2 className="h-8 w-8 text-primary" />
          </div>
        </Card>
      </div>

      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">آنالیز صفحات</h2>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead
                    className="cursor-pointer"
                    onClick={() => handleSort("page")}
                  >
                    صفحه
                  </TableHead>
                  <TableHead
                    className="cursor-pointer text-right"
                    onClick={() => handleSort("visitors")}
                  >
                    بازدیدکنندگان
                  </TableHead>
                  <TableHead
                    className="cursor-pointer text-right"
                    onClick={() => handleSort("bounceRate")}
                  >
                    نرخ پرش
                  </TableHead>
                  <TableHead
                    className="cursor-pointer text-right"
                    onClick={() => handleSort("avgTime")}
                  >
                    میانگین زمان
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.page}</TableCell>
                    <TableCell className="text-right">
                      {row.visitors.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {row.bounceRate}%
                    </TableCell>
                    <TableCell className="text-right">{row.avgTime}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span
                          className={
                            row.trend === "up"
                              ? "text-green-600"
                              : "text-red-600"
                          }
                        >
                          {row.percentageChange}%
                        </span>
                        {row.trend === "up" ? (
                          <ArrowUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowDown className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>
    </div>
  );
}
