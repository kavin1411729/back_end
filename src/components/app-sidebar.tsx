import { Battery, ChevronDown, Home, Inbox, LayoutDashboard, Thermometer, Zap } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Link } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "DashBoard",
    icon: LayoutDashboard,
    subItems: [
      {
        title: "Cell 1",
        icon: Battery,
        dbPath: "battery/voltage/cell1",
        label: "Voltage",
      },
      {
        title: "Cell 2",
        icon: Battery,
        dbPath: "battery/voltage/cell2",
        label: "Voltage",
      },
      {
        title: "Cell 3",
        icon: Battery,
        dbPath: "battery/voltage/cell3",
        label: "Voltage",
      },
      {
        title: "Cell 4",
        icon: Battery,
        dbPath: "battery/voltage/cell4",
        label: "Voltage",
      },
      {
        title: "Temperature",
        icon: Thermometer,
        dbPath: "battery/temperature",
        label: "Temperature",
      },
      {
        title: "Current",
        icon: Zap,
        dbPath: "battery/current",
        label: "Current",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (item.subItems) {
                  return (
                    <Collapsible defaultOpen className="group/collapsible" key={item.title}>
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={item.title}>
                            <item.icon />
                            <span>{item.title}</span>
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems.map((subItem) => {
                              return (
                                <SidebarMenuItem key={subItem.title}>
                                  <SidebarMenuButton asChild>
                                    <Link
                                      to={"/chart"}
                                      state={{ dbPath: subItem.dbPath, title: subItem.title, label: subItem.label }}
                                    >
                                      <subItem.icon />
                                      <span>{subItem.title}</span>
                                    </Link>
                                    {/* <a href={subItem.url}>
                                      <subItem.icon />
                                      <span>{subItem.title}</span>
                                    </a> */}
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              );
                            })}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
