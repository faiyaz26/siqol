"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import { SqlEditor } from "./SqlEditor"
import { DataGrid } from "./DataGrid"

export function MainContent() {
  return (
    <div className="flex-1 h-[calc(100vh-2.5rem)] overflow-hidden">
      <Tabs defaultValue="query" className="h-full">
        <div className="flex h-10 items-center justify-between border-b px-4 bg-background">
          <TabsList className="h-8">
            <TabsTrigger value="query">Query-1</TabsTrigger>
          </TabsList>
        </div>

        <div className="h-[calc(100%-2.5rem)]">
          <TabsContent value="query" className="h-full p-0 m-0 bg-background">
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={40} minSize={20}>
                <SqlEditor />
              </ResizablePanel>
              
              <ResizableHandle withHandle />
              
              <ResizablePanel defaultSize={60} minSize={20}>
                <DataGrid />
              </ResizablePanel>
            </ResizablePanelGroup>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}