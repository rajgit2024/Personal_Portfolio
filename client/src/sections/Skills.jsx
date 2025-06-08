"use client"

import { useState, useEffect } from "react"
import { Code, Database, Globe, Layout, Wrench } from "lucide-react"

// Our skills data - easy to understand and modify
const technologies = [
  {
    name: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: ["React", "Javascript", "Bootstrap", "Tailwind CSS", "Framer Motion"],
    position: "right",
    color: "blue", // Each section has its own color
  },
  {
    name: "Backend",
    icon: <Code className="h-6 w-6" />,
    skills: ["Node.js", "Express", "BcryptJS", "REST APIs"],
    position: "left",
    color: "purple",
  },
  {
    name: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["PostgreSQL", "MySQL", "SQL", "Firebase"],
    position: "right",
    color: "pink",
  },
  {
    name: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: ["HTML5", "CSS5", "JavaScript", "Responsive Design", "SEO"],
    position: "left",
    color: "green",
  },
  {
    name: "Other Tools",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
    position: "right",
    color: "orange",
  },
]

export default function Skills() {
  // Simple state - just track how much we've scrolled
  const [scrollPercent, setScrollPercent] = useState(0)

  // Simple scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills")
      if (!skillsSection) return

      const rect = skillsSection.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Simple calculation: how much of the section is visible?
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const scrolled = Math.max(0, windowHeight - rect.top)
        const total = rect.height + windowHeight
        const percent = Math.min(100, (scrolled / total) * 100)
        setScrollPercent(percent)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check immediately

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Helper function to get colors for each technology
  const getColors = (color) => {
    const colorMap = {
      blue: { bg: "bg-blue-500", border: "border-blue-500", text: "text-blue-600" },
      purple: { bg: "bg-purple-500", border: "border-purple-500", text: "text-purple-600" },
      pink: { bg: "bg-pink-500", border: "border-pink-500", text: "text-pink-600" },
      green: { bg: "bg-green-500", border: "border-green-500", text: "text-green-600" },
      orange: { bg: "bg-orange-500", border: "border-orange-500", text: "text-orange-600" },
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-gray-600 text-lg">My expertise across different technologies</p>
        </div>

        {/* Timeline Container - Hidden on mobile */}
        <div className="relative hidden md:block">
          {/* Center Line - Simple background with animated overlay */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-300 transform -translate-x-1/2 rounded-full">
            {/* Animated colored line */}
            <div
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500"
              style={{ height: `${scrollPercent}%` }}
            />
          </div>

          {/* Skills Cards */}
          <div className="space-y-16 py-8">
            {technologies.map((tech, index) => {
              // Calculate if this item should be active (simple math)
              const itemProgress = ((index + 1) / technologies.length) * 100
              const isActive = scrollPercent >= itemProgress - 20 // Activate a bit early
              const colors = getColors(tech.color)

              return (
                <div key={tech.name} className="relative">
                  {/* Circle Icon on Timeline */}
                  <div
                    className={`absolute left-1/2 top-8 transform -translate-x-1/2 w-16 h-16 rounded-full 
                      flex items-center justify-center border-4 border-white shadow-lg z-10 transition-all duration-500 ${
                        isActive ? `${colors.bg} scale-110` : "bg-gray-300 scale-100"
                      }`}
                  >
                    <div className={isActive ? "text-white" : "text-gray-500"}>{tech.icon}</div>
                  </div>

                  {/* Skill Card */}
                  <div className={`flex ${tech.position === "right" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`w-full max-w-md transition-all duration-700 ${
                        tech.position === "right" ? "mr-12" : "ml-12"
                      } ${isActive ? "opacity-100 translate-y-0" : "opacity-50 translate-y-4"}`}
                    >
                      <div
                        className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 ${
                          isActive ? colors.border : "border-gray-200"
                        }`}
                      >
                        {/* Card Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 rounded-lg ${isActive ? colors.bg : "bg-gray-100"}`}>
                            <div className={isActive ? "text-white" : "text-gray-500"}>{tech.icon}</div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-3">
                          <p className="text-gray-600 font-medium">Technologies & Tools:</p>
                          <div className="flex flex-wrap gap-2">
                            {tech.skills.map((skill, skillIndex) => (
                              <span
                                key={skill}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                                  isActive ? `${colors.bg} text-white` : "bg-gray-100 text-gray-600"
                                }`}
                                style={{
                                  transitionDelay: isActive ? `${skillIndex * 100}ms` : "0ms",
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>Proficiency</span>
                            <span className={isActive ? colors.text : "text-gray-400"}>
                              {isActive ? "Active" : "Scroll to activate"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Version - Uses same card design but stacked */}
        <div className="md:hidden mt-12">
          <div className="space-y-8">
            {technologies.map((tech, index) => {
              const colors = getColors(tech.color)
              const isActive = scrollPercent >= (index + 1) * 20

              return (
                <div key={`mobile-${tech.name}`} className={`transition-all duration-500 opacity-100`}>
                  <div
                    className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 ${
                      isActive ? colors.border : "border-gray-200"
                    }`}
                  >
                    {/* Card Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${isActive ? colors.bg : "bg-gray-100"}`}>
                        <div className={isActive ? "text-white" : "text-gray-500"}>{tech.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3">
                      <p className="text-gray-600 font-medium">Technologies & Tools:</p>
                      <div className="flex flex-wrap gap-2">
                        {tech.skills.map((skill, skillIndex) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                              isActive ? `${colors.bg} text-white` : "bg-gray-100 text-gray-600"
                            }`}
                            style={{
                              transitionDelay: isActive ? `${skillIndex * 100}ms` : "0ms",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Proficiency</span>
                        <span className={isActive ? colors.text : "text-gray-400"}>
                          {isActive ? "Active" : "Scroll to activate"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
