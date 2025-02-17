"use client"

import { Link } from "react-router"
import { ChevronRight, type LucideIcon } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

function MenuItem({
  data,
}: {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}) {
  if (!data.items || data.items?.length === 0) {
    return (
      <SidebarMenuItem>
        <Link to={data.url}>
          <SidebarMenuButton tooltip={data.title()}>
            {data.icon && <data.icon />}
            <span>{data.title()}</span>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    )
  }
  return (
    <Collapsible
      asChild
      defaultOpen={data.isActive}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={data.title()}>
            {data.icon && <data.icon />}
            <span>{data.title()}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {data.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title()}>
                <SidebarMenuSubButton asChild>
                  <Link to={subItem.url}>
                    <span>{subItem.title()}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}


export function NavMain({
  items,
}: {
  items: {
    title: () => ''
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <MenuItem key={item.title()} data={item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
