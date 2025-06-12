import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Activity } from "@/lib/types"
import { FileWarning, FileCheck, FileText, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface RecentActivityProps {
  activities: Activity[]
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  const getIcon = (type: Activity["type"]) => {
    switch (type) {
      case "gap":
        return <FileWarning className="h-4 w-4" />
      case "use-case":
        return <FileCheck className="h-4 w-4" />
      case "policy":
        return <FileText className="h-4 w-4" />
      case "system":
        return <AlertCircle className="h-4 w-4" />
    }
  }

  const getSeverityColor = (severity?: Activity["severity"]) => {
    switch (severity) {
      case "critical":
        return "text-destructive"
      case "high":
        return "text-orange-500"
      case "medium":
        return "text-yellow-500"
      case "low":
        return "text-green-500"
      default:
        return "text-muted-foreground"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            <div className={cn("mt-0.5", getSeverityColor(activity.severity))}>{getIcon(activity.type)}</div>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{activity.title}</p>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground">{formatDate(activity.timestamp)}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
