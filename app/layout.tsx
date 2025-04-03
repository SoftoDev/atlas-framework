import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeScript } from "@/components/theme-script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ATLAS | AI Tiered Levels for Agile Software",
  description:
    "A structured approach for determining the optimal level of AI assistance for software development projects",
  openGraph: {
    title: "ATLAS | AI Tiered Levels for Agile Software",
    description:
      "A structured approach for determining the optimal level of AI assistance for software development projects",
    images: [
      {
        url: "/images/atlas-framework-og.png",
        width: 1200,
        height: 630,
        alt: "ATLAS - AI Tiered Levels for Agile Software",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATLAS | AI Tiered Levels for Agile Software",
    description:
      "A structured approach for determining the optimal level of AI assistance for software development projects",
    images: ["/images/atlas-framework-og.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider defaultTheme="system">
          <SidebarProvider>
            <AppSidebar />
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <SidebarTrigger className="ml-3 mt-3" />
            <main className="flex-1 overflow-auto p-8 pt-16 bg-background text-foreground">{children}</main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'