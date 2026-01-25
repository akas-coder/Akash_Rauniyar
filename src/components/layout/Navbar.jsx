import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* BRAND */}
        <span className="font-semibold tracking-wide text-sm md:text-base text-neutral-900 dark:text-neutral-100">
          Akash Rauniyar <span className="text-neutral-500">· Portfolio</span>
        </span>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-indigo-500 transition"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden bg-white/90 dark:bg-neutral-950/90 backdrop-blur border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-indigo-500 transition"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggle}
              className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              Toggle Theme
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
