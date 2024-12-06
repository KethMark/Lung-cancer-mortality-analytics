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

interface DiagnosedData {
  month: string;
  patients: number;
}

const initialDataSurvival: DiagnosedData[] = [
  {
    "month": "jan",
    "patients": 948
  },
  {
    "month": "feb",
    "patients": 751
  },
  {
    "month": "mar",
    "patients": 872
  },
  {
    "month": "apr",
    "patients": 792
  },
  {
    "month": "may",
    "patients": 870
  },
  {
    "month": "jun",
    "patients": 772
  },
  {
    "month": "jul",
    "patients": 830
  },
  {
    "month": "aug",
    "patients": 829
  },
  {
    "month": "sep",
    "patients": 814
  },
  {
    "month": "oct",
    "patients": 824
  },
  {
    "month": "nov",
    "patients": 824
  },
  {
    "month": "dec",
    "patients": 874
  }
]

const fetchDiagnosedDistribution = async (): Promise<DiagnosedData[]> => {
  const { data } = await axios.get("/api/overview/line/patient");
  return data;
};

const chartConfig = {
  patients: {
    label: "Patients",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function DiagnosedPatientComponent() {
  const { 
    data, 
    isLoading, 
    isError 
} = useQuery({
    queryKey: ["diagnosedDistribution"],
    queryFn: fetchDiagnosedDistribution,
    initialData: initialDataSurvival,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patients Diagnosed Over Time</CardTitle>
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
              dataKey="patients"
              type="natural"
              stroke="var(--color-patients)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-patients)",
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
          Trending up by this month  <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing patient diagnosed for the last january 2014 - 2024
        </div>
      </CardFooter>
    </Card>
  );
}
