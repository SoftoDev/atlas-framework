"use client"

import { useState } from "react"
import { ClipboardCopy, Check, Github } from "lucide-react"

export default function ResourcesPage() {
  // State to track which badges have been copied
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})

  // Function to handle copying markdown to clipboard
  const copyToClipboard = (text: string, level: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates({ ...copiedStates, [level]: true })

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [level]: false }))
      }, 2000)
    })
  }

  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Resources</h1>
      <p className="text-xl mb-6">
        Explore these resources to help you implement and get the most out of the ATLAS Framework in your software
        development projects.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">README Badges</h2>
      <p className="mb-4">
        Show which ATLAS Framework level your project is using by adding one of these badges to your README file.
      </p>

      <div className="border rounded-lg overflow-hidden shadow-sm mb-8">
        <div className="bg-[#1A3234] p-4">
          <h3 className="text-xl font-semibold text-white">ATLAS Framework Level Badges</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Level 0 */}
            <div className="border rounded p-4">
              <p className="font-medium text-base mb-3">Level 0 - Pure Code Forge</p>
              <div className="mb-3">
                <img
                  src="https://img.shields.io/badge/ATLAS_Framework-Level_0-003538"
                  alt="ATLAS Framework - Level 0"
                  className="h-6"
                />
              </div>
              <div className="relative">
                <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap overflow-y-auto">
                  [![ATLAS Framework
                  Level](https://img.shields.io/badge/ATLAS_Framework-Level_0-003538)](https://atlas-framework.com/levels/#level0)
                </pre>
                <button
                  className="absolute top-2 right-2 p-1 bg-white rounded-md hover:bg-gray-200 transition-colors"
                  onClick={() =>
                    copyToClipboard(
                      "[![ATLAS Framework Level](https://img.shields.io/badge/ATLAS_Framework-Level_0-003538)](https://atlas-framework.com/levels/#level0)",
                      "level0",
                    )
                  }
                  title="Copy to clipboard"
                >
                  {copiedStates["level0"] ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <ClipboardCopy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Level 1 */}
            <div className="border rounded p-4">
              <p className="font-medium text-base mb-3">Level 1 - Insight Engine</p>
              <div className="mb-3">
                <img
                  src="https://img.shields.io/badge/ATLAS_Framework-Level_1-003538"
                  alt="ATLAS Framework - Level 1"
                  className="h-6"
                />
              </div>
              <div className="relative">
                <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap overflow-y-auto">
                  [![ATLAS Framework
                  Level](https://img.shields.io/badge/ATLAS_Framework-Level_1-003538)](https://atlas-framework.com/levels/#level1)
                </pre>
                <button
                  className="absolute top-2 right-2 p-1 bg-white rounded-md hover:bg-gray-200 transition-colors"
                  onClick={() =>
                    copyToClipboard(
                      "[![ATLAS Framework Level](https://img.shields.io/badge/ATLAS_Framework-Level_1-003538)](https://atlas-framework.com/levels/#level1)",
                      "level1",
                    )
                  }
                  title="Copy to clipboard"
                >
                  {copiedStates["level1"] ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <ClipboardCopy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Level 2 */}
            <div className="border rounded p-4">
              <p className="font-medium text-base mb-3">Level 2 - Specific Boost</p>
              <div className="mb-3">
                <img
                  src="https://img.shields.io/badge/ATLAS_Framework-Level_2-004340"
                  alt="ATLAS Framework - Level 2"
                  className="h-6"
                />
              </div>
              <div className="relative">
                <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap overflow-y-auto">
                  [![ATLAS Framework
                  Level](https://img.shields.io/badge/ATLAS_Framework-Level_2-004340)](https://atlas-framework.com/levels/#level2)
                </pre>
                <button
                  className="absolute top-2 right-2 p-1 bg-white rounded-md hover:bg-gray-200 transition-colors"
                  onClick={() =>
                    copyToClipboard(
                      "[![ATLAS Framework Level](https://img.shields.io/badge/ATLAS_Framework-Level_2-004340)](https://atlas-framework.com/levels/#level2)",
                      "level2",
                    )
                  }
                  title="Copy to clipboard"
                >
                  {copiedStates["level2"] ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <ClipboardCopy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Level 3 */}
            <div className="border rounded p-4">
              <p className="font-medium text-base mb-3">Level 3 - Code Accelerator</p>
              <div className="mb-3">
                <img
                  src="https://img.shields.io/badge/ATLAS_Framework-Level_3-085B51"
                  alt="ATLAS Framework - Level 3"
                  className="h-6"
                />
              </div>
              <div className="relative">
                <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap overflow-y-auto">
                  [![ATLAS Framework
                  Level](https://img.shields.io/badge/ATLAS_Framework-Level_3-085B51)](https://atlas-framework.com/levels/#level3)
                </pre>
                <button
                  className="absolute top-2 right-2 p-1 bg-white rounded-md hover:bg-gray-200 transition-colors"
                  onClick={() =>
                    copyToClipboard(
                      "[![ATLAS Framework Level](https://img.shields.io/badge/ATLAS_Framework-Level_3-085B51)](https://atlas-framework.com/levels/#level3)",
                      "level3",
                    )
                  }
                  title="Copy to clipboard"
                >
                  {copiedStates["level3"] ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <ClipboardCopy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Level 4 */}
            <div className="border rounded p-4">
              <p className="font-medium text-base mb-3">Level 4 - Blueprint Amplifier</p>
              <div className="mb-3">
                <img
                  src="https://img.shields.io/badge/ATLAS_Framework-Level_4-26947C"
                  alt="ATLAS Framework - Level 4"
                  className="h-6"
                />
              </div>
              <div className="relative">
                <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap overflow-y-auto">
                  [![ATLAS Framework
                  Level](https://img.shields.io/badge/ATLAS_Framework-Level_4-26947C)](https://atlas-framework.com/levels/#level4)
                </pre>
                <button
                  className="absolute top-2 right-2 p-1 bg-white rounded-md hover:bg-gray-200 transition-colors"
                  onClick={() =>
                    copyToClipboard(
                      "[![ATLAS Framework Level](https://img.shields.io/badge/ATLAS_Framework-Level_4-26947C)](https://atlas-framework.com/levels/#level4)",
                      "level4",
                    )
                  }
                  title="Copy to clipboard"
                >
                  {copiedStates["level4"] ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <ClipboardCopy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Level 5 */}
            <div className="border rounded p-4">
              <p className="font-medium text-base mb-3">Level 5 - Component Reactor</p>
              <div className="mb-3">
                <img
                  src="https://img.shields.io/badge/ATLAS_Framework-Level_5-52C9A4"
                  alt="ATLAS Framework - Level 5"
                  className="h-6"
                />
              </div>
              <div className="relative">
                <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap overflow-y-auto">
                  [![ATLAS Framework
                  Level](https://img.shields.io/badge/ATLAS_Framework-Level_5-52C9A4)](https://atlas-framework.com/levels/#level5)
                </pre>
                <button
                  className="absolute top-2 right-2 p-1 bg-white rounded-md hover:bg-gray-200 transition-colors"
                  onClick={() =>
                    copyToClipboard(
                      "[![ATLAS Framework Level](https://img.shields.io/badge/ATLAS_Framework-Level_5-52C9A4)](https://atlas-framework.com/levels/#level5)",
                      "level5",
                    )
                  }
                  title="Copy to clipboard"
                >
                  {copiedStates["level5"] ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <ClipboardCopy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Level 6 */}
            <div className="border rounded p-4">
              <p className="font-medium text-base mb-3">Level 6 - Visual Symphony</p>
              <div className="mb-3">
                <img
                  src="https://img.shields.io/badge/ATLAS_Framework-Level_6-8FEDC7"
                  alt="ATLAS Framework - Level 6"
                  className="h-6"
                />
              </div>
              <div className="relative">
                <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap overflow-y-auto">
                  [![ATLAS Framework
                  Level](https://img.shields.io/badge/ATLAS_Framework-Level_6-8FEDC7)](https://atlas-framework.com/levels/#level6)
                </pre>
                <button
                  className="absolute top-2 right-2 p-1 bg-white rounded-md hover:bg-gray-200 transition-colors"
                  onClick={() =>
                    copyToClipboard(
                      "[![ATLAS Framework Level](https://img.shields.io/badge/ATLAS_Framework-Level_6-8FEDC7)](https://atlas-framework.com/levels/#level6)",
                      "level6",
                    )
                  }
                  title="Copy to clipboard"
                >
                  {copiedStates["level6"] ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <ClipboardCopy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Level 7 */}
            <div className="border rounded p-4">
              <p className="font-medium text-base mb-3">Level 7 - Prompt-to-Product Genesis</p>
              <div className="mb-3">
                <img
                  src="https://img.shields.io/badge/ATLAS_Framework-Level_7-B1FBD5"
                  alt="ATLAS Framework - Level 7"
                  className="h-6"
                />
              </div>
              <div className="relative">
                <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap overflow-y-auto">
                  [![ATLAS Framework
                  Level](https://img.shields.io/badge/ATLAS_Framework-Level_7-B1FBD5)](https://atlas-framework.com/levels/#level7)
                </pre>
                <button
                  className="absolute top-2 right-2 p-1 bg-white rounded-md hover:bg-gray-200 transition-colors"
                  onClick={() =>
                    copyToClipboard(
                      "[![ATLAS Framework Level](https://img.shields.io/badge/ATLAS_Framework-Level_7-B1FBD5)](https://atlas-framework.com/levels/#level7)",
                      "level7",
                    )
                  }
                  title="Copy to clipboard"
                >
                  {copiedStates["level7"] ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <ClipboardCopy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Tools & Platforms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-[#1A3234] p-4 h-20 flex items-center">
            <h3 className="text-xl font-semibold text-white">AI Development Tools</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/features/copilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub Copilot
                </a>{" "}
                - AI pair programmer
              </li>
              <li>
                <a
                  href="https://cursor.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Cursor
                </a>{" "}
                - AI-first code editor
              </li>
              <li>
                <a
                  href="https://codeium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Codeium
                </a>{" "}
                - Free AI coding assistant
              </li>
              <li>
                <a
                  href="https://www.tabnine.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Tabnine
                </a>{" "}
                - AI code completion
              </li>
              <li>
                <a
                  href="https://aws.amazon.com/codewhisperer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Amazon CodeWhisperer
                </a>{" "}
                - AI coding companion
              </li>
              <li>
                <a
                  href="https://www.jetbrains.com/ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  JetBrains AI Assistant
                </a>{" "}
                - AI assistant for JetBrains IDEs
              </li>
              <li>
                <a
                  href="https://claude.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Anthropic Claude
                </a>{" "}
                - Advanced AI assistant with code capabilities
              </li>
            </ul>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-[#1A3234] p-4 h-20 flex items-center">
            <h3 className="text-xl font-semibold text-white">Low-Code & AI Generation Platforms</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="https://powerapps.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Microsoft Power Platform
                </a>{" "}
                - Business application platform with Copilot
              </li>
              <li>
                <a
                  href="https://www.appsmith.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Appsmith
                </a>{" "}
                - Open-source low-code builder with AI features
              </li>
              <li>
                <a
                  href="https://www.outsystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  OutSystems
                </a>{" "}
                - Enterprise low-code platform with AI Mentor
              </li>
              <li>
                <a
                  href="https://www.mendix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Mendix
                </a>{" "}
                - Low-code application development with AI features
              </li>
              <li>
                <a
                  href="https://bolt.new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Bolt.new
                </a>{" "}
                - AI-powered web app generator
              </li>
              <li>
                <a
                  href="https://www.lovable.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Lovable
                </a>{" "}
                - AI app generation platform
              </li>
              <li>
                <a
                  href="https://v0.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  v0
                </a>{" "}
                - Vercel's AI-powered UI generation tool
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-[#1A3234] p-4 h-20 flex items-center">
            <h3 className="text-xl font-semibold text-white">Documentation & Code Quality Tools</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="https://mintlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Mintlify
                </a>{" "}
                - AI-powered documentation platform
              </li>
              <li>
                <a
                  href="https://swimm.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Swimm
                </a>{" "}
                - Code-coupled documentation tool
              </li>
              <li>
                <a
                  href="https://www.sonarqube.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  SonarQube with AI
                </a>{" "}
                - Code quality and security platform
              </li>
              <li>
                <a
                  href="https://sdlcgenius.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  SDLC Genius
                </a>{" "}
                - AI-powered software development lifecycle assistant
              </li>
            </ul>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-[#1A3234] p-4 h-20 flex items-center">
            <h3 className="text-xl font-semibold text-white">AI Code Generation Tools</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/AntonOsika/gpt-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GPT Engineer
                </a>{" "}
                - AI tool for generating entire codebases
              </li>
              <li>
                <a
                  href="https://github.com/smol-ai/developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Smol Developer
                </a>{" "}
                - Small, lightweight AI coding assistant
              </li>
              <li>
                <a
                  href="https://www.cognition-labs.com/devin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Devin
                </a>{" "}
                - AI software engineer
              </li>
              <li>
                <a
                  href="https://claude.ai/claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Claude Code
                </a>{" "}
                - Anthropic's code generation tool
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden shadow-sm mb-8">
        <div className="bg-[#1A3234] p-4 h-20 flex items-center">
          <h3 className="text-xl font-semibold text-white">Traditional Development Tools</h3>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visual Studio Code
              </a>{" "}
              - Popular code editor (without AI features)
            </li>
            <li>
              <a
                href="https://www.eclipse.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Eclipse
              </a>{" "}
              - Integrated development environment
            </li>
            <li>
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Git
              </a>{" "}
              - Version control system
            </li>
            <li>
              <a
                href="https://junit.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Testing Frameworks
              </a>{" "}
              - Tools for manual and automated testing
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#1A3234]/10 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Community & Support</h2>
        <p className="mb-4">
          Join our community of developers and organizations implementing the ATLAS Framework. Share experiences,
          challenges, and solutions.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="https://github.com/SoftoDev/atlas-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              GitHub Repository
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}

