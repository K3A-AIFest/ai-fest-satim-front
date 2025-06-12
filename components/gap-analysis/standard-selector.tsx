"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { PlayCircle } from "lucide-react"
import type { Standard } from "@/lib/types"

interface StandardSelectorProps {
  standards: Standard[]
}

export default function StandardSelector({ standards }: StandardSelectorProps) {
  const [selectedStandard, setSelectedStandard] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleRunAnalysis = () => {
    if (!selectedStandard) return

    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
      // Navigate to results tab or show results
      window.location.hash = "results"
    }, 2000)
  }

  return (
    <div className="space-y-4">
      <RadioGroup value={selectedStandard || ""} onValueChange={setSelectedStandard}>
        {standards.map((standard) => (
          <div key={standard.id} className="flex items-start space-x-3 rounded-md border p-3">
            <RadioGroupItem value={standard.id} id={standard.id} />
            <div className="space-y-1">
              <Label
                htmlFor={standard.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {standard.name}
              </Label>
              <p className="text-xs text-muted-foreground">{standard.description}</p>
              <p className="text-xs text-muted-foreground">Version: {standard.version}</p>
            </div>
          </div>
        ))}
      </RadioGroup>

      <Button onClick={handleRunAnalysis} disabled={!selectedStandard || isAnalyzing} className="w-full">
        <PlayCircle className="mr-2 h-4 w-4" />
        {isAnalyzing ? "Analyzing..." : "Run Gap Analysis"}
      </Button>
    </div>
  )
}
