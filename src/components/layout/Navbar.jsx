import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Inline LeetCode SVG Icon
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="transition-transform group-hover:scale-110">
    <path d="M16.102 17.93l-2.697 2.607c-.466.451-1.211.451-1.677 0l-4.51-4.359a2.506 2.506 0 0 1 0-3.538l3.626-3.503a.501.501 0 0 1 .709.006l.707.707a.501.501 0 0 1-.007.71l-3.617 3.493a1.002 1.002 0 0 0 0 1.414l4.51 4.359c.188.181.505.181.693 0l2.69-2.599a.501.501 0 0 1 .707.006l.707.707a.501.501 0 0 1-.007.71zm.332-9.75l-.007-.007c-.466-.451-1.211-.451-1.677 0l-4.51 4.359a2.506 2.506 0 0 1 0 3.538l.007.007a.501.501 0 0 1 .707-.006l.707-.707a.501.501 0 0 1-.006-.71l-4.51-4.359c-.188-.181-.505-.181-.693 0l4.51-4.359c.466-.451 1.211-.451 1.677 0l4.51 4.359c.188.181.505.181.693 0l-.707-.707a.501.501 0 0 1-.006-.71z"/>
  </svg>
);

// Inline CodeChef Chef Hat SVG Icon
const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" className="transition-transform group-hover:scale-110">
    <path d="M6 18V6c0-1.5 1-2.5 2.5-2.5h7c1.5 0 2.5 1 2.5 2.5v12" />
    <path d="M3 18h18a1 1 0 0 1 1 1v2c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1v-2c0-.5.5-1 1-1z" />
    <circle cx="12" cy="7" r="1" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-350 ${
        scrolled
          ? "bg-[#121212] border-b border-neutral-800/80 py-3.5 shadow-xl shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        
        {/* BRAND */}
        <a href="#home" className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="font-extrabold text-lg md:text-xl tracking-tight text-white uppercase font-display">
            Akash
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs font-bold tracking-widest text-neutral-300 hover:text-white transition-colors duration-200 uppercase relative group"
                >
                  {link.name}
                  <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Socials & Connect Button */}
          <div className="flex items-center gap-3 ml-2">
            <div className="flex gap-1.5">
              <a
                href="https://github.com/akas-coder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon-btn group"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-rauniyar-62866132b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon-btn group"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://leetcode.com/u/Akash_Rauniyar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="social-icon-btn group"
              >
                <LeetCodeIcon />
              </a>
              <a
                href="https://www.codechef.com/users/akash_123_1234"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodeChef"
                className="social-icon-btn group"
              >
                <CodeChefIcon />
              </a>
              <a
                href="mailto:rauniyarakash144@gmail.com"
                aria-label="Email"
                className="social-icon-btn group"
              >
                <Mail size={16} />
              </a>
            </div>

            <a
              href="#contact"
              className="
                px-4 py-2.5 rounded-none font-bold text-xs uppercase tracking-widest border border-white text-white
                hover:bg-white hover:text-[#121212] transition-all duration-300 shadow-sm
              "
            >
              Let’s Connect
            </a>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1 hover:text-indigo-400 transition"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#121212] border-t border-neutral-800/80 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold tracking-wider text-neutral-300 hover:text-white uppercase"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex flex-col gap-4 pt-4 border-t border-neutral-800">
                <div className="flex justify-start gap-2.5">
                  <a
                    href="https://github.com/akas-coder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn group"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akash-rauniyar-62866132b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn group"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://leetcode.com/u/Akash_Rauniyar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn group"
                  >
                    <LeetCodeIcon />
                  </a>
                  <a
                    href="https://www.codechef.com/users/akash_123_1234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn group"
                  >
                    <CodeChefIcon />
                  </a>
                  <a
                    href="mailto:rauniyarakash144@gmail.com"
                    className="social-icon-btn group"
                  >
                    <Mail size={16} />
                  </a>
                </div>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 border border-white text-center text-xs font-bold uppercase text-white hover:bg-white hover:text-[#121212] transition"
                >
                  Let’s Connect
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
