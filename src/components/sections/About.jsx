import { motion } from "framer-motion";
import { skills } from "../../data/skills";

export default function About() {
  return (
    
      <section id="about" className="max-w-6xl mx-auto px-4 py-20">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>

        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl">
          I come from 666666a technical background with hands-on experience in data
          structures, backend development, and modern frontend technologies. I
          focus on writing clean, understandable code and building practical
          applications that solve real problems.
        </p>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map(skill => (
            <div
              key={skill}
              className="
                rounded-xl px-4 py-3 text-center text-sm font-medium
                bg-neutral-100 text-neutral-800
                dark:bg-neutral-900 dark:text-neutral-200
                border border-neutral-200 dark:border-neutral-800
                hover:border-indigo-500
                hover:text-indigo-600 dark:hover:text-indigo-400
                transition-all duration-200
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
