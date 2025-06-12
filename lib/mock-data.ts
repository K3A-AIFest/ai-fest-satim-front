import type {
  ComplianceScore,
  GapDetection,
  UseCaseEvaluation,
  Activity,
  Suggestion,
  ComplianceByCategory,
  Policy,
  Standard,
  Gap,
  UseCase,
} from "./types"

export const complianceScore: ComplianceScore = {
  score: 78,
  total: 100,
  percentage: 78,
}

export const gapDetection: GapDetection = {
  count: 24,
  critical: 3,
  high: 7,
  medium: 10,
  low: 4,
}

export const useCaseEvaluation: UseCaseEvaluation = {
  count: 15,
  compliant: 11,
  nonCompliant: 4,
  percentage: 73,
}

export const recentActivities: Activity[] = [
  {
    id: "act1",
    type: "gap",
    title: "New Gap Detected",
    description: "ISO 27001 control missing in Data Privacy Policy",
    timestamp: "2025-06-12T09:30:00Z",
    severity: "critical",
  },
  {
    id: "act2",
    type: "use-case",
    title: "Use Case Evaluation Complete",
    description: "Cloud Storage Use Case - 78% compliant",
    timestamp: "2025-06-12T08:15:00Z",
    severity: "medium",
  },
  {
    id: "act3",
    type: "policy",
    title: "Policy Updated",
    description: "Data Retention Policy updated to reflect new regulations",
    timestamp: "2025-06-11T16:45:00Z",
  },
  {
    id: "act4",
    type: "gap",
    title: "Gap Resolved",
    description: "Missing control in Security Policy addressed",
    timestamp: "2025-06-11T14:20:00Z",
  },
  {
    id: "act5",
    type: "system",
    title: "System Update",
    description: "GRC Assistant updated to version 2.3.0",
    timestamp: "2025-06-11T10:00:00Z",
  },
]

export const smartSuggestions: Suggestion[] = [
  {
    id: "sug1",
    title: "Update Data Privacy Policy",
    description: "Add missing controls for data subject access requests to comply with GDPR",
    priority: "critical",
  },
  {
    id: "sug2",
    title: "Review Cloud Storage Use Case",
    description: "Address non-compliance issues with data encryption requirements",
    priority: "high",
  },
  {
    id: "sug3",
    title: "Schedule Policy Review",
    description: "Security Policy is due for quarterly review by next week",
    priority: "medium",
  },
]

export const complianceByCategory: ComplianceByCategory[] = [
  { category: "Data Privacy", score: 85, total: 100, percentage: 85 },
  { category: "Security", score: 92, total: 100, percentage: 92 },
  { category: "Risk Management", score: 70, total: 100, percentage: 70 },
  { category: "Operational", score: 65, total: 100, percentage: 65 },
  { category: "Regulatory", score: 78, total: 100, percentage: 78 },
]

export const policies: Policy[] = [
  {
    id: "pol1",
    name: "Data Privacy Policy",
    description: "Guidelines for handling personal data and ensuring privacy",
    lastUpdated: "2025-05-15",
    status: "active",
  },
  {
    id: "pol2",
    name: "Information Security Policy",
    description: "Standards for securing information assets",
    lastUpdated: "2025-04-22",
    status: "active",
  },
  {
    id: "pol3",
    name: "Risk Management Policy",
    description: "Framework for identifying and mitigating risks",
    lastUpdated: "2025-03-10",
    status: "active",
  },
  {
    id: "pol4",
    name: "Data Retention Policy",
    description: "Guidelines for retaining and disposing of data",
    lastUpdated: "2025-06-01",
    status: "draft",
  },
]

export const standards: Standard[] = [
  {
    id: "std1",
    name: "ISO 27001",
    description: "Information security management",
    version: "2022",
  },
  {
    id: "std2",
    name: "GDPR",
    description: "General Data Protection Regulation",
    version: "2018",
  },
  {
    id: "std3",
    name: "NIST Cybersecurity Framework",
    description: "Framework for improving cybersecurity",
    version: "2.0",
  },
  {
    id: "std4",
    name: "SOC 2",
    description: "Service Organization Control 2",
    version: "2017",
  },
]

export const gaps: Gap[] = [
  {
    id: "gap1",
    policyId: "pol1",
    policyName: "Data Privacy Policy",
    standardId: "std2",
    standardName: "GDPR",
    control: "Article 17 - Right to erasure",
    description: "Policy does not address the right to erasure (right to be forgotten)",
    severity: "critical",
    suggestedFix: "Add section detailing process for handling data erasure requests",
  },
  {
    id: "gap2",
    policyId: "pol2",
    policyName: "Information Security Policy",
    standardId: "std1",
    standardName: "ISO 27001",
    control: "A.8.2 - Information classification",
    description: "Missing guidelines for information classification",
    severity: "high",
    suggestedFix: "Add classification scheme and handling procedures for different information types",
  },
  {
    id: "gap3",
    policyId: "pol3",
    policyName: "Risk Management Policy",
    standardId: "std3",
    standardName: "NIST Cybersecurity Framework",
    control: "ID.RA-5: Threats, vulnerabilities, likelihoods, and impacts are used to determine risk",
    description: "Risk assessment methodology does not include impact analysis",
    severity: "medium",
    suggestedFix: "Enhance risk assessment methodology to include impact analysis",
  },
]

export const useCases: UseCase[] = [
  {
    id: "uc1",
    name: "Cloud Storage Implementation",
    description: "Using third-party cloud storage for company documents",
    policies: ["pol1", "pol2"],
    complianceScore: 78,
    issues: [
      {
        policyId: "pol2",
        policyName: "Information Security Policy",
        clause: "Section 4.3 - Data Encryption",
        description: "Cloud storage does not enforce encryption at rest",
        severity: "high",
      },
      {
        policyId: "pol1",
        policyName: "Data Privacy Policy",
        clause: "Section 2.1 - Data Location",
        description: "Cloud provider may store data outside approved jurisdictions",
        severity: "medium",
      },
    ],
  },
  {
    id: "uc2",
    name: "Customer Data Collection Process",
    description: "Process for collecting and storing customer information",
    policies: ["pol1", "pol4"],
    complianceScore: 92,
    issues: [
      {
        policyId: "pol4",
        policyName: "Data Retention Policy",
        clause: "Section 1.2 - Retention Periods",
        description: "Process does not specify retention period for inactive customers",
        severity: "low",
      },
    ],
  },
]
