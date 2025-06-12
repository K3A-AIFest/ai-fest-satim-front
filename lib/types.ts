export interface ComplianceScore {
  score: number
  total: number
  percentage: number
}

export interface GapDetection {
  count: number
  critical: number
  high: number
  medium: number
  low: number
}

export interface UseCaseEvaluation {
  count: number
  compliant: number
  nonCompliant: number
  percentage: number
}

export interface Activity {
  id: string
  type: "gap" | "use-case" | "policy" | "system"
  title: string
  description: string
  timestamp: string
  severity?: "critical" | "high" | "medium" | "low"
}

export interface Suggestion {
  id: string
  title: string
  description: string
  priority: "critical" | "high" | "medium" | "low"
}

export interface ComplianceByCategory {
  category: string
  score: number
  total: number
  percentage: number
}

export interface Policy {
  id: string
  name: string
  description: string
  lastUpdated: string
  status: "active" | "draft" | "archived"
}

export interface Standard {
  id: string
  name: string
  description: string
  version: string
}

export interface Gap {
  id: string
  policyId: string
  policyName: string
  standardId: string
  standardName: string
  control: string
  description: string
  severity: "critical" | "high" | "medium" | "low"
  suggestedFix: string
}

export interface UseCase {
  id: string
  name: string
  description: string
  policies: string[]
  complianceScore: number
  issues: {
    policyId: string
    policyName: string
    clause: string
    description: string
    severity: "critical" | "high" | "medium" | "low"
  }[]
}
