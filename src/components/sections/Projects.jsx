import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, Shield, Award, Code, BookOpen } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { certifications } from "../../data/certifications";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Tab 1");

  // Experience timeline data inline
  const experiences = [
    {
      role: "Intern – Web, Mobile Development & Marketing",
      company: "IBM Developer Skills Network",
      type: "Virtual Internship",
      date: "Sept 2025 - Nov 2025",
      link: "https://courses.ibmmooc.skillsnetwork.site/certificates/854112988562466faafa1d57a316d29a",
      bullets: [
        "Completed a Project-Based Experiential Learning (PBEL) virtual internship focused on web and mobile development fundamentals.",
        "Gained practical exposure to frontend technologies, responsive UI design, and basic mobile application workflows.",
        "Learned industry-aligned development practices and user-centric application design approaches.",
        "Developed foundational understanding of technology-driven digital marketing strategies."
      ]
    }
  ];

  // Helper for certification icons
  const getIssuerIcon = (issuer) => {
    const name = issuer.toLowerCase();
    if (name.includes("aws")) return <Shield className="text-amber-500" size={20} />;
    if (name.includes("ibm")) return <Award className="text-cyan-500" size={20} />;
    if (name.includes("guvi")) return <Code className="text-emerald-500" size={20} />;
    if (name.includes("deloitte") || name.includes("jpmorgan")) 
      return <Briefcase className="text-indigo-500" size={20} />;
    if (name.includes("tcs")) return <Award className="text-orange-500" size={20} />;
    if (name.includes("simplilearn")) return <Code className="text-blue-500" size={20} />;
    if (name.includes("udemy")) return <BookOpen className="text-rose-500" size={20} />;
    return <Award className="text-indigo-500" size={20} />;
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase mb-4">
          Projects & Accomplishments
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
          Explore my academic coding projects, industry certifications, and professional training milestones.
        </p>

        {/* Space Tab Headers */}
        <div className="flex justify-center mt-10">
          <div className="flex w-full max-w-lg bg-[#15151c]/60 border border-white/10 rounded-full overflow-hidden p-1 shadow-lg">
            {["Tab 1", "Tab 2", "Tab 3"].map((tab, idx) => {
              const label = idx === 0 ? "Projects" : idx === 1 ? "Certifications" : "Timeline";
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    flex-1 py-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full
                    ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-600/10"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="mt-14 min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "Tab 1" && (
            <motion.div
              key="tab1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  desc={project.desc}
                  github={project.github}
                  live={project.live}
                  tags={project.tags}
                />
              ))}
            </motion.div>
          )}

          {activeTab === "Tab 2" && (
            <motion.div
              key="tab2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
            >
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#15151c]/65 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group shadow-lg"
                >
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-md">
                        {getIssuerIcon(cert.issuer)}
                      </div>
                      <span className="text-[10px] font-bold text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors duration-200 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-semibold mt-2">
                      {cert.issuer} {cert.hours ? ` • ${cert.hours}` : ""}
                    </p>
                  </div>

                  {cert.link && (
                    <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-400 hover:text-indigo-400 transition-colors duration-200"
                      >
                        View Credential <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "Tab 3" && (
            <motion.div
              key="tab3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="text-left max-w-3xl mx-auto pl-4 border-l-2 border-white/10 relative"
            >
              {experiences.map((exp, index) => (
                <div key={index} className="relative pb-6 pl-6">
                  {/* Pin Dot */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#06060c] border-2 border-indigo-500 shadow-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  </span>

                  <div className="bg-[#15151c]/65 border border-white/10 rounded-3xl p-6 hover:border-indigo-500/40 transition-all duration-300 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          {exp.role}
                        </h3>
                        <p className="text-xs font-bold text-indigo-400 mt-1 flex items-center gap-2">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1 font-semibold text-neutral-400">
                            <MapPin size={10} /> {exp.type}
                          </span>
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[10px] font-bold text-neutral-400 bg-white/5 border border-white/10 px-2 py-1 rounded">
                          <Calendar size={10} className="inline mr-1" /> {exp.date}
                        </span>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-400 hover:text-indigo-300 border border-indigo-500/30 hover:border-indigo-500 bg-indigo-950/20 px-2.5 py-1 rounded transition"
                          >
                            Certificate <ExternalLink size={10} />
                          </a>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2 text-neutral-400 text-sm">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="text-indigo-500 mt-1.5 text-xs select-none">✦</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
