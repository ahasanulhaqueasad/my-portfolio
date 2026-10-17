import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaLayerGroup,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

import asadImage from "../assets/asad.jpeg";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "DaisyUI",
  "React Router",
];

const skills = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Building interactive interfaces with React, JavaScript, and reusable components.",
    technologies: ["React", "JavaScript", "JSX"],
  },
  {
    icon: <FaLaptopCode />,
    title: "Responsive Websites",
    description:
      "Creating layouts that adapt to mobile, tablet, laptop, and desktop screens.",
    technologies: ["HTML", "CSS", "Tailwind CSS"],
  },
  {
    icon: <FaLayerGroup />,
    title: "UI Development",
    description:
      "Developing consistent user interfaces using reusable components and modern styling tools.",
    technologies: ["DaisyUI", "React", "CSS"],
  },
];

const stats = [
  {
    value: `${projects.length}+`,
    label: "Portfolio Projects",
  },
  {
    value: `${technologies.length}+`,
    label: "Technologies Listed",
  },
  {
    value: "100%",
    label: "Passion for Learning",
  },
];

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        {title} <span className="text-violet-400">{highlight}</span>
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}

function Home() {
  return (
    <main className="overflow-hidden bg-[#080b16] text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-14 px-6 py-20 md:px-12 lg:grid-cols-2 lg:gap-10">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <FaCode />
              <span>Web Developer</span>
              <span className="h-2 w-2 rounded-full bg-green-400" />
            </div>

            <p className="mb-3 text-lg text-slate-400">Hello, I'm</p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">Md Ahasanul</span>

              <span className="mt-1 block">Haque Asad</span>

              <span className="mt-3 block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-2xl text-transparent sm:text-3xl xl:text-4xl">
                Web Developer
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg lg:mx-0">
              I build modern, responsive, and user-friendly websites using React
              and modern web technologies. I turn ideas into functional digital
              experiences.
            </p>

            {/* Technology Badges */}
            <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300 sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Hero Buttons */}
            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                to="/projects"
                className="btn border-0 bg-violet-600 text-white shadow-lg shadow-violet-600/20 hover:bg-violet-500"
              >
                View My Projects <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="btn border border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <a
                href="https://github.com/ahasanulhaqueasad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition hover:border-violet-400 hover:text-violet-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          {/* Hero Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute inset-5 rounded-full bg-gradient-to-br from-violet-600 to-cyan-400 opacity-30 blur-3xl" />

              <div className="relative rounded-[2rem] bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400 p-[2px] shadow-2xl shadow-violet-900/30">
                <div className="overflow-hidden rounded-[calc(2rem-2px)] bg-[#101525]">
                  <img
                    src={asadImage}
                    alt="Md Ahasanul Haque Ashad, Web Developer"
                    className="aspect-[4/5] w-full object-cover object-center"
                  />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#111827]/95 px-4 py-3 shadow-xl sm:-left-8"
              >
                <p className="text-xs text-slate-400">Building with</p>
                <p className="mt-1 font-semibold text-cyan-300">
                  Code & Creativity
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-extrabold text-cyan-300 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="My Recent Work"
            title="Featured"
            highlight="Projects"
            description="Explore selected projects where I practice building useful, responsive web experiences."
          />

          <div className="grid gap-7 md:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="btn border border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              View All Projects <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What I Work With"
            title="Skills &"
            highlight="Expertise"
            description="The technologies and approaches I use while developing modern websites."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="rounded-3xl border border-white/10 bg-[#080b16] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl text-violet-400">
                  {skill.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">{skill.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {skill.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              A Little About Me
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Turning Ideas Into{" "}
              <span className="text-violet-400">Digital Experiences</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              I'm Asad, a web developer focused on learning modern frontend
              technologies and creating useful, accessible, and responsive
              websites. I enjoy solving problems, improving my code, and turning
              ideas into working projects.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Reusable and maintainable components",
                "Responsive layouts for different screen sizes",
                "Continuous learning and improvement",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-cyan-400" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn mt-8 border-0 bg-violet-600 text-white hover:bg-violet-500"
            >
              More About Me <FaArrowRight />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-8 md:p-12"
          >
            <FaRocket className="text-4xl text-cyan-300" />

            <h3 className="mt-6 text-2xl font-bold">
              Always Learning, Always Building
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Every project is an opportunity to learn something new, write
              better code, and build a stronger development portfolio.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-sm text-slate-300">
                Problem Solving
              </span>
              <span className="rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-sm text-slate-300">
                Clean Code
              </span>
              <span className="rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-sm text-slate-300">
                Growth Mindset
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="px-6 pb-20 md:px-12 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-500/15 to-cyan-500/10 px-6 py-14 text-center md:px-12 md:py-20"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Get In Touch
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
              Have a Project in <span className="text-violet-400">Mind?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              Have an idea, a question, or a potential collaboration? Let's
              connect and discuss what we can build.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn border-0 bg-violet-600 text-white hover:bg-violet-500"
              >
                <FaEnvelope /> Contact Me <FaArrowRight />
              </Link>

              <a
                href="https://github.com/ahasanulhaqueasad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                <FaGithub /> Explore GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default Home;
