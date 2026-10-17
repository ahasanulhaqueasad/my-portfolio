import { motion } from "motion/react";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaCode />,
    title: "Clean Code",
    description: "Writing readable, organized, and maintainable code.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Responsive Design",
    description:
      "Building user-friendly interfaces for mobile, tablet, and desktop.",
  },
  {
    icon: <FaRocket />,
    title: "Modern Web",
    description: "Developing interactive web experiences with React.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Continuous Learning",
    description: "Learning through hands-on practice and personal projects.",
  },
];

function About() {
  return (
    <main className="min-h-screen bg-[#080b16] px-6 py-20 text-white md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get to know me
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            About <span className="text-violet-400">Me</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Learn about my journey, my skills, and my passion for building
            modern web experiences.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-9"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              My Introduction
            </p>

            <h2 className="text-2xl font-bold">Md Ahasanul Haque Ashad</h2>

            <p className="mt-2 font-medium text-violet-400">Web Developer</p>

            <div className="mt-6 space-y-4 leading-8 text-slate-400">
              <p>
                Hello, I'm Asad. I'm passionate about web development and
                building modern, responsive, and user-friendly websites.
              </p>

              <p>
                I work with HTML, CSS, JavaScript, React, Tailwind CSS, and
                DaisyUI to build interactive interfaces and practical web
                projects.
              </p>

              <p>
                I'm continuously improving my programming skills through
                practice and project development. My goal is to create useful
                digital experiences and grow as a professional web developer.
              </p>
            </div>
          </motion.section>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-400">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
