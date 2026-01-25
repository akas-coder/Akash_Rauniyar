import { motion } from "framer-motion";
import { useState } from "react";
import ContactOptions from "../ui/ContactOptions";

export default function Hero() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <section className="min-h-[calc(100vh-4rem)] flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-6 items-center">

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:pr-4"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hi, I’m Akash <br /> I Build Web Applications
            </h1>

            <p className="mt-6 text-neutral-400 max-w-xl">
              A third-year engineering student with a strong technical
              foundation in problem solving, data structures, and full-stack
              development. I enjoy building scalable web applications that focus
              on clean architecture, performance, and real-world usability.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition"
              >
                View My Work
              </a>

              {/* CONTACT BUTTON */}
              <button
                onClick={() => setOpenContact(true)}
                className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-indigo-500 transition"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-2xl border border-neutral-800 bg-neutral-900 flex items-center justify-center">
              <img
                src="/profile.jpeg"
                alt="Akash profile"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* CONTACT OPTIONS MODAL */}
      <ContactOptions
        open={openContact}
        onClose={() => setOpenContact(false)}
      />
    </>
  );
}
