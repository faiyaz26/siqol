"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { WorkspaceBar } from "@/components/WorkspaceBar"
import { CentralPanel } from "@/components/CentralPanel"
import { Copilot } from "@/components/Copilot"
import { BottomBar } from "@/components/BottomBar"
import { MainContent } from "@/components/MainContent"

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex h-screen pb-10 mainContent">
        <WorkspaceBar />
        <div className="flex-1 flex">
          <CentralPanel />
        </div>
        <Copilot />
        <BottomBar />
      </div>
    </SidebarProvider>
  );
}