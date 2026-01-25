import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 mt-10">
      <a
        href="https://github.com/akas-coder"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="p-3 rounded-full border border-neutral-800 hover:border-indigo-500 hover:scale-110 transition"
      >
        <Github size={22} />
      </a>

      <a
        href="https://www.linkedin.com/in/akash-rauniyar-62866132b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="p-3 rounded-full border border-neutral-800 hover:border-indigo-500 hover:scale-110 transition"
      >
        <Linkedin size={22} />
      </a>

      <a
        href="mailto:rauniyarakash144@gmail.com"
        aria-label="Email"
        className="p-3 rounded-full border border-neutral-800 hover:border-indigo-500 hover:scale-110 transition"
      >
        <Mail size={22} />
      </a>
    </div>
  );
}
