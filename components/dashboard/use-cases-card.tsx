import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface UseCasesCardProps {
  count: number
  compliant: number
  nonCompliant: number
  percentage: number
}

export default function UseCasesCard({ count, compliant, nonCompliant, percentage }: UseCasesCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Use Cases Evaluated</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{count}</div>
        <Progress value={percentage} className="h-2 mt-2" />
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <div>{compliant} Compliant</div>
          <div>{nonCompliant} Non-compliant</div>
        </div>
      </CardContent>
    </Card>
  )
}
