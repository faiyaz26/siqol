"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { WorkspaceBar } from "@/components/WorkspaceBar"

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <WorkspaceBar />
        <main className="flex-1">
          <h1>Main Content</h1>
        </main>
      </div>
    </SidebarProvider>
  );
}