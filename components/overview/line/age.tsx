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

interface DiagnosedAgeData {
  year: string;
  averageAge: number;
}

const initialDataSurvival: DiagnosedAgeData[] = [
  {
    "year": "2014",
    "averageAge": 55
  },
  {
    "year": "2015",
    "averageAge": 55
  },
  {
    "year": "2016",
    "averageAge": 55
  },
  {
    "year": "2017",
    "averageAge": 54
  },
  {
    "year": "2018",
    "averageAge": 55
  },
  {
    "year": "2019",
    "averageAge": 54
  },
  {
    "year": "2020",
    "averageAge": 55
  },
  {
    "year": "2021",
    "averageAge": 55
  },
  {
    "year": "2022",
    "averageAge": 56
  },
  {
    "year": "2023",
    "averageAge": 54
  },
  {
    "year": "2024",
    "averageAge": 55
  }
]

const fetchDiagnosedAgeDistribution = async (): Promise<DiagnosedAgeData[]> => {
  const { data } = await axios.get("/api/overview/line/age");
  return data;
};

const chartConfig = {
  averageAge: {
    label: "Age",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function DiagnosedAgeComponent() {
  const { 
    data, 
    isLoading, 
    isError 
} = useQuery({
    queryKey: ["diagnosedAgeDistribution"],
    queryFn: fetchDiagnosedAgeDistribution,
    initialData: initialDataSurvival,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Patient Age by Diagnosis Year</CardTitle>
        <CardDescription>2014 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              top: 30,
              left: 25,
              right: 25,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="averageAge"
              type="natural"
              stroke="var(--color-averageAge)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-averageAge)",
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
          Trending up by this year  <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing average age for the last january 2014 - 2024
        </div>
      </CardFooter>
    </Card>
  );
}
