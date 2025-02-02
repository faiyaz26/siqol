"use client"

import { ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { ResizablePanelGroup } from "@/components/ui/resizable"

export function Explorer() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel 
        defaultSize={100}
        minSize={40}
        maxSize={100}
        className="bg-muted"
      >
        <div className="h-full p-4">
          <h2 className="font-semibold mb-4">Explorer</h2>
          {/* Explorer content will go here */}
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={80}>
        <div className="h-full p-4">
          <h2 className="font-semibold mb-4">Main Content</h2>
          {/* Main content will go here */}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
