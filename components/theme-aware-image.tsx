"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "@/components/theme-provider"

interface ThemeAwareImageProps {
  lightSrc: string
  darkSrc: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function ThemeAwareImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
  priority = false,
}: ThemeAwareImageProps) {
  const { theme } = useTheme()
  const [imgSrc, setImgSrc] = useState(lightSrc)
  const [imgError, setImgError] = useState(false)

  // Determine which image to show based on the current theme
  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" && typeof document !== "undefined" && document.documentElement.classList.contains("dark"))

    // Reset error state when theme changes
    setImgError(false)

    // Set the appropriate image source based on theme
    setImgSrc(isDark ? darkSrc : lightSrc)
  }, [theme, darkSrc, lightSrc])

  // Handle image load error
  const handleError = () => {
    setImgError(true)
    // If dark image fails, fall back to light image
    if (imgSrc === darkSrc) {
      setImgSrc(lightSrc)
    }
  }

  return (
    <Image
      src={imgError && imgSrc === darkSrc ? lightSrc : imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${className}`}
      priority={priority}
      onError={handleError}
    />
  )
}

