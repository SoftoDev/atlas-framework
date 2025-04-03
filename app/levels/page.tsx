import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ATLAS | AI Assistance Levels",
  description: "The 8 levels of AI integration in software development defined by the ATLAS Framework",
}

export default function AIAssistanceLevels() {
  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">AI Assistance Levels</h1>
      <p className="text-xl mb-6">
        The ATLAS Framework defines 8 levels of AI integration in software development, ranging from fully manual coding
        to complete application generation from natural language prompts.
      </p>

      <div className="grid grid-cols-1 gap-8 mb-8">
        {/* Level 0: Pure Code Forge */}
        <div
          id="level0"
          className="border rounded-md overflow-hidden shadow-sm dark:border-gray-700 flex flex-col md:flex-row"
        >
          <div className="bg-[#003B36] text-white p-6 md:w-1/4 flex flex-col justify-center">
            <div className="text-[#C5F74F] font-bold mb-2">LEVEL 0</div>
            <h3 className="font-bold text-2xl mb-2">PURE CODE FORGE</h3>
            <p className="text-sm">Raw code crafted by human expertise alone</p>
          </div>

          <div className="md:w-3/4">
            <div className="grid grid-cols-2 text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Developer Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">Code Architect</span>
                <p className="mt-1">Writes and maintains all code manually.</p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                AI Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">None</span>
              </div>

              <div className="bg-[#F0FFCF] dark:bg-[#2A3A2F] p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Best For
              </div>
              <div className="p-4 bg-[#F0FFCF] dark:bg-[#2A3A2F] border-b border-gray-300 dark:border-gray-700">
                High-security applications, highly regulated industries, legacy systems.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Challenges
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                Lower productivity, knowledge limitations, higher maintenance burden.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium">Typical Tools</div>
              <div className="p-4 dark:bg-gray-900">
                Traditional IDEs (VS Code without AI, Eclipse, etc.), Git, manual testing.
              </div>
            </div>
          </div>
        </div>

        {/* Level 1: Insight Engine */}
        <div
          id="level1"
          className="border rounded-md overflow-hidden shadow-sm dark:border-gray-700 flex flex-col md:flex-row"
        >
          <div className="bg-[#004D47] text-white p-6 md:w-1/4 flex flex-col justify-center">
            <div className="text-[#C5F74F] font-bold mb-2">LEVEL 1</div>
            <h3 className="font-bold text-2xl mb-2">INSIGHT ENGINE</h3>
            <p className="text-sm">Development powered by AI-enhanced guidance</p>
          </div>

          <div className="md:w-3/4">
            <div className="grid grid-cols-2 text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Developer Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">
                  Knowledge Director
                </span>
                <p className="mt-1">Writes all code; reviews AI suggestions for documentation and quality.</p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                AI Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">
                  Documentation Assistant
                </span>
                <p className="mt-1">Generates documentation, suggests improvements, helps with knowledge sharing.</p>
              </div>

              <div className="bg-[#F0FFCF] dark:bg-[#2A3A2F] p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Best For
              </div>
              <div className="p-4 bg-[#F0FFCF] dark:bg-[#2A3A2F] border-b border-gray-300 dark:border-gray-700">
                Teams new to AI, projects with extensive documentation needs, improving code quality.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Challenges
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                Limited productivity gains, constrained to non-coding tasks.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium">Typical Tools</div>
              <div className="p-4 dark:bg-gray-900">
                GitHub Copilot Chat (documentation mode), Mintlify, Swimm, SonarQube with AI, SDLC Genius.
              </div>
            </div>
          </div>
        </div>

        {/* Level 2: Specific Boost */}
        <div
          id="level2"
          className="border rounded-md overflow-hidden shadow-sm dark:border-gray-700 flex flex-col md:flex-row"
        >
          <div className="bg-[#005F58] text-white p-6 md:w-1/4 flex flex-col justify-center">
            <div className="text-[#C5F74F] font-bold mb-2">LEVEL 2</div>
            <h3 className="font-bold text-2xl mb-2">SPECIFIC BOOST</h3>
            <p className="text-sm">Strategic amplification of specific development tasks</p>
          </div>

          <div className="md:w-3/4">
            <div className="grid grid-cols-2 text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Developer Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">
                  Implementation Lead
                </span>
                <p className="mt-1">Controls implementation decisions, uses AI for routine or repetitive code.</p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                AI Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">Task Amplifier</span>
                <p className="mt-1">Generates specific code snippets, unit tests, boilerplate code.</p>
              </div>

              <div className="bg-[#F0FFCF] dark:bg-[#2A3A2F] p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Best For
              </div>
              <div className="p-4 bg-[#F0FFCF] dark:bg-[#2A3A2F] border-b border-gray-300 dark:border-gray-700">
                Well-defined projects with repetitive patterns, balanced productivity and control.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Challenges
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                Inconsistencies between human and AI code styles, verification overhead.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium">Typical Tools</div>
              <div className="p-4 dark:bg-gray-900">
                GitHub Copilot (basic usage), Tabnine, Amazon CodeWhisperer, limited Cursor usage.
              </div>
            </div>
          </div>
        </div>

        {/* Level 3: Code Accelerator */}
        <div
          id="level3"
          className="border rounded-md overflow-hidden shadow-sm dark:border-gray-700 flex flex-col md:flex-row"
        >
          <div className="bg-[#007169] text-white p-6 md:w-1/4 flex flex-col justify-center">
            <div className="text-[#C5F74F] font-bold mb-2">LEVEL 3</div>
            <h3 className="font-bold text-2xl mb-2">CODE ACCELERATOR</h3>
            <p className="text-sm">Development with intelligent completion and suggestions</p>
          </div>

          <div className="md:w-3/4">
            <div className="grid grid-cols-2 text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Developer Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">Flow Controller</span>
                <p className="mt-1">Works alongside AI, reviews and modifies AI suggestions.</p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                AI Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">
                  Completion Companion
                </span>
                <p className="mt-1">Provides intelligent code completion, basic function implementation.</p>
              </div>

              <div className="bg-[#F0FFCF] dark:bg-[#2A3A2F] p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Best For
              </div>
              <div className="p-4 bg-[#F0FFCF] dark:bg-[#2A3A2F] border-b border-gray-300 dark:border-gray-700">
                Standard architectural patterns, common libraries and frameworks.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Challenges
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                Integration challenges, potential knowledge gaps in AI suggestions.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium">Typical Tools</div>
              <div className="p-4 dark:bg-gray-900">
                GitHub Copilot (full usage), basic Cursor usage, JetBrains AI Assistant.
              </div>
            </div>
          </div>
        </div>

        {/* Level 4: Blueprint Amplifier */}
        <div
          id="level4"
          className="border rounded-md overflow-hidden shadow-sm dark:border-gray-700 flex flex-col md:flex-row"
        >
          <div className="bg-[#00837A] text-white p-6 md:w-1/4 flex flex-col justify-center">
            <div className="text-[#C5F74F] font-bold mb-2">LEVEL 4</div>
            <h3 className="font-bold text-2xl mb-2">BLUEPRINT AMPLIFIER</h3>
            <p className="text-sm">Advanced design patterns and code generation</p>
          </div>

          <div className="md:w-3/4">
            <div className="grid grid-cols-2 text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Developer Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">
                  Technical Orchestrator
                </span>
                <p className="mt-1">Guides development direction, provides high-level oversight.</p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                AI Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">
                  Implementation Engineer
                </span>
                <p className="mt-1">
                  Generates whole functions, suggests architectural patterns, provides advanced contextual awareness.
                </p>
              </div>

              <div className="bg-[#F0FFCF] dark:bg-[#2A3A2F] p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Best For
              </div>
              <div className="p-4 bg-[#F0FFCF] dark:bg-[#2A3A2F] border-b border-gray-300 dark:border-gray-700">
                Projects where speed is critical, working with known technologies.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Challenges
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                Ensuring code quality, maintaining consistency across AI-generated components.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium">Typical Tools</div>
              <div className="p-4 dark:bg-gray-900">
                Advanced Cursor usage with custom prompts, Codeium, advanced GitHub Copilot integration.
              </div>
            </div>
          </div>
        </div>

        {/* Level 5: Component Reactor */}
        <div
          id="level5"
          className="border rounded-md overflow-hidden shadow-sm dark:border-gray-700 flex flex-col md:flex-row"
        >
          <div className="bg-[#00958B] text-white p-6 md:w-1/4 flex flex-col justify-center">
            <div className="text-[#C5F74F] font-bold mb-2">LEVEL 5</div>
            <h3 className="font-bold text-2xl mb-2">COMPONENT REACTOR</h3>
            <p className="text-sm">Rapid creation of entire application modules</p>
          </div>

          <div className="md:w-3/4">
            <div className="grid grid-cols-2 text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Developer Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">
                  System Integrator
                </span>
                <p className="mt-1">Specifies requirements, reviews generated components, handles integration.</p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                AI Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">
                  Component Generator
                </span>
                <p className="mt-1">Generates entire components or modules based on specifications.</p>
              </div>

              <div className="bg-[#F0FFCF] dark:bg-[#2A3A2F] p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Best For
              </div>
              <div className="p-4 bg-[#F0FFCF] dark:bg-[#2A3A2F] border-b border-gray-300 dark:border-gray-700">
                Modular applications, projects with well-defined components.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Challenges
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                Integration complexity, ensuring generated code meets requirements.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium">Typical Tools</div>
              <div className="p-4 dark:bg-gray-900">
                Claude Code, GPT Engineer, Smol Developer, Devin, Cursor with custom workflows.
              </div>
            </div>
          </div>
        </div>

        {/* Level 6: Visual Symphony */}
        <div
          id="level6"
          className="border rounded-md overflow-hidden shadow-sm dark:border-gray-700 flex flex-col md:flex-row"
        >
          <div className="bg-[#7FDFD5] text-[#003B36] p-6 md:w-1/4 flex flex-col justify-center dark:bg-[#00958B] dark:text-white">
            <div className="text-[#1A3234] font-bold mb-2 dark:text-[#C5F74F]">LEVEL 6</div>
            <h3 className="font-bold text-2xl mb-2 text-[#1A3234] dark:text-white">VISUAL SYMPHONY</h3>
            <p className="text-sm">Orchestrated development through visual interfaces</p>
          </div>

          <div className="md:w-3/4">
            <div className="grid grid-cols-2 text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Developer Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">
                  Business Translator
                </span>
                <p className="mt-1">
                  Defines application structure through visual interfaces, focuses on business logic.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                AI Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">
                  Interface Materializer
                </span>
                <p className="mt-1">Automatically generates code behind visual interface components.</p>
              </div>

              <div className="bg-[#F0FFCF] dark:bg-[#2A3A2F] p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Best For
              </div>
              <div className="p-4 bg-[#F0FFCF] dark:bg-[#2A3A2F] border-b border-gray-300 dark:border-gray-700">
                Business applications, workflow automation, data management systems.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Challenges
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                Platform limitations, integration with external systems, customization constraints.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium">Typical Tools</div>
              <div className="p-4 dark:bg-gray-900">
                Microsoft Power Platform with Copilot, AppSmith AI, OutSystems AI Mentor, Mendix with AI features, v0.
              </div>
            </div>
          </div>
        </div>

        {/* Level 7: Prompt-to-Product Genesis */}
        <div
          id="level7"
          className="border rounded-md overflow-hidden shadow-sm dark:border-gray-700 flex flex-col md:flex-row"
        >
          <div className="bg-[#B1FBD5] text-[#003B36] p-6 md:w-1/4 flex flex-col justify-center dark:bg-[#00958B] dark:text-white">
            <div className="text-[#1A3234] font-bold mb-2 dark:text-[#C5F74F]">LEVEL 7</div>
            <h3 className="font-bold text-2xl mb-2 text-[#1A3234] dark:text-white">PROMPT-TO-PRODUCT GENESIS</h3>
            <p className="text-sm">Complete application manifestation from prompts</p>
          </div>

          <div className="md:w-3/4">
            <div className="grid grid-cols-2 text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Developer Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">Vision Director</span>
                <p className="mt-1">Provides detailed prompts, iterates on requirements, tests final output.</p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                AI Role
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                <span className="bg-[#F0FFCF] dark:bg-[#2A3A2F] px-2 py-0.5 rounded font-medium">
                  Implementation Engine
                </span>
                <p className="mt-1">Generates full-stack applications based on natural language descriptions.</p>
              </div>

              <div className="bg-[#F0FFCF] dark:bg-[#2A3A2F] p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Best For
              </div>
              <div className="p-4 bg-[#F0FFCF] dark:bg-[#2A3A2F] border-b border-gray-300 dark:border-gray-700">
                Prototypes, MVPs, internal tools, rapid idea validation.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium border-b border-gray-300 dark:border-gray-700">
                Challenges
              </div>
              <div className="p-4 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                Limited customization, potential architectural flaws, maintenance challenges.
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 font-medium">Typical Tools</div>
              <div className="p-4 dark:bg-gray-900">
                Bolt.new, Lovable, GPT Engineer (advanced mode), Anthropic Claude + specialized frameworks.
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Productivity vs. Control Tradeoffs</h2>
      <p className="mb-4">
        When adopting different AI levels, teams need to understand how each step affects the balance between
        development speed and control over implementation details. The higher the level, the more AI contributes to code
        creation—but also the greater the reliance on its suggestions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg border border-green-200 dark:border-green-900">
          <h3 className="font-semibold text-lg text-green-800 dark:text-green-300 mb-3">
            ↑ Increases as you move from Level 0 to 7:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-300">
            <li>Development speed</li>
            <li>AI dependency</li>
            <li>Abstraction level</li>
            <li>Focus on requirements over implementation</li>
          </ul>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg border border-amber-200 dark:border-amber-900">
          <h3 className="font-semibold text-lg text-amber-800 dark:text-amber-300 mb-3">
            ↓ Decreases as you move from Level 0 to 7:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-amber-800 dark:text-amber-300">
            <li>Fine-grained control</li>
            <li>Customization options</li>
            <li>Implementation transparency</li>
            <li>Security oversight</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

