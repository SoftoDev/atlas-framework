"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Github } from "lucide-react"
import { ThemeAwareImage } from "@/components/theme-aware-image"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const navItems = [
  { title: "Introduction", url: "/" },
  { title: "AI Assistance Levels", url: "/levels" },
  { title: "Decision Matrix", url: "/decision-matrix" },
  { title: "Implementation Strategy", url: "/implementation-strategy" },
  { title: "Resources", url: "/resources" },
]

export default function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="bg-white border-r dark:bg-[#0A1A1B]">
      <SidebarHeader className="pb-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="w-full p-2">
              <Link href="/" className="w-full flex justify-center">
                <div className="w-full h-36 flex items-center justify-center py-4 min-h-[144px]">
                  <ThemeAwareImage
                    lightSrc="/images/atlas-framework-logo.png"
                    darkSrc="/images/atlas-framework-logo.png" // Use the same image for both modes for now
                    alt="Atlas Framework Logo"
                    width={300}
                    height={225}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="text-gray-700 hover:bg-gray-100 hover:text-primary data-[active=true]:bg-gray-100 data-[active=true]:text-primary dark:text-gray-400 dark:hover:bg-[#1A2A2C] dark:hover:text-[#D5FF6F] dark:data-[active=true]:bg-[#1A2A2C] dark:data-[active=true]:text-[#D5FF6F]"
                  >
                    <Link href={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 pb-6 flex flex-col items-start gap-5">
        <a
          href="https://atlas-framework.com/levels/#level7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://img.shields.io/badge/ATLAS_Framework-Level_7-B1FBD5"
            alt="ATLAS Framework - Level 7"
            className="h-5"
          />
        </a>
        <div className="text-xs text-gray-600 text-left dark:text-gray-300">
          This website was developed using Level 7 of the ATLAS Framework.
          <br />
          <br />
          The ATLAS Framework was created and proposed by the guys at{" "}
          <a
            href="https://sof.to"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline dark:text-emerald-300"
          >
            Softo
          </a>
          , with ❤️
        </div>
        <div className="flex justify-between items-center w-full mt-2 mb-3">
          <a
            href="https://sof.to"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-16 hover:opacity-80 transition-opacity"
          >
            <Image src="/images/softo-logo.png" alt="Softo Logo" width={120} height={40} className="w-full h-auto" />
          </a>

          <a
            href="https://github.com/SoftoDev/atlas-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-white"
          >
            <Github size={20} />
          </a>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

