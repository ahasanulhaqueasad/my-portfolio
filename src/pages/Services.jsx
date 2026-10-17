import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaTools,
  FaArrowRight,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    number: "01",
    title: "Website Development",
    description:
      "Modern websites for personal portfolios, small businesses, and brands, with a focus on usability and clean design.",
    tags: ["React", "JavaScript"],
    features: [
      "Reusable UI components",
      "Clear page structure",
      "User-friendly navigation",
    ],
  },
  {
    icon: <FaMobileAlt />,
    number: "02",
    title: "Responsive Web Design",
    description:
      "Responsive layouts that adapt to mobile phones, tablets, laptops, and desktop screens.",
    tags: ["Tailwind CSS", "DaisyUI"],
    features: [
      "Mobile-friendly layouts",
      "Flexible page sections",
      "Consistent visual styling",
    ],
  },
  {
    icon: <FaPalette />,
    number: "03",
    title: "Frontend Development",
    description:
      "Interactive user interfaces with reusable components, smooth navigation, and thoughtful visual details.",
    tags: ["React", "React Router"],
    features: [
      "Interactive UI elements",
      "Component-based structure",
      "Client-side navigation",
    ],
  },
  {
    icon: <FaTools />,
    number: "04",
    title: "Website Improvements",
    description:
      "Frontend updates to improve existing pages, fix styling issues, and make layouts work better on different screens.",
    tags: ["CSS", "JavaScript"],
    features: [
      "Layout and styling fixes",
      "Responsive adjustments",
      "UI consistency improvements",
    ],
  },
];

function Services() {
  return (
    <main className="min-h-screen bg-[#080b16] px-5 py-16 text-white sm:px-6 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            What I Can Do
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            My <span className="text-violet-400">Services</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            I focus on building responsive, user-friendly web interfaces with
            modern frontend technologies.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.05] sm:p-7 md:p-9"
            >
              {/* Decorative Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/5 blur-3xl transition duration-500 group-hover:bg-violet-500/15" />

              {/* Icon and Number */}
              <div className="relative flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/10 bg-violet-500/10 text-2xl text-violet-400 transition duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/20 group-hover:text-cyan-300">
                  {service.icon}
                </div>

                <span className="text-sm font-semibold tracking-widest text-slate-600">
                  {service.number}
                </span>
              </div>

              {/* Title and Description */}
              <h2 className="relative mt-7 text-xl font-bold transition-colors group-hover:text-violet-300 sm:text-2xl">
                {service.title}
              </h2>

              <p className="relative mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative mt-5 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="relative mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-cyan-300 transition hover:border-cyan-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-white/[0.02] to-cyan-500/10 p-7 text-center sm:p-9 md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/5 text-2xl text-cyan-400">
              <FaCode />
            </span>

            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Have an idea for a website or need help improving an existing
              page? Let's discuss your requirements.
            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-[#080b16]"
            >
              Let's Talk
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default Services;
