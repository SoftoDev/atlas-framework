import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Assistance Levels | ATLAS Framework",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Level 0: Pure Code Forge */}
        <div id="level0" className="border rounded-md overflow-hidden shadow-sm">
          <div className="bg-[#003B36] text-white p-4 flex justify-between items-center h-32">
            <div>
              <h3 className="font-bold text-lg">PURE CODE FORGE</h3>
              <p className="text-sm">Raw code crafted by human expertise alone</p>
            </div>
            <span className="text-[#C5F74F] font-bold w-[30%] text-right">LEVEL 0</span>
          </div>

          <div className="grid grid-cols-2 text-sm">
            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Developer Role
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Writes and maintains all code manually.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">AI Role</div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">-</div>

            <div className="bg-[#F0FFCF] p-2 font-medium h-24 flex items-center border-b border-gray-200">Best For</div>
            <div className="p-2 bg-[#F0FFCF] h-24 flex items-center border-b border-gray-200">
              High-security applications, highly regulated industries, legacy systems.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Challenges
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Lower productivity, knowledge limitations, higher maintenance burden.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center">Typical Tools</div>
            <div className="p-2 h-24 flex items-center">
              Traditional IDEs (VS Code without AI, Eclipse, etc.), Git, manual testing.
            </div>
          </div>
        </div>

        {/* Level 1: Insight Engine */}
        <div id="level1" className="border rounded-md overflow-hidden shadow-sm">
          <div className="bg-[#004D47] text-white p-4 flex justify-between items-center h-32">
            <div>
              <h3 className="font-bold text-lg">INSIGHT ENGINE</h3>
              <p className="text-sm">Development powered by AI-enhanced guidance</p>
            </div>
            <span className="text-[#C5F74F] font-bold w-[30%] text-right">LEVEL 1</span>
          </div>

          <div className="grid grid-cols-2 text-sm">
            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Developer Role
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Writes all code; reviews AI suggestions for documentation and quality.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">AI Role</div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Generates documentation, suggests improvements, helps with knowledge sharing.
            </div>

            <div className="bg-[#F0FFCF] p-2 font-medium h-24 flex items-center border-b border-gray-200">Best For</div>
            <div className="p-2 bg-[#F0FFCF] h-24 flex items-center border-b border-gray-200">
              Teams new to AI, projects with extensive documentation needs, improving code quality.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Challenges
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Limited productivity gains, constrained to non-coding tasks.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center">Typical Tools</div>
            <div className="p-2 h-24 flex items-center">
              GitHub Copilot Chat (documentation mode), Mintlify, Swimm, SonarQube with AI, SDLC Genius.
            </div>
          </div>
        </div>

        {/* Level 2: Specific Boost */}
        <div id="level2" className="border rounded-md overflow-hidden shadow-sm">
          <div className="bg-[#005F58] text-white p-4 flex justify-between items-center h-32">
            <div>
              <h3 className="font-bold text-lg">SPECIFIC BOOST</h3>
              <p className="text-sm">Strategic amplification of specific development tasks</p>
            </div>
            <span className="text-[#C5F74F] font-bold w-[30%] text-right">LEVEL 2</span>
          </div>

          <div className="grid grid-cols-2 text-sm">
            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Developer Role
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Controls implementation decisions, uses AI for routine or repetitive code.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">AI Role</div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Generates specific code snippets, unit tests, boilerplate code.
            </div>

            <div className="bg-[#F0FFCF] p-2 font-medium h-24 flex items-center border-b border-gray-200">Best For</div>
            <div className="p-2 bg-[#F0FFCF] h-24 flex items-center border-b border-gray-200">
              Well-defined projects with repetitive patterns, balanced productivity and control.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Challenges
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Inconsistencies between human and AI code styles, verification overhead.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center">Typical Tools</div>
            <div className="p-2 h-24 flex items-center">
              GitHub Copilot (basic usage), Tabnine, Amazon CodeWhisperer, limited Cursor usage.
            </div>
          </div>
        </div>

        {/* Level 3: Code Accelerator */}
        <div id="level3" className="border rounded-md overflow-hidden shadow-sm">
          <div className="bg-[#007169] text-white p-4 flex justify-between items-center h-32">
            <div>
              <h3 className="font-bold text-lg">CODE ACCELERATOR</h3>
              <p className="text-sm">Development with intelligent completion and suggestions</p>
            </div>
            <span className="text-[#C5F74F] font-bold w-[30%] text-right">LEVEL 3</span>
          </div>

          <div className="grid grid-cols-2 text-sm">
            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Developer Role
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Works alongside AI, reviews and modifies AI suggestions.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">AI Role</div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Provides intelligent code completion, basic function implementation.
            </div>

            <div className="bg-[#F0FFCF] p-2 font-medium h-24 flex items-center border-b border-gray-200">Best For</div>
            <div className="p-2 bg-[#F0FFCF] h-24 flex items-center border-b border-gray-200">
              Standard architectural patterns, common libraries and frameworks.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Challenges
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Integration challenges, potential knowledge gaps in AI suggestions.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center">Typical Tools</div>
            <div className="p-2 h-24 flex items-center">
              GitHub Copilot (full usage), basic Cursor usage, JetBrains AI Assistant.
            </div>
          </div>
        </div>

        {/* Level 4: Blueprint Amplifier */}
        <div id="level4" className="border rounded-md overflow-hidden shadow-sm">
          <div className="bg-[#00837A] text-white p-4 flex justify-between items-center h-32">
            <div>
              <h3 className="font-bold text-lg">BLUEPRINT AMPLIFIER</h3>
              <p className="text-sm">Advanced design patterns and code generation</p>
            </div>
            <span className="text-[#C5F74F] font-bold w-[30%] text-right">LEVEL 4</span>
          </div>

          <div className="grid grid-cols-2 text-sm">
            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Developer Role
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Guides development direction, provides high-level oversight.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">AI Role</div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Generates whole functions, suggests architectural patterns, provides advanced contextual awareness.
            </div>

            <div className="bg-[#F0FFCF] p-2 font-medium h-24 flex items-center border-b border-gray-200">Best For</div>
            <div className="p-2 bg-[#F0FFCF] h-24 flex items-center border-b border-gray-200">
              Projects where speed is critical, working with known technologies.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Challenges
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Ensuring code quality, maintaining consistency across AI-generated components.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center">Typical Tools</div>
            <div className="p-2 h-24 flex items-center">
              Advanced Cursor usage with custom prompts, Codeium, advanced GitHub Copilot integration.
            </div>
          </div>
        </div>

        {/* Level 5: Component Reactor */}
        <div id="level5" className="border rounded-md overflow-hidden shadow-sm">
          <div className="bg-[#00958B] text-white p-4 flex justify-between items-center h-32">
            <div>
              <h3 className="font-bold text-lg">COMPONENT REACTOR</h3>
              <p className="text-sm">Rapid creation of entire application modules</p>
            </div>
            <span className="text-[#C5F74F] font-bold w-[30%] text-right">LEVEL 5</span>
          </div>

          <div className="grid grid-cols-2 text-sm">
            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Developer Role
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Specifies requirements, reviews generated components, handles integration.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">AI Role</div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Generates entire components or modules based on specifications.
            </div>

            <div className="bg-[#F0FFCF] p-2 font-medium h-24 flex items-center border-b border-gray-200">Best For</div>
            <div className="p-2 bg-[#F0FFCF] h-24 flex items-center border-b border-gray-200">
              Modular applications, projects with well-defined components.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Challenges
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Integration complexity, ensuring generated code meets requirements.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center">Typical Tools</div>
            <div className="p-2 h-24 flex items-center">
              Claude Code, GPT Engineer, Smol Developer, Devin, Cursor with custom workflows.
            </div>
          </div>
        </div>

        {/* Level 6: Visual Symphony */}
        <div id="level6" className="border rounded-md overflow-hidden shadow-sm">
          <div className="bg-[#7FDFD5] text-[#003B36] p-4 flex justify-between items-center h-32">
            <div>
              <h3 className="font-bold text-lg">VISUAL SYMPHONY</h3>
              <p className="text-sm">Orchestrated development through visual interfaces</p>
            </div>
            <span className="text-[#003B36] font-bold w-[30%] text-right">LEVEL 6</span>
          </div>

          <div className="grid grid-cols-2 text-sm">
            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Developer Role
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Defines application structure through visual interfaces, focuses on business logic.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">AI Role</div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Automatically generates code behind visual interface components.
            </div>

            <div className="bg-[#F0FFCF] p-2 font-medium h-24 flex items-center border-b border-gray-200">Best For</div>
            <div className="p-2 bg-[#F0FFCF] h-24 flex items-center border-b border-gray-200">
              Business applications, workflow automation, data management systems.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Challenges
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Platform limitations, integration with external systems, customization constraints.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center">Typical Tools</div>
            <div className="p-2 h-24 flex items-center">
              Microsoft Power Platform with Copilot, AppSmith AI, OutSystems AI Mentor, Mendix with AI features, v0.
            </div>
          </div>
        </div>

        {/* Level 7: Prompt-to-Product Genesis */}
        <div id="level7" className="border rounded-md overflow-hidden shadow-sm">
          <div className="bg-[#7FDFD5] text-[#003B36] p-4 flex justify-between items-center h-32">
            <div>
              <h3 className="font-bold text-lg">PROMPT-TO-PRODUCT GENESIS</h3>
              <p className="text-sm">Complete application manifestation from prompts</p>
            </div>
            <span className="text-[#003B36] font-bold w-[30%] text-right">LEVEL 7</span>
          </div>

          <div className="grid grid-cols-2 text-sm">
            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Developer Role
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Provides detailed prompts, iterates on requirements, tests final output.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">AI Role</div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Generates full-stack applications based on natural language descriptions.
            </div>

            <div className="bg-[#F0FFCF] p-2 font-medium h-24 flex items-center border-b border-gray-200">Best For</div>
            <div className="p-2 bg-[#F0FFCF] h-24 flex items-center border-b border-gray-200">
              Prototypes, MVPs, internal tools, rapid idea validation.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center border-b border-gray-200">
              Challenges
            </div>
            <div className="p-2 h-24 flex items-center border-b border-gray-200">
              Limited customization, potential architectural flaws, maintenance challenges.
            </div>

            <div className="bg-gray-100 p-2 font-medium h-24 flex items-center">Typical Tools</div>
            <div className="p-2 h-24 flex items-center">
              Bolt.new, Lovable, GPT Engineer (advanced mode), Anthropic Claude + specialized frameworks.
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
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="font-semibold text-lg text-green-800 mb-3">↑ Increases as you move from Level 0 to 7:</h3>
          <ul className="list-disc list-inside space-y-2 text-green-800">
            <li>Development speed</li>
            <li>AI dependency</li>
            <li>Abstraction level</li>
            <li>Focus on requirements over implementation</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="font-semibold text-lg text-amber-800 mb-3">↓ Decreases as you move from Level 0 to 7:</h3>
          <ul className="list-disc list-inside space-y-2 text-amber-800">
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

