"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, MoreHorizontal, FileText } from "lucide-react"
import type { Gap } from "@/lib/types"
import { cn } from "@/lib/utils"

interface GapResultsTableProps {
  gaps: Gap[]
}

export default function GapResultsTable({ gaps }: GapResultsTableProps) {
  const [expandedGap, setExpandedGap] = useState<string | null>(null)

  const getSeverityColor = (severity: Gap["severity"]) => {
    switch (severity) {
      case "critical":
        return "bg-destructive text-destructive-foreground"
      case "high":
        return "bg-orange-500 text-white"
      case "medium":
        return "bg-yellow-500 text-white"
      case "low":
        return "bg-green-500 text-white"
    }
  }

  const toggleExpand = (gapId: string) => {
    if (expandedGap === gapId) {
      setExpandedGap(null)
    } else {
      setExpandedGap(gapId)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-medium">Found {gaps.length} gaps</h3>
          <p className="text-sm text-muted-foreground">Review and address these gaps to improve compliance</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Policy</TableHead>
            <TableHead>Standard</TableHead>
            <TableHead>Control</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gaps.map((gap) => (
            <>
              <TableRow key={gap.id} className="cursor-pointer" onClick={() => toggleExpand(gap.id)}>
                <TableCell>{gap.policyName}</TableCell>
                <TableCell>{gap.standardName}</TableCell>
                <TableCell>{gap.control}</TableCell>
                <TableCell>
                  <Badge className={cn("font-normal", getSeverityColor(gap.severity))}>{gap.severity}</Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" />
                        View Policy
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" />
                        View Standard
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              {expandedGap === gap.id && (
                <TableRow>
                  <TableCell colSpan={5} className="bg-muted/50">
                    <div className="p-2 space-y-2">
                      <div>
                        <h4 className="text-sm font-medium">Description</h4>
                        <p className="text-sm">{gap.description}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Suggested Fix</h4>
                        <p className="text-sm">{gap.suggestedFix}</p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
