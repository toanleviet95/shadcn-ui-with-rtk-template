import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { AppSidebar } from "@/components/blocks/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Breadcrumb from "@/components/blocks/breadcrumb"
import Unauthenticated from "@/pages/unauthenticated"

import { Outlet } from "react-router"

export default function LayoutWithSidebar() {
  return (
    <>
      <AuthenticatedTemplate>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb />
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <Outlet />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Unauthenticated />
      </UnauthenticatedTemplate>
    </>
    
  )
}
