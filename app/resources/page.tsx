import type { Metadata } from "next"
import ResourcesPage from "./resources-page"

export const metadata: Metadata = {
  title: "Resources | ATLAS Framework",
  description: "Helpful resources, tools, and references for implementing the ATLAS Framework",
}

export default function Resources() {
  return <ResourcesPage />
}

