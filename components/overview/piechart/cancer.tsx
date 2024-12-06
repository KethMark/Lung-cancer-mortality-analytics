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

interface CancerStageData {
  name: string;
  value: number;
  fill: string;
}

const initialDataCancer: CancerStageData[] = [
  {
    "name": "I",
    "value": 2485,
    "fill": "var(--color-I)"
  },
  {
    "name": "II",
    "value": 2461,
    "fill": "var(--color-II)"
  },
  {
    "name": "III",
    "value": 2497,
    "fill": "var(--color-III)"
  },
  {
    "name": "IV",
    "value": 2557,
    "fill": "var(--color-IV)"
  }
]

const fetchCancerStages = async (): Promise<CancerStageData[]> => {
  const { data } = await axios.get("/api/overview/piechart/cancer");
  return data;
};

const chartConfig = {
  I: {
    label: "Stage I",
    color: "hsl(var(--chart-1))",
  },
  II: {
    label: "Stage II",
    color: "hsl(var(--chart-2))",
  },
  III: {
    label: "Stage III",
    color: "hsl(var(--chart-3))",
  },
  IV: {
    label: "Stage IV",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function CancerComponent() {
  const {
    data: cancerStageData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cancerStages"],
    queryFn: fetchCancerStages,
    initialData: initialDataCancer
  });

  const id = "pie-interactive"
  const [activeMonth, setActiveMonth] = React.useState(cancerStageData[0].name)

  const activeIndex = React.useMemo(
    () => cancerStageData.findIndex((item) => item.name === activeMonth),
    [activeMonth]
  )
  const months = React.useMemo(() => cancerStageData.map((item) => item.name), [])

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Cancer Stages Distribution</CardTitle>
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
              data={cancerStageData}
              dataKey="value"
              nameKey="name"
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
                          {cancerStageData[activeIndex].value.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Cancer
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