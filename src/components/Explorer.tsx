"use client"

import { Tree, type TreeDataItem } from "@/components/ui/tree"
import { Table2, Database, Key, Columns } from "lucide-react"

const data: TreeDataItem[] = [
  {
    id: "tables",
    name: "Tables",
    icon: <Database className="h-4 w-4" />,
    children: [
      {
        id: "users",
        name: "users",
        icon: <Table2 className="h-4 w-4" />,
        children: [
          {
            id: "users-columns",
            name: "Columns",
            icon: <Columns className="h-4 w-4" />,
            children: [
              { id: "id", name: "id (int)" },
              { id: "name", name: "name (varchar)" },
              { id: "email", name: "email (varchar)" }
            ]
          },
          {
            id: "users-indexes",
            name: "Indexes",
            icon: <Key className="h-4 w-4" />,
            children: [
              { id: "pk_users", name: "PRIMARY (id)" },
              { id: "idx_email", name: "idx_email (email)" }
            ]
          }
        ]
      }
    ]
  }
]

export function Explorer() {
  const handleSelectChange = (item: TreeDataItem) => {
    console.log("Selected:", item.name)
  }

  return (
    <div className="h-full p-4">
      <div className="pb-4 border-b">
        <h2 className="font-semibold text-foreground">Entities</h2>
      </div>
      <div className="pt-4">
        <Tree 
          data={data}
          onSelectChange={handleSelectChange}
        />
      </div>
    </div>
  )
}