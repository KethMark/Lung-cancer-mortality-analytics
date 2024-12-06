"use client";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  DashboardIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SidebarOptInForm } from "./sidebar-opt-form";

const navAnalytics = [
  {
    name: "Dashboard",
    href: "/",
    icon: DashboardIcon,
  },
];

const navInformation = [
  {
    name: "Patients",
    href: "/information/patients",
    icon: PersonIcon,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-semibold">Overview</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navAnalytics.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="font-semibold">Information</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navInformation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarOptInForm/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
