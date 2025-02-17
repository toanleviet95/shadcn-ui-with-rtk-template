"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import SideBarConfig from "@/routes/sidebar-config"

// This is sample data.
const user = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};

// This is sample data.
const products = [
  {
    name: "FED",
    logo: GalleryVerticalEnd,
    plan: "Internal Management",
  },
  {
    name: "Athena",
    logo: AudioWaveform,
    plan: "Internal Management",
  },
  {
    name: "Rica",
    logo: Command,
    plan: "Internal Management",
  },
];

const data = {
  user, 
  products,
  sideBarConfig: SideBarConfig
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.products} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.sideBarConfig} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
