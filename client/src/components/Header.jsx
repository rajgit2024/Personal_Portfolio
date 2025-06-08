import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [isMenuOpen])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Project", href: "#project" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    {name: "Footer", href:"#footer"}
  ]

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="flex items-center gap-2 text-primary">Portfolio</a>
        </motion.div>

        {!isMobile ? (
          <nav className="flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.div key={item.name} custom={i} initial="hidden" animate="visible" variants={navItemVariants}>
                <a href={item.href} className="text-sm font-medium hover:text-blue-600 transition-colors">
                  {item.name}
                </a>
              </motion.div>
            ))}
            <motion.div custom={navItems.length} initial="hidden" animate="visible" variants={navItemVariants}>
              <a href="#contact" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Get In Touch
              </a>
            </motion.div>
          </nav>
        ) : (
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="z-50 p-2 bg-transparent border-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <motion.div
          className="fixed inset-0 bg-white pt-20 px-6 z-40"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
          style={{ display: isMenuOpen ? "block" : "none" }}
        >
          <nav className="flex flex-col gap-6">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={item.href}
                  className="text-xl font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
            <a
              href="#Contact"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Get In Touch
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
