import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-sm font-medium transition duration-300 ${
      isActive
        ? "text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-gradient-to-r after:from-violet-500 after:to-cyan-400"
        : "text-slate-300 hover:text-cyan-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b16]/85 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 md:px-12">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2"
          aria-label="Md Ahasanul Haque Ashad - Home"
        >
          <span className="flex h-10 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 px-3 text-lg font-extrabold text-white transition duration-300 group-hover:border-cyan-400/50 group-hover:shadow-lg group-hover:shadow-violet-500/10">
            ASAD<span className="text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={navLinkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="group hidden items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:border-violet-400/60 hover:bg-violet-500/20 md:inline-flex"
        >
          Let's Talk
          <FaArrowRight className="text-xs text-cyan-300 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/40 hover:text-cyan-400 md:hidden"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <FaTimes size={19} /> : <FaBars size={19} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#080b16]/95 px-5 pb-5 pt-3 backdrop-blur-xl md:hidden sm:px-6"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-sm font-medium transition duration-300 ${
                    isActive
                      ? "border border-cyan-400/10 bg-cyan-400/10 text-cyan-300"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-4 py-3.5 text-sm font-semibold text-white transition hover:from-violet-500 hover:to-cyan-500"
            >
              Let's Talk <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
