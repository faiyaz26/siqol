"use client"

import { FaDatabase } from 'react-icons/fa';
import { ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { ResizablePanelGroup } from "@/components/ui/resizable"
import { WorkspaceBar } from '@/components/WorkspaceBar';
import { Explorer } from '@/components/Explorer';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="flex h-screen">
      <WorkspaceBar />

      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel 
          defaultSize={20} 
          minSize={15}
          maxSize={40}
          className="bg-background"
        >
          <Explorer />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={80}>
          <main className="h-full p-4">
            <h1>Main Content</h1>
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}