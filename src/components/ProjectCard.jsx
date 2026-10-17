import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-violet-400/40"
    >
      {/* Project Preview */}
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-violet-950 via-[#111827] to-cyan-950">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_65%)]" />

            <div className="relative px-4 text-center transition duration-500 group-hover:scale-105">
              <FaCode className="mx-auto text-5xl text-cyan-300" />

              <p className="mt-4 break-words text-2xl font-bold tracking-wide sm:text-3xl">
                {project.title}
                <span className="text-violet-400">.</span>
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {project.category || "Web Development Project"}
              </p>
            </div>
          </>
        )}

        {/* Project Number */}
        {project.number && (
          <span className="absolute left-5 top-5 rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-slate-200 backdrop-blur-sm">
            PROJECT {project.number}
          </span>
        )}
      </div>

      {/* Project Details */}
      <div className="p-6 md:p-8">
        <h2 className="text-xl font-bold sm:text-2xl">{project.title}</h2>

        {project.description && (
          <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
        )}

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Project Links */}
        {(project.github || project.demo) && (
          <div className="mt-7 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                <FaGithub />
                GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg bg-violet-600 px-3 text-sm font-medium text-white transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                Live Demo
                <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
          </div>
        )}

        {!project.github && !project.demo && (
          <p className="mt-6 border-t border-white/10 pt-4 text-xs text-slate-500">
            Project links coming soon.
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
