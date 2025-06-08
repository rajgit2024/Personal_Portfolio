"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone, Code, Heart } from "lucide-react"

export default function Footer() {
  // State for hover effects
  const [hoveredLink, setHoveredLink] = useState(null)

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  // Social media links
  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/rajgit2024",
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/raj-dubey-21a650258/",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      icon: Mail,
      name: "Email",
      url: "rajdu590@gmail.com",
      color: "hover:bg-red-500 hover:text-white",
    },
  ]

  // Contact information
  const contactInfo = [
    { icon: Mail, text: "rajdu590@gmail.com" },
    { icon: Phone, text: "+91-7908315693 " },
  ]

  return (
    <footer id="footer" className="relative pt-16 pb-10 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-600 p-1.5 rounded-md">
                <Code className="h-5 w-5" />
              </span>
              Raj Dubey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A passionate full stack developer creating modern web applications with cutting-edge technologies.
            </p>
            <div className="pt-4">
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>and React</span>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  onHoverStart={() => setHoveredLink(link.name)}
                  onHoverEnd={() => setHoveredLink(null)}
                >
                  <a
                    href={link.href}
                    className={`text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        hoveredLink === link.name ? "bg-blue-600" : "bg-gray-300"
                      } group-hover:bg-blue-600 transition-colors`}
                    ></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 p-1.5 bg-gray-100 rounded-md text-gray-600">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-gray-600">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm ${social.color} transition-all duration-300`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup Teaser */}
            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-800 mb-2">Stay updated with my latest projects</p>
              <a
                href="#contact"
                className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                Contact me <ArrowUp className="h-3 w-3 rotate-45" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Raj Dubey. All rights reserved.</p>

          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              whileHover={{ y: -3, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
