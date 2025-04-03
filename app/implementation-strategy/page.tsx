import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ATLAS | Implementation Strategy",
  description: "A phased approach to implementing AI assistance in your software development process",
}

export default function ImplementationStrategy() {
  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Implementation Strategy</h1>
      <p className="text-xl mb-6">
        Adopting any AI level requires careful planning. This phased strategy guides how to define the most suitable
        level, select tools, train the team, and continuously optimize the process.
      </p>

      <div className="relative mb-12 pl-4">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1A3234] rounded"></div>

        <h2 className="text-2xl font-semibold mb-4">Phase 1: Assessment</h2>
        <div className="mb-8 pl-4">
          <ol className="list-decimal list-inside space-y-2">
            <li>Evaluate project requirements against the decision matrix</li>
            <li>Assess team capabilities and familiarity with AI tools</li>
            <li>Determine project constraints (time, budget, resources)</li>
            <li>Consider regulatory and compliance factors</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Phase 2: Tool Selection</h2>
        <div className="mb-8 pl-4">
          <ol className="list-decimal list-inside space-y-2">
            <li>Research available AI tools matching the selected level</li>
            <li>Evaluate costs, learning curves, and integration capabilities</li>
            <li>Test tools with sample project requirements</li>
            <li>Prepare necessary infrastructure and access</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Phase 3: Adoption and Training</h2>
        <div className="mb-8 pl-4">
          <ol className="list-decimal list-inside space-y-2">
            <li>Establish guidelines for AI tool usage within the team</li>
            <li>Develop verification procedures for AI-generated code</li>
            <li>Create training materials and conduct workshops</li>
            <li>Start with smaller, less critical components</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Phase 4: Monitoring and Optimization</h2>
        <div className="mb-8 pl-4">
          <ol className="list-decimal list-inside space-y-2">
            <li>Track productivity metrics and quality indicators</li>
            <li>Gather feedback on AI tool effectiveness</li>
            <li>Adjust usage patterns based on outcomes</li>
            <li>Consider moving up or down levels based on results</li>
          </ol>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Use Case Examples</h2>
      <p className="mb-4">
        To illustrate how the framework works in practice, here are a few scenarios in which different AI levels are
        chosen based on each project's specific needs.
      </p>

      <div className="grid grid-cols-1 gap-6 mb-8">
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-[#1A3234] p-4">
            <h3 className="text-xl font-semibold text-white">Enterprise Financial System</h3>
          </div>
          <div className="p-4">
            <p className="mb-2">
              <strong>Selected Level:</strong> 2-3 (Specific Boost to Code Accelerator)
            </p>
            <p className="mb-2">
              <strong>Rationale:</strong> Security concerns, complex business logic, high compliance requirements
            </p>
            <p>
              <strong>Implementation:</strong> AI-assisted documentation, code reviews, and selective code generation
              for non-critical components
            </p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-[#1A3234] p-4">
            <h3 className="text-xl font-semibold text-white">Internal Dashboard Application</h3>
          </div>
          <div className="p-4">
            <p className="mb-2">
              <strong>Selected Level:</strong> 5-6 (Component Reactor to Visual Symphony)
            </p>
            <p className="mb-2">
              <strong>Rationale:</strong> Standard UI patterns, moderate complexity, rapid development needs
            </p>
            <p>
              <strong>Implementation:</strong> AI-generated components with developer oversight, low-code platform for
              administrative interfaces
            </p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-[#1A3234] p-4">
            <h3 className="text-xl font-semibold text-white">Startup MVP</h3>
          </div>
          <div className="p-4">
            <p className="mb-2">
              <strong>Selected Level:</strong> 7 (Prompt-to-Product Genesis)
            </p>
            <p className="mb-2">
              <strong>Rationale:</strong> Speed priority, limited resources, willingness to refactor later
            </p>
            <p>
              <strong>Implementation:</strong> Full-stack AI generation with iterative prompt refinement to quickly test
              market fit
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1A3234]/10 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Tip</h2>
        <p className="mb-4">
          The optimal level of AI assistance varies by project, team, and organizational context. This framework
          provides a structured approach to making this decision, but should be adapted to your specific needs.
        </p>
        <p>
          Remember that AI tools are evolving rapidly, and reassessment may be necessary as capabilities advance and
          team familiarity increases.
        </p>
      </div>
    </main>
  )
}

