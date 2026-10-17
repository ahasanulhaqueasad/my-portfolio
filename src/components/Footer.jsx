import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080b16] px-6 pb-6 pt-14 text-white md:px-12 md:pt-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="Md Ahasanul Haque Ashad - Home"
            >
              <span className="flex h-12 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 px-3 text-lg font-extrabold text-white transition duration-300 group-hover:border-cyan-400/50 group-hover:shadow-lg group-hover:shadow-violet-500/10">
                ASAD<span className="text-cyan-400">.</span>
              </span>
            </Link>

            <h2 className="mt-5 text-lg font-bold sm:text-xl">
              Md Ahasanul Haque Ashad
            </h2>

            <p className="mt-2 text-sm font-medium text-cyan-300">
              Web Developer
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Building modern, responsive, and user-friendly web experiences
              with React and modern frontend technologies. Always learning,
              improving, and creating.
            </p>

            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-cyan-300"
            >
              Let's work together
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base font-bold">Quick Links</h3>

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col gap-x-5 gap-y-4"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 opacity-60 transition group-hover:bg-cyan-300 group-hover:opacity-100" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-base font-bold">Connect With Me</h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Interested in a project or collaboration? Feel free to connect
              with me.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/ahasanulhaqueasad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-400/10 hover:text-violet-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <FaLinkedinIn />
              </a>

              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-400/10 hover:text-violet-300"
              >
                <FaArrowUp />
              </button>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-400/15 bg-green-400/5 px-3 py-2 text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Open to learning & opportunities
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            © {currentYear} Md Ahasanul Haque Ashad. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
            Built with
            <FaCode className="text-violet-400" />
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
