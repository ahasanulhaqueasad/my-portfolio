import { useState } from "react";
import { motion } from "motion/react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

// Replace this with your real email address.
const CONTACT_EMAIL = "your-email@example.com";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: CONTACT_EMAIL,
    link: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "ahasanulhaqueasad",
    link: "https://github.com/ahasanulhaqueasad",
    external: true,
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
    value: "Visit my profile",
    link: "https://www.linkedin.com/",
    external: true,
  },
];

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-[#0c1020] px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/10";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipient = CONTACT_EMAIL;

    const subject = encodeURIComponent(formData.subject.trim());

    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\n` +
        `Email: ${formData.email.trim()}\n\n` +
        `Message:\n${formData.message.trim()}`,
    );

    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
  };

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
            Get In Touch
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Contact <span className="text-violet-400">Me</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Have a project idea, a question, or an opportunity? Feel free to
            reach out. I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
            aria-labelledby="contact-information-heading"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Let's Connect
            </p>

            <h2
              id="contact-information-heading"
              className="mt-3 text-2xl font-bold sm:text-3xl"
            >
              Let's talk about your project
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              I'm interested in web development, frontend projects, and
              opportunities to learn, collaborate, and grow.
            </p>

            {/* Contact Links */}
            <div className="mt-8 space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.1,
                  }}
                  className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/[0.05]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-400 transition duration-300 group-hover:bg-violet-500/20 group-hover:text-cyan-300">
                    {item.icon}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-slate-400">
                      {item.title}
                    </span>

                    <span className="mt-1 block break-all text-sm font-medium text-white transition group-hover:text-cyan-300">
                      {item.value}
                    </span>
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/5 text-cyan-400">
                <FaMapMarkerAlt />
              </span>

              <span>
                <span className="block font-medium text-slate-200">
                  Location
                </span>
                <span className="mt-1 block">Bangladesh</span>
              </span>
            </div>

            {/* Availability */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-green-400/10 bg-green-400/[0.04] p-4">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-400" />

              <p className="text-sm text-slate-300">
                Open to learning and collaboration opportunities
              </p>
            </div>
          </motion.section>

          {/* Contact Form */}
          <motion.section
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 md:p-8 lg:col-span-3"
            aria-labelledby="contact-form-heading"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-400">
                <FaEnvelope />
              </span>

              <div>
                <h2
                  id="contact-form-heading"
                  className="text-xl font-bold sm:text-2xl"
                >
                  Send a Message
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Fill in the form below to prepare your message.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name and Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Name <span className="text-violet-400">*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    minLength={2}
                    maxLength={100}
                    className={inputClassName}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Email <span className="text-violet-400">*</span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    maxLength={254}
                    className={inputClassName}
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject <span className="text-violet-400">*</span>
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  minLength={3}
                  maxLength={150}
                  className={inputClassName}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Your Message <span className="text-violet-400">*</span>
                  </label>

                  <span className="text-xs text-slate-500">
                    {formData.message.length}/2000
                  </span>
                </div>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  minLength={10}
                  maxLength={2000}
                  className={`${inputClassName} min-h-36 resize-y`}
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-[#080b16] sm:w-auto"
              >
                Prepare Email
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>

              {/* Informational Message */}
              {submitted && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-xl border border-green-400/20 bg-green-400/5 p-4 text-sm leading-6 text-green-300"
                >
                  <FaCheckCircle className="mt-1 shrink-0" />

                  <p>
                    Your email application should open if one is configured.
                    Review the message and send it there. This website does not
                    send or store messages itself.
                  </p>
                </div>
              )}

              <p className="text-xs leading-6 text-slate-500">
                This form opens your default email application. It does not send
                a message directly from this website.
              </p>
            </form>
          </motion.section>
        </div>
      </div>
    </main>
  );
}

export default Contact;
