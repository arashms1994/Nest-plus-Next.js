import { AppSidebar } from "@/components/ui/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import QueryProvider from "@/providers/QueryProvider";
import Link from "next/link";
import React from "react";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <QueryProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4 justify-start border-b-2 border-gray-800 w-full pb-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Link href="/">
                <h1 className="text-lg font-medium text-gray-700 mr-1">
                  +Nest
                </h1>
              </Link>
            </div>
          </header>
          <div>{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </QueryProvider>
  );
};

export default layout;
