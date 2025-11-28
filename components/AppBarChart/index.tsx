'use client'

import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const AppBarChart = () => {
    return (
        <div className="">
            <h1 className="text-lg font-medium mb-6">Total Renevue</h1>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid />
                    <ChartTooltip animationDuration={0} content={<ChartTooltipContent />} />  
                      <ChartLegend content={<ChartLegendContent />} />
                    <XAxis  
                        dataKey="month"
                        tickLine={true} 
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                      <YAxis
                        tickLine={true} 
                        tickMargin={10} 
                        axisLine={false}
                    />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}

export default AppBarChart;