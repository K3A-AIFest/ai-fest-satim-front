import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import UseCaseForm from "@/components/use-case/use-case-form"
import PolicySelector from "@/components/use-case/policy-selector"
import ComplianceResults from "@/components/use-case/compliance-results"
import { policies, useCases } from "@/lib/mock-data"

export default function UseCaseEvaluationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Use Case Evaluation</h1>
        <p className="text-muted-foreground">
          Evaluate business use cases against your internal policies to ensure compliance.
        </p>
      </div>

      <Tabs defaultValue="evaluate" className="space-y-4">
        <TabsList>
          <TabsTrigger value="evaluate">Evaluate Use Case</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="evaluate" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Use Case Details</CardTitle>
                <CardDescription>Describe the use case you want to evaluate</CardDescription>
              </CardHeader>
              <CardContent>
                <UseCaseForm />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select Relevant Policies</CardTitle>
                <CardDescription>Choose the policies to evaluate against</CardDescription>
              </CardHeader>
              <CardContent>
                <PolicySelector policies={policies} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="results">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Results</CardTitle>
              <CardDescription>Evaluation results for your use case</CardDescription>
            </CardHeader>
            <CardContent>
              <ComplianceResults useCase={useCases[0]} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Evaluation History</CardTitle>
              <CardDescription>Previous use case evaluations and their results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {useCases.map((useCase) => (
                  <div key={useCase.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">{useCase.name}</h3>
                      <p className="text-sm text-muted-foreground">{useCase.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{useCase.complianceScore}% Compliant</div>
                      <p className="text-xs text-muted-foreground">{useCase.issues.length} issues found</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
