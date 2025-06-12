import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PolicyUpload from "@/components/gap-analysis/policy-upload"
import StandardSelector from "@/components/gap-analysis/standard-selector"
import GapResultsTable from "@/components/gap-analysis/gap-results-table"
import { policies, standards, gaps } from "@/lib/mock-data"

export default function GapAnalysisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gap Analysis</h1>
        <p className="text-muted-foreground">
          Compare your internal policies against regulatory standards to identify compliance gaps.
        </p>
      </div>

      <Tabs defaultValue="run-analysis" className="space-y-4">
        <TabsList>
          <TabsTrigger value="run-analysis">Run Analysis</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="run-analysis" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Select Internal Policies</CardTitle>
                <CardDescription>Choose the internal policies you want to analyze</CardDescription>
              </CardHeader>
              <CardContent>
                <PolicyUpload policies={policies} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select Regulatory Standard</CardTitle>
                <CardDescription>Choose the standard to compare against</CardDescription>
              </CardHeader>
              <CardContent>
                <StandardSelector standards={standards} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="results">
          <Card>
            <CardHeader>
              <CardTitle>Gap Analysis Results</CardTitle>
              <CardDescription>Showing gaps between your policies and selected standards</CardDescription>
            </CardHeader>
            <CardContent>
              <GapResultsTable gaps={gaps} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Analysis History</CardTitle>
              <CardDescription>Previous gap analyses and their results</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No previous analyses found.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
