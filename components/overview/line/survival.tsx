"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

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

interface SurvivalData {
  month: string;
  survived: number;
  notSurvived: number;
}

const initialDataSurvival: SurvivalData[] = [
  {
    "month": "january",
    "survived": 220,
    "notSurvived": 728
  },
  {
    "month": "february",
    "survived": 143,
    "notSurvived": 608
  },
  {
    "month": "march",
    "survived": 197,
    "notSurvived": 675
  },
  {
    "month": "april",
    "survived": 160,
    "notSurvived": 632
  },
  {
    "month": "may",
    "survived": 203,
    "notSurvived": 667
  },
  {
    "month": "june",
    "survived": 159,
    "notSurvived": 613
  },
  {
    "month": "july",
    "survived": 181,
    "notSurvived": 649
  },
  {
    "month": "august",
    "survived": 174,
    "notSurvived": 655
  },
  {
    "month": "september",
    "survived": 172,
    "notSurvived": 642
  },
  {
    "month": "october",
    "survived": 184,
    "notSurvived": 640
  },
  {
    "month": "november",
    "survived": 174,
    "notSurvived": 650
  },
  {
    "month": "december",
    "survived": 185,
    "notSurvived": 689
  }
]

const fetchSurvivalDistribution = async (): Promise<SurvivalData[]> => {
  const { data } = await axios.get("/api/overview/line/survival");
  return data;
};

const chartConfig = {
  survived: {
    label: "Survivor",
    color: "hsl(var(--chart-1))",
  },
  notSurvived: {
    label: "Casualty",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function SurvivalComponent() {
  const { 
    data, 
    isLoading, 
    isError 
} = useQuery({
    queryKey: ["survivalDistribution"],
    queryFn: fetchSurvivalDistribution,
    initialData: initialDataSurvival,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Survival Rate a month</CardTitle>
        <CardDescription>2014 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              top: 30,
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
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="survived"
              type="natural"
              stroke="var(--color-survived)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-survived)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>

            <Line
              dataKey="notSurvived"
              type="natural"
              stroke="var(--color-notSurvived)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-notSurvived)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing survival rate for the last january 2014 - 2024
        </div>
      </CardFooter>
    </Card>
  );
}
