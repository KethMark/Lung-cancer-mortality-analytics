"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"

interface TreatmentData {
  treatment: string;
  value: number;
  fill: string;
}

const initialDataTreatment: TreatmentData[] = [
  {
    treatment: "radiation",
    value: 2552,
    fill: "var(--color-radiation)",
  },
  {
    treatment: "surgery",
    value: 2502,
    fill: "var(--color-surgery)",
  },
  {
    treatment: "chemotherapy",
    value: 2516,
    fill: "var(--color-chemotherapy)",
  },
  {
    treatment: "combined",
    value: 2430,
    fill: "var(--color-combined)",
  },
];

const fetchTreatmentDistribution = async (): Promise<TreatmentData[]> => {
  const { data } = await axios.get("/api/overview/piechart/treatment");
  return data;
};

const chartConfig = {
  radiation: {
    label: "Radiation",
    color: "hsl(var(--chart-1))",
  },
  surgery: {
    label: "Surgery",
    color: "hsl(var(--chart-2))",
  },
  chemotherapy: {
    label: "Chemo",
    color: "hsl(var(--chart-3))",
  },
  combined: {
    label: "Combined",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function TreatmentComponent() {
  const {
    data: treatmentsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["treatmentDistribution"],
    queryFn: fetchTreatmentDistribution,
    initialData: initialDataTreatment,
  });

    const id = "pie-interactive"
    const [activeMonth, setActiveMonth] = React.useState(treatmentsData[0].treatment)
  
    const activeIndex = React.useMemo(
      () => treatmentsData.findIndex((item) => item.treatment === activeMonth),
      [activeMonth]
    )
    const months = React.useMemo(() => treatmentsData.map((item) => item.treatment), [])
  
    return (
      <Card data-chart={id} className="flex flex-col">
        <ChartStyle id={id} config={chartConfig} />
        <CardHeader className="flex-row items-start space-y-0 pb-0">
          <div className="grid gap-1">
            <CardTitle>Treatment Type Distribution</CardTitle>
            <CardDescription>2014 - 2024</CardDescription>
          </div>
          <Select value={activeMonth} onValueChange={setActiveMonth}>
            <SelectTrigger
              className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent align="end" className="rounded-xl">
              {months.map((key) => {
                const config = chartConfig[key as keyof typeof chartConfig]
                
                if (!config) {
                  return null
                }
               
                return (
                  <SelectItem
                    key={key}
                    value={key}
                    className="rounded-lg [&_span]:flex"
                  >
                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className="flex h-3 w-3 shrink-0 rounded-sm"
                        style={{
                          backgroundColor: `var(--color-${key})`,
                        }}
                      />
                      {config.label}
                    </div>
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="flex flex-1 justify-center pb-0">
          <ChartContainer
            id={id}
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[300px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={treatmentsData}
                dataKey="value"
                nameKey="treatment"
                innerRadius={60}
                strokeWidth={5}
                activeIndex={activeIndex}
                activeShape={({
                  outerRadius = 0,
                  ...props
                }: PieSectorDataItem) => (
                  <g>
                    <Sector {...props} outerRadius={outerRadius + 10} />
                    <Sector
                      {...props}
                      outerRadius={outerRadius + 25}
                      innerRadius={outerRadius + 12}
                    />
                  </g>
                )}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {treatmentsData[activeIndex].value.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Treatment type
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    )
}
