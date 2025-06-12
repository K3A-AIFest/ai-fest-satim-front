import ComplianceScoreCard from "@/components/dashboard/compliance-score-card"
import GapsDetectedCard from "@/components/dashboard/gaps-detected-card"
import UseCasesCard from "@/components/dashboard/use-cases-card"
import ComplianceChart from "@/components/dashboard/compliance-chart"
import RecentActivity from "@/components/dashboard/recent-activity"
import SmartSuggestions from "@/components/dashboard/smart-suggestions"
import {
  complianceScore,
  gapDetection,
  useCaseEvaluation,
  recentActivities,
  smartSuggestions,
  complianceByCategory,
} from "@/lib/mock-data"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your organization's compliance status and recent activity.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComplianceScoreCard
          score={complianceScore.score}
          total={complianceScore.total}
          percentage={complianceScore.percentage}
        />
        <GapsDetectedCard
          count={gapDetection.count}
          critical={gapDetection.critical}
          high={gapDetection.high}
          medium={gapDetection.medium}
          low={gapDetection.low}
        />
        <UseCasesCard
          count={useCaseEvaluation.count}
          compliant={useCaseEvaluation.compliant}
          nonCompliant={useCaseEvaluation.nonCompliant}
          percentage={useCaseEvaluation.percentage}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <ComplianceChart data={complianceByCategory} />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <RecentActivity activities={recentActivities} />
        <SmartSuggestions suggestions={smartSuggestions} />
      </div>
    </div>
  )
}
