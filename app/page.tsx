import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ATLAS Framework | AI Tiered Levels for Agile Software",
  description:
    "A structured approach for determining the optimal level of AI assistance for software development projects",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">ATLAS Framework</h1>
      <p className="mb-4 text-xl">
        <strong>ATLAS - AI Tiered Levels for Agile Software</strong> - A structured approach for software development teams to
        determine the optimal level of AI assistance for their projects.
      </p>

      <p className="mb-4">
        By evaluating specific project characteristics against defined criteria, teams can select the most appropriate
        development approach along the spectrum from traditional coding to AI-driven development.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Framework Overview</h2>
      <p className="mb-4">
        The ATLAS Framework defines 8 levels of AI integration in software development, ranging from fully manual coding
        to complete application generation from natural language prompts.
      </p>

      <div className="my-8 flex justify-center">
        <Link href="/levels">
          <Image
            src="/images/atlas-framework-levels-infographic.png"
            alt="ATLAS Framework Levels Infographic"
            width={800}
            height={600}
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            priority
          />
        </Link>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Key Framework Components</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>
          <strong>AI Assistance Levels</strong> - Detailed descriptions of each level with selection criteria
        </li>
        <li>
          <strong>Decision Matrix</strong> - Factors to consider when selecting the appropriate level
        </li>
        <li>
          <strong>Implementation Strategy</strong> - A phased approach to adopting AI assistance
        </li>
        <li>
          <strong>Productivity vs. Control Tradeoffs</strong> - Understanding the balance between speed and oversight
        </li>
        <li>
          <strong>Migration Considerations</strong> - Guidelines for moving between different levels
        </li>
      </ul>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Getting Started</h2>
      <p className="mb-4">
        To get started with the ATLAS Framework, navigate through the sections using the sidebar on the left. Begin by
        understanding the different AI Assistance Levels, then explore the Decision Matrix to help determine which level
        is most appropriate for your project.
      </p>

      <div className="mt-8 rounded-lg bg-[#1A3234]/10 p-6">
        <h3 className="mb-3 text-xl font-semibold text-[#1A3234]">Why Use ATLAS?</h3>
        <p className="mb-2">
          The optimal level of AI assistance varies by project, team, and organizational context. This framework
          provides a structured approach to making this decision, helping teams:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Make informed decisions about AI integration</li>
          <li>Balance productivity gains with control requirements</li>
          <li>Adapt their approach as project needs evolve</li>
          <li>Implement AI assistance in a strategic, phased manner</li>
        </ul>
      </div>
    </main>
  )
}

