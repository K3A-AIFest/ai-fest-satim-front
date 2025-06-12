import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

interface GapsDetectedCardProps {
  count: number
  critical: number
  high: number
  medium: number
  low: number
}

export default function GapsDetectedCard({ count, critical, high, medium, low }: GapsDetectedCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Gaps Detected</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{count}</div>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-destructive mr-1"></span>
            <span className="text-xs">{critical} Critical</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-orange-500 mr-1"></span>
            <span className="text-xs">{high} High</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-yellow-500 mr-1"></span>
            <span className="text-xs">{medium} Medium</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-green-500 mr-1"></span>
            <span className="text-xs">{low} Low</span>
          </div>
        </div>
        {critical > 0 && (
          <div className="flex items-center gap-1 mt-2 text-destructive text-xs">
            <AlertCircle className="h-3 w-3" />
            <span>{critical} critical gaps require immediate attention</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
