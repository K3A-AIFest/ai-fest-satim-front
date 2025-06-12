"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, UserPlus, Edit, UserX } from "lucide-react"

const users = [
  {
    id: "user1",
    name: "John Doe",
    email: "john.doe@acmecorp.com",
    role: "Admin",
    status: "active",
  },
  {
    id: "user2",
    name: "Jane Smith",
    email: "jane.smith@acmecorp.com",
    role: "Compliance Manager",
    status: "active",
  },
  {
    id: "user3",
    name: "Bob Johnson",
    email: "bob.johnson@acmecorp.com",
    role: "Analyst",
    status: "active",
  },
  {
    id: "user4",
    name: "Alice Williams",
    email: "alice.williams@acmecorp.com",
    role: "Viewer",
    status: "inactive",
  },
]

export default function UserManagement() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null)

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-purple-500 text-white"
      case "Compliance Manager":
        return "bg-blue-500 text-white"
      case "Analyst":
        return "bg-green-500 text-white"
      case "Viewer":
        return "bg-gray-500 text-white"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500 text-white"
      case "inactive":
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} onClick={() => setSelectedUser(user.id)}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
              </TableCell>
              <TableCell>
                <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
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
                      Edit User
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <UserX className="mr-2 h-4 w-4" />
                      Deactivate User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
