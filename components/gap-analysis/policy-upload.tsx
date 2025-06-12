"use client"

import { useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import type { Policy } from "@/lib/types"

interface PolicyUploadProps {
  policies: Policy[]
}

export default function PolicyUpload({ policies }: PolicyUploadProps) {
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false)

  const handlePolicyChange = (policyId: string, checked: boolean) => {
    if (checked) {
      setSelectedPolicies([...selectedPolicies, policyId])
    } else {
      setSelectedPolicies(selectedPolicies.filter((id) => id !== policyId))
    }
  }

  const handleUpload = () => {
    setIsUploading(true)
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
    }, 1500)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {policies.map((policy) => (
          <div key={policy.id} className="flex items-start space-x-3 rounded-md border p-3">
            <Checkbox
              id={policy.id}
              checked={selectedPolicies.includes(policy.id)}
              onCheckedChange={(checked) => handlePolicyChange(policy.id, checked === true)}
            />
            <div className="space-y-1">
              <Label
                htmlFor={policy.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {policy.name}
              </Label>
              <p className="text-xs text-muted-foreground">{policy.description}</p>
              <p className="text-xs text-muted-foreground">Last updated: {policy.lastUpdated}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" className="w-full">
          <Upload className="mr-2 h-4 w-4" />
          Upload New Policy
        </Button>
      </div>
    </div>
  )
}
