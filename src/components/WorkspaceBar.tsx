"use client"

import { Sidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { 
  LayoutDashboard, 
  Database, 
  FileText, 
  Settings,
  Plus
} from "lucide-react"
import { cn } from "@/lib/utils"

export function WorkspaceBar() {
  const workspaceItems = [
    { icon: <Plus size={20} />, label: "New Connection" },
    { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { icon: <Database size={20} />, label: "Databases" },
    { icon: <FileText size={20} />, label: "Queries" },
    { icon: <Settings size={20} />, label: "Settings" },
  ]

  return (
    <Sidebar collapsible="none" className="w-12 !min-w-12">
      <div className="flex h-full w-full flex-col gap-4">
        <div className="flex flex-col gap-2 px-2">
          {workspaceItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8",
                index === 0 && "mb-4"
              )}
            >
              {item.icon}
            </Button>
          ))}
        </div>
        <div className="mt-auto px-2 pb-4">
          <ThemeToggle />
        </div>
      </div>
    </Sidebar>
  )
}