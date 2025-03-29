"use client"

import { useEffect } from "react"

export function ThemeScript() {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "system"

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      document.documentElement.classList.add(systemTheme)
    } else {
      document.documentElement.classList.add(theme)
    }
  }, [])

  return null
}

