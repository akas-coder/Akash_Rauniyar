import { Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, github }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="border border-neutral-800 rounded-2xl p-5 bg-neutral-900/70 hover:border-indigo-500 transition"
    >
      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="text-sm text-neutral-400 mt-3">
        {desc}
      </p>

      <div className="mt-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-indigo-400 transition"
        >
          <Github size={16} />
          View Source Code
        </a>
      </div>
    </motion.div>
  );
}
