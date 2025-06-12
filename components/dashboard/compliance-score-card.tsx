import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface ComplianceScoreCardProps {
  score: number
  total: number
  percentage: number
}

export default function ComplianceScoreCard({ score, total, percentage }: ComplianceScoreCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{percentage}%</div>
        <Progress value={percentage} className="h-2 mt-2" />
        <p className="text-xs text-muted-foreground mt-2">
          {score} of {total} controls compliant
        </p>
      </CardContent>
    </Card>
  )
}
