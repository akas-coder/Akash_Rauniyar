import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6">
      <a
        href="https://github.com/akas-coder"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500 hover:scale-105 shadow-sm transition-all duration-200"
      >
        <Github size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/akash-rauniyar-62866132b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500 hover:scale-105 shadow-sm transition-all duration-200"
      >
        <Linkedin size={20} />
      </a>

      <a
        href="mailto:rauniyarakash144@gmail.com"
        aria-label="Email"
        className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500 hover:scale-105 shadow-sm transition-all duration-200"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}
