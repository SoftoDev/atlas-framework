import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ATLAS | Decision Matrix",
  description: "A structured approach to selecting the appropriate AI assistance level for your software project",
}

export default function DecisionMatrix() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Decision Matrix</h1>
      <p className="text-xl mb-6">
        To aid in choosing the ideal level of AI assistance, this matrix relates key decision factors to the AI level
        that best suits your project's situation.
      </p>

      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm table-fixed">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-3 text-left w-[20%] text-lg font-semibold">
                Decision Factor
              </th>
              <th className="border border-gray-300 dark:border-gray-700 bg-[#003B36] text-white p-3 text-center w-[10%]">
                <div className="text-[#C5F74F] font-bold">LEVEL 0</div>
                <div className="font-normal">Pure Code Forge</div>
              </th>
              <th className="border border-gray-300 dark:border-gray-700 bg-[#004D47] text-white p-3 text-center w-[10%]">
                <div className="text-[#C5F74F] font-bold">LEVEL 1</div>
                <div className="font-normal">Insight Engine</div>
              </th>
              <th className="border border-gray-300 dark:border-gray-700 bg-[#005F58] text-white p-3 text-center w-[10%]">
                <div className="text-[#C5F74F] font-bold">LEVEL 2</div>
                <div className="font-normal">Specific Boost</div>
              </th>
              <th className="border border-gray-300 dark:border-gray-700 bg-[#007169] text-white p-3 text-center w-[10%]">
                <div className="text-[#C5F74F] font-bold">LEVEL 3</div>
                <div className="font-normal">Code Accelerator</div>
              </th>
              <th className="border border-gray-300 dark:border-gray-700 bg-[#00837A] text-white p-3 text-center w-[10%]">
                <div className="text-[#C5F74F] font-bold">LEVEL 4</div>
                <div className="font-normal">Blueprint Amplifier</div>
              </th>
              <th className="border border-gray-300 dark:border-gray-700 bg-[#00958B] text-white p-3 text-center w-[10%]">
                <div className="text-[#C5F74F] font-bold">LEVEL 5</div>
                <div className="font-normal">Component Reactor</div>
              </th>
              <th className="border border-gray-300 dark:border-gray-700 bg-[#7FDFD5] text-[#003B36] p-3 text-center dark:bg-[#00958B] dark:text-white w-[10%]">
                <div className="text-[#003B36] font-bold dark:text-[#C5F74F]">LEVEL 6</div>
                <div className="font-normal dark:text-[#C5F74F]">Visual Symphony</div>
              </th>
              <th className="border border-gray-300 dark:border-gray-700 bg-[#7FDFD5] text-[#003B36] p-3 text-center dark:bg-[#00958B] dark:text-white w-[10%]">
                <div className="text-[#003B36] font-bold dark:text-[#C5F74F]">LEVEL 7</div>
                <div className="font-normal dark:text-[#C5F74F]">Prompt-to-Product</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Security & Compliance */}
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-3 font-medium">
                Critical Security and Compliance Requirements
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-red-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-red-500 rounded-full"></span>
              </td>
            </tr>

            {/* Project Complexity */}
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-3 font-medium">
                High Project Complexity
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-red-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-red-500 rounded-full"></span>
              </td>
            </tr>

            {/* Team AI Proficiency */}
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-3 font-medium">
                Limited Team AI Proficiency
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-red-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
            </tr>

            {/* Development Speed Priority */}
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-3 font-medium">
                High Development Speed Priority
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-red-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-red-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
            </tr>

            {/* Long-term Maintenance */}
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-3 font-medium">
                Long-term Maintenance Considerations
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-[#F0FFCF] dark:bg-[#2A3A2F]">
                <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">
                <span className="inline-block w-6 h-6 bg-red-500 rounded-full"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center gap-8 mb-8">
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-6 bg-[#52C9A4] rounded-full"></span>
          <span>Recommended</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full"></span>
          <span>Consider with caution</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-6 bg-red-500 rounded-full"></span>
          <span>Not recommended</span>
        </div>
      </div>

      <p className="mb-4">
        When selecting the appropriate level of AI assistance, evaluate your project against these key dimensions:
      </p>

      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th
                className="border border-gray-300 dark:border-gray-700 bg-[#1A3234] text-white p-3 text-left"
                colSpan={3}
              >
                Decision Factors and Recommended Levels
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Security and Compliance Requirements */}
            <tr>
              <td
                className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-3 font-medium"
                rowSpan={3}
              >
                Security and Compliance Requirements
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">High</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                Prefer Levels 0-2
                <p className="text-sm text-gray-600 mt-1">For defense, healthcare, financial systems</p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Moderate</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                Consider Levels 3-5
                <p className="text-sm text-gray-600 mt-1">For business applications with some sensitive data</p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Low</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                All levels possible, including 6-7
                <p className="text-sm text-gray-600 mt-1">For internal tools, prototypes, non-sensitive applications</p>
              </td>
            </tr>

            {/* Project Complexity */}
            <tr>
              <td
                className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-3 font-medium"
                rowSpan={3}
              >
                Project Complexity
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                High (Novel algorithms, unique architecture)
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                Prefer Levels 0-3
                <p className="text-sm text-gray-600 mt-1">
                  When implementing custom algorithms or unique architectural patterns
                </p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                Moderate (Common patterns with customization)
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                Consider Levels 2-5
                <p className="text-sm text-gray-600 mt-1">
                  For applications that follow standard patterns but require customization
                </p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                Low (Standard application types)
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                Consider Levels 4-7
                <p className="text-sm text-gray-600 mt-1">
                  For CRUD applications, dashboards, and standard web applications
                </p>
              </td>
            </tr>

            {/* Team AI Proficiency */}
            <tr>
              <td
                className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-3 font-medium"
                rowSpan={3}
              >
                Team AI Proficiency
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Low</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                Start with Level 2, experiment with Levels 6-7
                <p className="text-sm text-gray-600 mt-1">For teams new to AI-assisted development</p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Moderate</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                Consider Levels 3-5
                <p className="text-sm text-gray-600 mt-1">For teams with some experience using AI tools</p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">High</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                All levels possible, including 6-7
                <p className="text-sm text-gray-600 mt-1">For teams experienced with AI tools and prompt engineering</p>
              </td>
            </tr>

            {/* Development Speed Priority */}
            <tr>
              <td
                className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-3 font-medium"
                rowSpan={3}
              >
                Development Speed
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                Low (Quality and precision paramount)
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                Prefer Levels 0-3
                <p className="text-sm text-gray-600 mt-1">When precision and quality are more important than speed</p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                Moderate (Balanced approach)
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                Consider Levels 3-5
                <p className="text-sm text-gray-600 mt-1">When balancing quality and development speed</p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                High (Rapid deployment critical)
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                Consider Levels 5-7
                <p className="text-sm text-gray-600 mt-1">When time-to-market is the primary concern</p>
              </td>
            </tr>

            {/* Long-term Maintenance */}
            <tr>
              <td
                className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-3 font-medium"
                rowSpan={3}
              >
                Maintenance Lifecycle Expectations
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                High (Long lifespan, ongoing development)
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                Prefer Levels 0-4
                <p className="text-sm text-gray-600 mt-1">For systems expected to be maintained for many years</p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                Moderate (Regular updates needed)
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                Consider Levels 2-6
                <p className="text-sm text-gray-600 mt-1">
                  For applications requiring periodic updates and enhancements
                </p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">
                Low (Short-term or disposable solution)
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">
                All levels possible, including 7
                <p className="text-sm text-gray-600 mt-1">For prototypes, MVPs, or short-lived applications</p>
              </td>
            </tr>
          </tbody>
        </table>
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

