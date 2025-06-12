"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ComplianceByCategory } from "@/lib/types"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface ComplianceChartProps {
  data: ComplianceByCategory[]
}

export default function ComplianceChart({ data }: ComplianceChartProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Compliance by Category</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="category" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              formatter={(value) => [`${value}%`, "Compliance"]}
              labelFormatter={(label) => `Category: ${label}`}
            />
            <Bar dataKey="percentage" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
