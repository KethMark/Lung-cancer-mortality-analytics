"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Rectangle,
  XAxis,
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
  condition: "never_smoked" | "current_smoker" | "former_smoker" | "passive_smoker";
  count: number;
  fill: string;
};

const initialDataSmoking: ConditionData[] = [
  {
    condition: "never_smoked",
    count: 2481,
    fill: "var(--color-never_smoked)",
  },
  {
    condition: "current_smoker",
    count: 2483,
    fill: "var(--color-current_smoker)",
  },
  {
    condition: "former_smoker",
    count: 2498,
    fill: "var(--color-former_smoker)",
  },
  {
    condition: "passive_smoker",
    count: 2538,
    fill: "var(--color-passive_smoker)",
  },
];

const fetchSmoking = async (): Promise<ConditionData[]> => {
  const { data } = await axios.get("/api/overview/bar/smoking");
  return data;
};

const chartConfig = {
  never_smoked: {
    label: "Never Smoked",
    color: "hsl(var(--chart-2))",
  },
  current_smoker: {
    label: "Current Smoker",
    color: "hsl(var(--chart-3))",
  },
  former_smoker: {
    label: "Former Smoker",
    color: "hsl(var(--chart-5))",
  },
  passive_smoker: {
    label: "Passive Smoker",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function SmokingComponent() {
  const {
    data: SmokingData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Smoking"],
    queryFn: fetchSmoking,
    initialData: initialDataSmoking,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Smoking Status Distribution</CardTitle>
        <CardDescription>2014 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={SmokingData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="smokingStatus"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="count"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                );
              }}
            >
              <LabelList
                position="top"
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
          Showing total smoking status for the last january 2014 - 2024
        </div>
      </CardFooter>
    </Card>
  );
}
