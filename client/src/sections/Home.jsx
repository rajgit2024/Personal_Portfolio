import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import Header from "../components/Header";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-32"
    >
      <Header/>
      <div className="absolute inset-0 -z-10 md:pt-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-white dark:to-gray-950"
          style={{ opacity }}
        />

        {/* Background Shapes */}
        <motion.div
          className="absolute top-20 right-[10%] h-64 w-64 rounded-full bg-purple-500/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] h-80 w-80 rounded-full bg-purple-500/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-[30%] left-[15%] h-40 w-40 rounded-full bg-purple-500/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center z-10"
        style={{ y, opacity }}
      >
        {/* Left Content */}
        <motion.div
          className="flex flex-col items-start text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to my portfolio
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <span className="text-purple-600">Raj Dubey</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-medium text-gray-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-gray-500 md:text-lg mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I create beautiful, functional, and responsive web applications with modern technologies and best practices.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a
              href="#project"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href="https://github.com/rajgit2024" target="_blank" className="hover:text-purple-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/raj-dubey-21a650258/" target="_blank" className="hover:text-purple-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image and Badges */}
        <motion.div
          className="relative order-1 lg:order-2 mx-auto lg:mx-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-[280px] md:w-[400px] aspect-square">
            <img
              src={require("../assets/myProfile.jpg")}
              alt="Profile"
              className="rounded-xl w-full h-full"
            />

            <div className="absolute -top-4 -left-4 w-full h-full rounded-xl border-2 border-purple-500/20 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-purple-500/5 -z-10"></div>

            {/* Skill Badges */}
            <motion.div
              className="absolute -right-16 top-10 bg-white shadow-lg rounded-full px-3 py-1 text-sm font-medium"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              React
            </motion.div>

            <motion.div
              className="absolute -left-20 top-1/3 bg-white shadow-lg rounded-full px-3 py-1 text-sm font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              NodeJs
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-12 bg-white shadow-lg rounded-full px-3 py-1 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              JavaScript
            </motion.div>

            <motion.div
              className="absolute -right-5 -bottom-5 h-20 w-20 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
            >
              5+ Years
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ArrowDown className="h-8 w-8 text-purple-600" />
      </motion.div>
    </section>
  );
}
