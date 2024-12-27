import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-screen min-h-screen">
        <SidebarTrigger />
        <div className="m-5">{<Outlet />}</div>
        <ModeToggle />
      </main>
    </SidebarProvider>
  );
}
