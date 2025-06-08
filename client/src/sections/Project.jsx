import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import voterapp from "../assets/voterap.png";
import taskPic from "../assets/Task.png"
import tiktak from "../assets/tiktak.png"
import chatting from "../assets/chatting.png"

const projects = [
  {
    id: 1,
    title: "Voting Web Application Using PERN Stack",
    description:
    "A powerful, secure, and fully functional **online voting system** built using the **PERN Stack** (PostgreSQL, Express.js, React, Node.js). This system allows users to register, vote, and view candidates, while admins manage elections and monitor real-time results.",
    image: voterapp,
    technologies: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://voting-app-git-main-raj-dubeys-projects.vercel.app/",
    codeUrl: "https://github.com/rajgit2024/Voting-App",
  },
  {
    id: 2,
    title: "Task Board Project",
    description:
      "The Task Board is a full-stack productivity web application designed to help users manage tasks efficiently. Built using the PERN Stack (PostgreSQL, Express.js, React, Node.js), it enables seamless task creation, assignment, and tracking in a visually organized interface.",
    image: taskPic,
    technologies: ["NodeJS", "ReactJS","PostgreSQL", "External API"],
    liveUrl: "https://reactjs-sample-0225-git-main-raj-dubeys-projects.vercel.app/login",
    codeUrl: "https://github.com/rajgit2024/reactjs-sample-0225 ",
  },
  {
    id: 3,
    title: " Tic Tac Toe Game ",
    description:
      "This is a classic Tic Tac Toe game built using HTML, CSS, and JavaScript, where two players take turns marking X and O in a 3×3 grid. The game detects wins, draws, and allows players to restart for a new match.",
    image: tiktak,
    technologies: ["HTML","CSS","JavaScript"],
    liveUrl: "#",
    codeUrl: "https://github.com/rajgit2024/TikTakGame",
  },
  {
    id: 4,
    title: "Chatting Web Application",
    description:
      "Our Chatting App is a modern, real-time messaging platform built with the powerful PERN (PostgreSQL, Express.js, React, Node.js) stack and Socket.IO for instant communication. It supports both private and group messaging, user authentication, and profile management — all designed for speed, simplicity, and scalability.",
    image: chatting,
    technologies: ["ReactJS", "NodeJS", "SocketIO", "PostgreSQL"],
    liveUrl: "#",
    codeUrl: "https://github.com/rajgit2024/Chatting-app",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div id="project" className="min-h-screen bg-gradient-to-b from-purple-500/10 to-white dark:to-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="overflow-hidden rounded-t-lg relative">
                <img
                 src={project.image ? project.image : require("../assets/reactjs.png")}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-fill group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 text-sm rounded hover:bg-blue-600 hover:text-white transition"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  {project.title.trim()!=="Tic Tac Toe Game" &&
                  project.title.trim()!== "Chatting Web Application" && (
                   <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  )
                  }
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
