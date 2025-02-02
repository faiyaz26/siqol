"use client"

import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import { MainContent } from "./MainContent"
import { Explorer } from "./Explorer"

export function CentralPanel() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel 
        defaultSize={20}
        minSize={20}
        maxSize={30}
        className="bg-muted"
      >
        <Explorer />
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={80}>
        <MainContent />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
