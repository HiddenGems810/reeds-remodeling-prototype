"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PaintRoller, LayoutDashboard, Inbox, FileText, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Project Briefs",
    href: "/admin#briefs",
    icon: FileText,
  },
  {
    title: "Inquiries",
    href: "/admin#inquiries",
    icon: Inbox,
  },
  {
    title: "Settings",
    href: "/admin#settings",
    icon: Settings,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#f8f7f4]">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#0f2420] text-white border-r border-[#1a3632]">
        <div className="h-full px-4 py-6 overflow-y-auto">
          <Link href="/" className="flex items-center gap-3 group px-2 mb-10">
            <div className="bg-[#d97706] text-white p-1.5 rounded-lg shadow-sm">
              <PaintRoller className="h-5 w-5" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-display text-sm font-bold tracking-tight leading-none mb-1">
                Reeds Admin
              </span>
              <span className="text-[9px] text-white/50 uppercase font-bold tracking-widest">
                Internal Dashboard
              </span>
            </div>
          </Link>

          <ul className="space-y-2 font-medium">
            {sidebarNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center p-3 rounded-xl transition-colors group",
                      isActive
                        ? "bg-white/10 text-[#d97706]"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <Icon className="w-5 h-5 transition duration-75" />
                    <span className="ml-3 text-sm font-bold tracking-wide">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="absolute bottom-6 left-4 right-4">
            <Link
              href="/"
              className="flex items-center p-3 rounded-xl transition-colors group text-white/50 hover:bg-white/5 hover:text-white"
            >
              <LogOut className="w-5 h-5 transition duration-75" />
              <span className="ml-3 text-sm font-bold tracking-wide">Exit Admin</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="p-8 sm:ml-64 w-full h-screen overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
