"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Save } from "lucide-react"

const notificationTypes = [
  {
    id: "gap-detected",
    name: "Gap Detected",
    description: "When a new compliance gap is detected",
    email: true,
    inApp: true,
    slack: false,
  },
  {
    id: "use-case-evaluated",
    name: "Use Case Evaluated",
    description: "When a use case evaluation is completed",
    email: true,
    inApp: true,
    slack: true,
  },
  {
    id: "policy-updated",
    name: "Policy Updated",
    description: "When a policy is created or updated",
    email: false,
    inApp: true,
    slack: false,
  },
  {
    id: "critical-alert",
    name: "Critical Alert",
    description: "Critical compliance issues requiring immediate attention",
    email: true,
    inApp: true,
    slack: true,
  },
]

export default function NotificationSettings() {
  const [email, setEmail] = useState("admin@acmecorp.com")
  const [notifications, setNotifications] = useState(
    notificationTypes.reduce(
      (acc, type) => {
        acc[type.id] = {
          email: type.email,
          inApp: type.inApp,
          slack: type.slack,
        }
        return acc
      },
      {} as Record<string, { email: boolean; inApp: boolean; slack: boolean }>,
    ),
  )

  const handleToggleNotification = (id: string, channel: "email" | "inApp" | "slack", enabled: boolean) => {
    setNotifications({
      ...notifications,
      [id]: {
        ...notifications[id],
        [channel]: enabled,
      },
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Notification Email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Notification Preferences</h3>

        <div className="border rounded-md">
          <div className="grid grid-cols-4 gap-4 p-4 border-b bg-muted/50">
            <div>Event</div>
            <div className="text-center">Email</div>
            <div className="text-center">In-App</div>
            <div className="text-center">Slack</div>
          </div>

          {notificationTypes.map((type) => (
            <div key={type.id} className="grid grid-cols-4 gap-4 p-4 border-b last:border-0 items-center">
              <div>
                <div className="font-medium">{type.name}</div>
                <div className="text-sm text-muted-foreground">{type.description}</div>
              </div>
              <div className="flex justify-center">
                <Switch
                  checked={notifications[type.id].email}
                  onCheckedChange={(enabled) => handleToggleNotification(type.id, "email", enabled)}
                />
              </div>
              <div className="flex justify-center">
                <Switch
                  checked={notifications[type.id].inApp}
                  onCheckedChange={(enabled) => handleToggleNotification(type.id, "inApp", enabled)}
                />
              </div>
              <div className="flex justify-center">
                <Switch
                  checked={notifications[type.id].slack}
                  onCheckedChange={(enabled) => handleToggleNotification(type.id, "slack", enabled)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Notification Settings
        </Button>
      </div>
    </div>
  )
}
