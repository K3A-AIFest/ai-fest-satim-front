"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import type { UseCase } from "@/lib/types"
import { cn } from "@/lib/utils"

interface ComplianceResultsProps {
  useCase: UseCase
}

export default function ComplianceResults({ useCase }: ComplianceResultsProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-destructive text-destructive-foreground"
      case "high":
        return "bg-orange-500 text-white"
      case "medium":
        return "bg-yellow-500 text-white"
      case "low":
        return "bg-green-500 text-white"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">{useCase.name}</h3>
          <p className="text-sm text-muted-foreground">{useCase.description}</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl font-bold">{useCase.complianceScore}%</div>
            <p className="text-sm text-muted-foreground">Compliance Score</p>
            <Progress value={useCase.complianceScore} className="h-2 w-full max-w-md" />
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-lg font-medium mb-4">Compliance Issues</h3>
        {useCase.issues.length === 0 ? (
          <p className="text-sm text-muted-foreground">No compliance issues found.</p>
        ) : (
          <div className="space-y-4">
            {useCase.issues.map((issue, index) => (
              <div key={index} className="border rounded-md p-4 space-y-2">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">{issue.policyName}</h4>
                    <p className="text-sm text-muted-foreground">{issue.clause}</p>
                  </div>
                  <Badge className={cn("font-normal", getSeverityColor(issue.severity))}>{issue.severity}</Badge>
                </div>
                <p className="text-sm">{issue.description}</p>
                <div className="flex justify-end">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View Policy
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Recommendations</h3>
        <div className="space-y-2">
          <p className="text-sm">1. Update your implementation to include encryption at rest for all stored data.</p>
          <p className="text-sm">2. Ensure cloud provider stores data only in approved jurisdictions.</p>
          <p className="text-sm">3. Implement regular auditing of access controls.</p>
        </div>
      </div>
    </div>
  )
}
