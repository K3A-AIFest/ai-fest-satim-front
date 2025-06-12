"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, X } from "lucide-react"

export default function PolicyEditor() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [status, setStatus] = useState("draft")
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    if (!name || !description || !content) return

    setIsSaving(true)
    // Simulate saving
    setTimeout(() => {
      setIsSaving(false)
      // Show success message or redirect
    }, 1500)
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Policy Name</Label>
          <Input
            id="name"
            placeholder="e.g., Data Privacy Policy"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Brief description of the policy..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Policy Content</Label>
        <Textarea
          id="content"
          placeholder="Enter the full policy content here..."
          className="min-h-[300px]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline">
          <X className="mr-2 h-4 w-4" />
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={isSaving || !name || !description || !content}>
          <Save className="mr-2 h-4 w-4" />
          {isSaving ? "Saving..." : "Save Policy"}
        </Button>
      </div>
    </div>
  )
}
