import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Check if dark logo already exists
    const darkLogoPath = path.join(process.cwd(), "public/images/atlas-framework-logo-dark.png")

    if (!fs.existsSync(darkLogoPath)) {
      // If it doesn't exist, copy the light logo as a placeholder
      const lightLogoPath = path.join(process.cwd(), "public/images/atlas-framework-logo.png")

      if (fs.existsSync(lightLogoPath)) {
        fs.copyFileSync(lightLogoPath, darkLogoPath)
        return NextResponse.json({ success: true, message: "Dark logo created as a copy of light logo" })
      } else {
        return NextResponse.json({ success: false, message: "Light logo not found" }, { status: 404 })
      }
    }

    return NextResponse.json({ success: true, message: "Dark logo already exists" })
  } catch (error) {
    console.error("Error creating dark logo:", error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}

