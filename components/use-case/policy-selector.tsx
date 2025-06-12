"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import type { Policy } from "@/lib/types"

interface PolicySelectorProps {
  policies: Policy[]
}

export default function PolicySelector({ policies }: PolicySelectorProps) {
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([])

  const handlePolicyChange = (policyId: string, checked: boolean) => {
    if (checked) {
      setSelectedPolicies([...selectedPolicies, policyId])
    } else {
      setSelectedPolicies(selectedPolicies.filter((id) => id !== policyId))
    }
  }

  return (
    <div className="space-y-4">
      {policies.map((policy) => (
        <div key={policy.id} className="flex items-start space-x-3 rounded-md border p-3">
          <Checkbox
            id={`policy-${policy.id}`}
            checked={selectedPolicies.includes(policy.id)}
            onCheckedChange={(checked) => handlePolicyChange(policy.id, checked === true)}
          />
          <div className="space-y-1">
            <Label
              htmlFor={`policy-${policy.id}`}
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
  )
}
