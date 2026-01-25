import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  return (
<section id="experience" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8">Experience</h2>

        <div className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/60">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">
                Intern – Web, Mobile Development & Marketing
              </h3>

              <p className="text-sm text-neutral-400 mt-1">
                IBM Developer Skills Network · Virtual Internship
              </p>

              <p className="text-sm text-neutral-500">
                6 Sept- 7 Nov
              </p>
            </div>

            {/* CERTIFICATE LINK */}
            <a
              href="https://courses.ibmmooc.skillsnetwork.site/certificates/854112988562466faafa1d57a316d29a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-neutral-700 hover:border-indigo-500 hover:text-indigo-400 transition"
            >
              View Certificate
              <ExternalLink size={16} />
            </a>
          </div>

          <ul className="list-disc list-inside space-y-2 text-neutral-300 mt-6">
            <li>
              Completed a Project-Based Experiential Learning (PBEL) virtual
              internship focused on web and mobile development fundamentals.
            </li>
            <li>
              Gained practical exposure to frontend technologies, responsive
              UI design, and basic mobile application workflows.
            </li>
            <li>
              Learned industry-aligned development practices and user-centric
              application design approaches.
            </li>
            <li>
              Developed foundational understanding of technology-driven
              digital marketing strategies.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
