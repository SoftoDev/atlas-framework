import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Decision Matrix | ATLAS Framework",
  description: "A structured approach to selecting the appropriate AI assistance level for your software project",
}

export default function DecisionMatrix() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Decision Matrix</h1>
      <p className="text-xl mb-6">
        To aid in choosing the ideal level of AI assistance, this matrix relates key decision factors to the AI level
        that best suits your project's situation.
      </p>

      <div className="mb-8">
        <Image
          src="/images/atlas-framework-decision-matrix.png"
          alt="ATLAS Framework Decision Matrix"
          width={1000}
          height={450}
          className="rounded-lg shadow-md w-full"
          priority
        />
      </div>

      <p className="mb-4">
        When selecting the appropriate level of AI assistance, evaluate your project against these key dimensions:
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Security and Compliance Requirements</h2>
      <div className="bg-gray-100 p-5 rounded-md mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">High</h3>
            <p>Prefer Levels 0-2 (Pure Code Forge to Specific Boost)</p>
            <p className="text-sm text-gray-600 mt-2">For defense, healthcare, financial systems</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">Moderate</h3>
            <p>Consider Levels 3-5 (Code Accelerator to Component Reactor)</p>
            <p className="text-sm text-gray-600 mt-2">For business applications with some sensitive data</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm col-span-2">
            <h3 className="font-semibold mb-2 text-[#1A3234]">Low</h3>
            <p>All levels possible, including 6-7 (Visual Symphony to Prompt-to-Product)</p>
            <p className="text-sm text-gray-600 mt-2">For internal tools, prototypes, non-sensitive applications</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Project Complexity</h2>
      <div className="bg-gray-100 p-5 rounded-md mb-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">High (Novel algorithms, unique architecture)</h3>
            <p>Prefer Levels 0-3 (Pure Code Forge to Code Accelerator)</p>
            <p className="text-sm text-gray-600 mt-2">
              When implementing custom algorithms or unique architectural patterns
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">Moderate (Common patterns with customization)</h3>
            <p>Consider Levels 2-5 (Specific Boost to Component Reactor)</p>
            <p className="text-sm text-gray-600 mt-2">
              For applications that follow standard patterns but require customization
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">Low (Standard application types)</h3>
            <p>Consider Levels 4-7 (Blueprint Amplifier to Prompt-to-Product)</p>
            <p className="text-sm text-gray-600 mt-2">
              For CRUD applications, dashboards, and standard web applications
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Team AI Proficiency</h2>
      <div className="bg-gray-100 p-5 rounded-md mb-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">Low</h3>
            <p>Start with Levels 0-2 (Pure Code Forge to Specific Boost)</p>
            <p className="text-sm text-gray-600 mt-2">For teams new to AI-assisted development</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">Moderate</h3>
            <p>Consider Levels 3-5 (Code Accelerator to Component Reactor)</p>
            <p className="text-sm text-gray-600 mt-2">For teams with some experience using AI tools</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">High</h3>
            <p>All levels possible, including 6-7 (Visual Symphony to Prompt-to-Product)</p>
            <p className="text-sm text-gray-600 mt-2">For teams experienced with AI tools and prompt engineering</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Development Speed Priority</h2>
      <div className="bg-gray-100 p-5 rounded-md mb-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">Low (Quality and precision paramount)</h3>
            <p>Prefer Levels 0-3 (Pure Code Forge to Code Accelerator)</p>
            <p className="text-sm text-gray-600 mt-2">When precision and quality are more important than speed</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">Moderate (Balanced approach)</h3>
            <p>Consider Levels 3-5 (Code Accelerator to Component Reactor)</p>
            <p className="text-sm text-gray-600 mt-2">When balancing quality and development speed</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">High (Rapid deployment critical)</h3>
            <p>Consider Levels 5-7 (Component Reactor to Prompt-to-Product)</p>
            <p className="text-sm text-gray-600 mt-2">When time-to-market is the primary concern</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Long-term Maintenance Considerations</h2>
      <div className="bg-gray-100 p-5 rounded-md mb-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">High (Long lifespan, ongoing development)</h3>
            <p>Prefer Levels 0-4 (Pure Code Forge to Blueprint Amplifier)</p>
            <p className="text-sm text-gray-600 mt-2">For systems expected to be maintained for many years</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">Moderate (Regular updates needed)</h3>
            <p>Consider Levels 2-6 (Specific Boost to Visual Symphony)</p>
            <p className="text-sm text-gray-600 mt-2">For applications requiring periodic updates and enhancements</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#1A3234]">Low (Short-term or disposable solution)</h3>
            <p>All levels possible, including 7 (Prompt-to-Product)</p>
            <p className="text-sm text-gray-600 mt-2">For prototypes, MVPs, or short-lived applications</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Integration Across Multiple Levels</h2>
      <p className="mb-4">
        A project does not always fit neatly into a single AI level. Often, different parts of a system can benefit from
        varying degrees of automation and assistance.
      </p>
      <div className="bg-[#1A3234]/10 p-5 rounded-md mb-6">
        <p className="mb-3 font-semibold">
          Many projects can benefit from using different levels for different components:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Security-critical components:</strong> Levels 0-2
          </li>
          <li>
            <strong>Business logic:</strong> Levels 3-5
          </li>
          <li>
            <strong>Administrative interfaces:</strong> Levels 5-6
          </li>
          <li>
            <strong>Prototyping new features:</strong> Level 7
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Migration Considerations Between Levels</h2>
      <p className="mb-4">
        Transitioning between AI levels need not be permanent. Depending on project evolution or changing business
        needs, it may be necessary to move up or down to a level that better meets current requirements.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="font-semibold mb-2 text-blue-800">Lower → Higher</h3>
          <ul className="list-disc list-inside space-y-1 text-blue-800">
            <li>Plan for verification processes</li>
            <li>Develop AI prompt engineering skills</li>
            <li>Establish testing frameworks</li>
            <li>Focus on requirements clarity</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-4 rounded-md">
          <h3 className="font-semibold mb-2 text-purple-800">Higher → Lower</h3>
          <ul className="list-disc list-inside space-y-1 text-purple-800">
            <li>Expect productivity changes</li>
            <li>Address knowledge transfer gaps</li>
            <li>Focus on code documentation</li>
            <li>Potentially refactor generated code</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

