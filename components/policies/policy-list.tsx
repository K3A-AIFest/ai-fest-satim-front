"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, MoreHorizontal, Archive, Copy, Trash2 } from "lucide-react"
import type { Policy } from "@/lib/types"
import { cn } from "@/lib/utils"

interface PolicyListProps {
  policies: Policy[]
}

export default function PolicyList({ policies }: PolicyListProps) {
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null)

  const getStatusColor = (status: Policy["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-500 text-white"
      case "draft":
        return "bg-yellow-500 text-white"
      case "archived":
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div>
      {policies.length === 0 ? (
        <p className="text-sm text-muted-foreground">No policies found.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {policies.map((policy) => (
              <TableRow
                key={policy.id}
                className={cn("cursor-pointer", selectedPolicy === policy.id && "bg-muted")}
                onClick={() => setSelectedPolicy(policy.id)}
              >
                <TableCell>
                  <div>
                    <div className="font-medium">{policy.name}</div>
                    <div className="text-sm text-muted-foreground">{policy.description}</div>
                  </div>
                </TableCell>
                <TableCell>{policy.lastUpdated}</TableCell>
                <TableCell>
                  <Badge className={cn("font-normal", getStatusColor(policy.status))}>{policy.status}</Badge>
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
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Archive className="mr-2 h-4 w-4" />
                        Archive
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
