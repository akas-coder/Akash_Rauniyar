import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  return (
<section id="certifications" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border border-neutral-800 rounded-2xl p-5 bg-neutral-900/60 hover:border-indigo-500 transition"
            >
              <h3 className="text-lg font-semibold">{cert.title}</h3>

              <p className="text-sm text-neutral-400 mt-1">
                {cert.issuer}
              </p>

              <p className="text-sm text-neutral-500">
                {cert.date}
                {cert.hours ? ` · ${cert.hours}` : ""}
              </p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm mt-4 text-indigo-400 hover:underline"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
