"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { WorkspaceBar } from "@/components/WorkspaceBar"
import { Explorer } from "@/components/Explorer"
import { Copilot } from "@/components/Copilot"

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <WorkspaceBar />
        <Explorer />
        <Copilot />
      </div>
    </SidebarProvider>
  );
}