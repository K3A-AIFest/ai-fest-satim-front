import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PolicyList from "@/components/policies/policy-list"
import PolicyEditor from "@/components/policies/policy-editor"
import { policies } from "@/lib/mock-data"
import { Plus } from "lucide-react"

export default function PoliciesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Policies</h1>
          <p className="text-muted-foreground">
            Manage your organization's internal policies and compliance documents.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Policy
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Policies</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Policies</CardTitle>
              <CardDescription>View and manage all your organization's policies</CardDescription>
            </CardHeader>
            <CardContent>
              <PolicyList policies={policies} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Active Policies</CardTitle>
              <CardDescription>Currently active and enforced policies</CardDescription>
            </CardHeader>
            <CardContent>
              <PolicyList policies={policies.filter((p) => p.status === "active")} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="draft">
          <Card>
            <CardHeader>
              <CardTitle>Draft Policies</CardTitle>
              <CardDescription>Policies in draft status, not yet active</CardDescription>
            </CardHeader>
            <CardContent>
              <PolicyList policies={policies.filter((p) => p.status === "draft")} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="archived">
          <Card>
            <CardHeader>
              <CardTitle>Archived Policies</CardTitle>
              <CardDescription>Historical policies no longer in effect</CardDescription>
            </CardHeader>
            <CardContent>
              <PolicyList policies={policies.filter((p) => p.status === "archived")} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Policy Editor</CardTitle>
          <CardDescription>Create or edit policy content</CardDescription>
        </CardHeader>
        <CardContent>
          <PolicyEditor />
        </CardContent>
      </Card>
    </div>
  )
}
