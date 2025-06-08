import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-purple-500/10 to-white dark:to-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative flex justify-center items-center">
            <div className="relative aspect-square overflow-hidden rounded-xl w-[20rem] h-[20rem] sm:w-72 sm:h-72 md:h-[26rem] md:w-[26rem]">
              <img
                src={require("../assets/myProfile.jpg")}
                alt="Profile"
                width={600}
                height={600}
                className="object-cover w-full h-full "
              />
            </div>
          </motion.div>

          <div>
            <motion.div
              variants={itemVariants}
              className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-lg mb-4 font-bold"
            >
              About Me
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold tracking-tighter mb-6"
            >
              A passionate developer with a creative mindset
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 mb-4">
            Hey there! I'm Raj, a passionate and self-driven Full-Stack Developer currently pursuing my BCA at M.I.M.I.T College. I specialize in building dynamic and responsive web applications using the PERN stack (PostgreSQL, Express.js, React.js, and Node.js).
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 mb-6">
            My journey began with curiosity and a love for solving real-world problems through code. Since then, I've built several projects — including a complete Voting App and a Real-Time Chatting App — where I handled both frontend UI and complex backend logic.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 mb-6">
            I enjoy crafting clean and efficient code, creating user-friendly interfaces, and continuously learning new technologies to stay ahead in the fast-paced tech world. Whether it's a solo project or a team collaboration, I love turning ideas into fully functional digital experiences.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="/RajResume.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
