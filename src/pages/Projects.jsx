import { useState } from "react";
import { motion } from "motion/react";
import { FaCodeBranch, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

const categories = [
  "All Projects",
  "Portfolio",
  "Landing Page",
  "E-commerce",
  "Web Application",
  "Business Website",
  "Mobile App",
  "Other Projects",
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) =>
          project.categories?.includes(activeCategory),
        );

  return (
    <main className="min-h-screen bg-[#080b16] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <FaCodeBranch />
            My Portfolio
          </span>

          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Explore my work by project type and discover the websites and
            applications I have built.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-violet-400 ${
                  isActive
                    ? "border-violet-500 bg-violet-600 text-white shadow-lg shadow-violet-950/30"
                    : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Count */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <p className="text-sm text-slate-400">
            Showing{" "}
            <span className="font-semibold text-violet-300">
              {activeCategory}
            </span>
          </p>

          <p className="text-sm text-slate-400">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "Project" : "Projects"}
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-16 text-center">
            <h2 className="text-2xl font-bold">No Projects Found</h2>

            <p className="mx-auto mt-3 max-w-md leading-7 text-slate-400">
              No projects are available in this category yet. Add a project with
              this type to display it here.
            </p>

            <button
              type="button"
              onClick={() => setActiveCategory("All Projects")}
              className="mt-6 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-500"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-950/40 to-cyan-950/30 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            Let&apos;s work together to turn your ideas into useful digital
            experiences.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            Contact Me
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Projects;
