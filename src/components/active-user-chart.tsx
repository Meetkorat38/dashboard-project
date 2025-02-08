"use client";

import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserGrowth } from "@/features/user-growth-api";
import { Skeleton } from "./ui/skeleton";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  stream: {
    label: "Streams",
    color: "hsl(var(--chart-1))",
  },
  user: {
    label: "Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

type Chart = {
  date: string;
  stream: number;
  user: number;
};

export const ActiveUserChart = () => {
  const { data: chartData, isPending } = useUserGrowth();

  const [timeRange, setTimeRange] = useState("30d");

  const filteredData = chartData
    ? chartData.filter((item: Chart) => {
        const date = new Date(item.date);
        const referenceDate = new Date("2024-06-30");
        let daysToSubtract = 30;
        if (timeRange === "7d") {
          daysToSubtract = 7;
        }
        const startDate = new Date(referenceDate);
        startDate.setDate(startDate.getDate() - daysToSubtract);
        return date >= startDate;
      })
    : [];

  if (isPending)
    return (
      <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-14 h-screen ">
        <Skeleton className="h-[250px] w-[550px] rounded-md" />
        <Skeleton className="h-[250px] w-[550px] rounded-md" />
        <Skeleton className="h-[250px] w-[550px] rounded-md" />
        <Skeleton className="h-[250px] w-[550px] rounded-md" />
      </div>
    );

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Active Users - Interactive</CardTitle>
          <CardDescription>
            The number of users who have streamed at least one song in the last
            30 and 7 days.
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 30 days" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-stream)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-stream)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-user)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-user)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="user"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-user)"
              stackId="a"
            />
            <Area
              dataKey="stream"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-stream)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
