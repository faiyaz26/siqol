"use client"

import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function Copilot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-50 top-1/2 -translate-y-1/2 ${
          isOpen ? "right-[300px]" : "right-0"
        }`}
      >
        {isOpen ? <ChevronRight /> : <ChevronLeft />}
      </Button>

      <div className={`fixed right-0 top-0 h-full transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel 
            defaultSize={100}
            minSize={20}
            maxSize={40}
            className="w-[300px] border-l bg-background"
          >
            <div className="h-full">
              <div className="flex items-center px-4 py-2 border-b">
                <h2 className="font-semibold">Copilot</h2>
              </div>
              <div className="p-4">
                {/* Copilot content will go here */}
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}