import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Suggestion } from "@/lib/types"
import { AlertCircle, AlertTriangle, AlertOctagon, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SmartSuggestionsProps {
  suggestions: Suggestion[]
}

export default function SmartSuggestions({ suggestions }: SmartSuggestionsProps) {
  const getPriorityIcon = (priority: Suggestion["priority"]) => {
    switch (priority) {
      case "critical":
        return <AlertOctagon className="h-4 w-4" />
      case "high":
        return <AlertTriangle className="h-4 w-4" />
      case "medium":
        return <AlertCircle className="h-4 w-4" />
      case "low":
        return <Info className="h-4 w-4" />
    }
  }

  const getPriorityColor = (priority: Suggestion["priority"]) => {
    switch (priority) {
      case "critical":
        return "text-destructive"
      case "high":
        return "text-orange-500"
      case "medium":
        return "text-yellow-500"
      case "low":
        return "text-green-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Smart Suggestions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="p-3 border rounded-md">
            <div className="flex items-start gap-3">
              <div className={cn("mt-0.5", getPriorityColor(suggestion.priority))}>
                {getPriorityIcon(suggestion.priority)}
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm font-medium leading-none">{suggestion.title}</p>
                <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                <div className="flex justify-end mt-2">
                  <Button variant="outline" size="sm">
                    Take Action
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
