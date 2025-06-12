"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlayCircle, Upload } from "lucide-react"

export default function UseCaseForm() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !description) return

    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Navigate to results tab or show results
      window.location.hash = "results"
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Use Case Name</Label>
        <Input
          id="name"
          placeholder="e.g., Cloud Storage Implementation"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Describe the use case in detail..."
          className="min-h-[120px]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" type="button" className="flex-1">
          <Upload className="mr-2 h-4 w-4" />
          Upload Document
        </Button>
        <Button type="submit" disabled={isSubmitting || !name || !description} className="flex-1">
          <PlayCircle className="mr-2 h-4 w-4" />
          {isSubmitting ? "Evaluating..." : "Evaluate"}
        </Button>
      </div>
    </form>
  )
}
