"use client";

import * as React from "react";
import { NavUser } from "@/components/ui/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { USER_SIDEBAR_ITEMS } from "@/constants";
import Link from "next/link";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar side="right" collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        {USER_SIDEBAR_ITEMS.map((item) => (
            <SidebarMenuButton asChild className="my-1">
              <Link href={item.href} className="font-medium">
                {item.Icon && <item.Icon />}
                <span>{item.text}</span>
              </Link>
            </SidebarMenuButton>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
