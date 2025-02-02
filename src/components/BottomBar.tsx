"use client"

import { Button } from "@/components/ui/button"
import { Terminal, AlertCircle } from "lucide-react"

export function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background z-50">
      <div className="flex h-10 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Terminal className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">Ready</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">0 Problems</span>
          </div>
        </div>
      </div>
    </div>
  )
}