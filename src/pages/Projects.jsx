import { motion } from "motion/react";
import { FaCodeBranch, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

function Projects() {
  return (
    <main className="min-h-screen bg-[#080b16] px-6 py-20 text-white md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Recent Work
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h1 className="text-4xl font-bold md:text-6xl">
              Featured <span className="text-violet-400">Projects</span>
            </h1>

            <p className="max-w-md leading-7 text-slate-400">
              Explore my projects, the technologies I use, and the practical
              problems I'm learning to solve through web development.
            </p>
          </div>
        </motion.div>

        {/* Project Summary */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
        >
          <div>
            <p className="text-sm text-slate-400">Projects in my portfolio</p>

            <p className="mt-1 text-3xl font-bold text-white">
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-lg text-violet-400">
              <FaCodeBranch />
            </span>

            <div>
              <p className="font-semibold text-white">Learning by Building</p>
              <p className="mt-1 text-sm text-slate-400">
                Practice, improve, and create
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project Cards */}
        {projects.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
            <FaCodeBranch className="mx-auto text-3xl text-violet-400" />

            <h2 className="mt-5 text-xl font-bold">Projects Coming Soon</h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              I'm working on projects to showcase here. Please check back soon.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-white/[0.02] to-cyan-400/5 p-8 text-center sm:p-10"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            Let's connect and discuss how I can help turn your idea into a
            useful web experience.
          </p>

          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3.5 font-semibold text-white transition duration-300 hover:from-violet-500 hover:to-cyan-500"
          >
            Let's Talk
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

export default Projects;
