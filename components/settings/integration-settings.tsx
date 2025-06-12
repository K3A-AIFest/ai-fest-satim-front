"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Save, Plus } from "lucide-react"

const integrations = [
  {
    id: "jira",
    name: "Jira",
    description: "Connect to Jira for issue tracking",
    connected: true,
  },
  {
    id: "slack",
    name: "Slack",
    description: "Send notifications to Slack channels",
    connected: true,
  },
  {
    id: "github",
    name: "GitHub",
    description: "Connect to GitHub repositories",
    connected: false,
  },
  {
    id: "azure",
    name: "Azure DevOps",
    description: "Integrate with Azure DevOps pipelines",
    connected: false,
  },
]

export default function IntegrationSettings() {
  const [apiKey, setApiKey] = useState("")
  const [connectedIntegrations, setConnectedIntegrations] = useState(
    integrations.reduce(
      (acc, integration) => {
        acc[integration.id] = integration.connected
        return acc
      },
      {} as Record<string, boolean>,
    ),
  )

  const handleToggleIntegration = (id: string, enabled: boolean) => {
    setConnectedIntegrations({
      ...connectedIntegrations,
      [id]: enabled,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="api-key">API Key</Label>
        <div className="flex space-x-2">
          <Input
            id="api-key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            type="password"
            placeholder="Enter your API key"
          />
          <Button>Generate New Key</Button>
        </div>
        <p className="text-sm text-muted-foreground">This API key is used for external integrations and API access.</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Available Integrations</h3>
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Integration
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {integrations.map((integration) => (
            <Card key={integration.id}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium">{integration.name}</h4>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </div>
                <Switch
                  checked={connectedIntegrations[integration.id]}
                  onCheckedChange={(enabled) => handleToggleIntegration(integration.id, enabled)}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Integrations
        </Button>
      </div>
    </div>
  )
}
