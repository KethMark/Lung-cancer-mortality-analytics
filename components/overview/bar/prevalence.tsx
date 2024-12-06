"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Rectangle,
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
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type ConditionData = {
  condition: "hypertension" | "asthma" | "cirrhosis" | "other_cancer";
  count: number;
  fill: string;
};

const initialDataPrevalence: ConditionData[] = [
  {
    condition: "hypertension",
    count: 7521,
    fill: "var(--color-hypertension)",
  },
  {
    condition: "asthma",
    count: 4686,
    fill: "var(--color-asthma)",
  },
  {
    condition: "cirrhosis",
    count: 2199,
    fill: "var(--color-cirrhosis)",
  },
  {
    condition: "other_cancer",
    count: 865,
    fill: "var(--color-other_cancer)",
  },
];

const fetchPrevalence = async (): Promise<ConditionData[]> => {
  const { data } = await axios.get("/api/overview/bar/prevalence");
  return data;
};

const chartConfig = {
  hypertension: {
    label: "Hypertension",
    color: "hsl(var(--chart-1))",
  },
  asthma: {
    label: "Asthma",
    color: "hsl(var(--chart-2))",
  },
  cirrhosis: {
    label: "Cirrhosis",
    color: "hsl(var(--chart-3))",
  },
  other_cancer: {
    label: "Other Cancer",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function PrevalanceComponent() {
  const {
    data: PrevalenceData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Prevalence"],
    queryFn: fetchPrevalence,
    initialData: initialDataPrevalence,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Medical Conditions Prevalence</CardTitle>
        <CardDescription>2014 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={PrevalenceData}
            layout="vertical"
            margin={{
              left: 26,
              right: 14
            }}
          >
            <YAxis
              dataKey="condition"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="count" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar 
              dataKey="count" 
              layout="vertical" 
              radius={5} 
            >
              <LabelList
                position="right"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total medical conditions for the last january 2014 - 2024
        </div>
      </CardFooter>
    </Card>
  )
}
