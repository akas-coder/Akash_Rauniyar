/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Coffee, Server, Atom, Database, Key, Activity, Network, GitBranch } from "lucide-react";

const skillsList = [
  { name: "Java", icon: Coffee, color: "from-amber-500 to-red-500" },
  { name: "Spring Boot", icon: Server, color: "from-green-400 to-emerald-600" },
  { name: "React.js", icon: Atom, color: "from-cyan-400 to-blue-500" },
  { name: "MySQL", icon: Database, color: "from-blue-500 to-indigo-600" },
  { name: "JWT", icon: Key, color: "from-purple-400 to-indigo-500" },
  { name: "WebSockets", icon: Activity, color: "from-pink-500 to-rose-500" },
  { name: "Data Structures", icon: Network, color: "from-red-400 to-orange-500" },
  { name: "Git & GitHub", icon: GitBranch, color: "from-neutral-400 to-neutral-600" },
];

function SkillOrbit({ name, icon: Icon, color }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center group cursor-pointer">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
        {/* Orbital ring (dashed border rotating) */}
        <div className="absolute inset-2 rounded-full border border-dashed border-indigo-500/20 group-hover:border-indigo-400/60 transition-colors duration-500 animate-[spin_12s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite]" />
        
        {/* Outer solid glow ring */}
        <div className="absolute inset-0 rounded-full border border-white/5 group-hover:border-indigo-500/30 transition-colors duration-500" />
        
        {/* Satellite dot that orbits the center */}
        <div className="absolute inset-0 animate-[spin_8s_linear_infinite] group-hover:animate-[spin_2.5s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 shadow-[0_0_8px_#818cf8] group-hover:scale-125 transition-transform" />
        </div>

        {/* Central Planet/Sphere containing the Icon */}
        <div className="absolute inset-5 sm:inset-6 rounded-full bg-[#171721] border border-white/10 flex items-center justify-center group-hover:border-indigo-500/40 transition-all duration-300 group-hover:scale-110 shadow-lg shadow-black/45 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-white transition-colors duration-300 group-hover:scale-110" />
        </div>

        {/* Ambient background glow inside the orbit */}
        <div className={`absolute inset-4 rounded-full bg-gradient-to-tr ${color} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500`} />
      </div>
      <h3 className="text-xs font-bold text-neutral-400 group-hover:text-white mt-4 tracking-wider uppercase transition-colors duration-300">
        {name}
      </h3>
    </div>
  );
}

export default function About() {
  const containerRef = useRef(null);

  // Generate stars coordinates directly in useState initializer
  const [stars] = useState(() => 
    Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage x
      y: Math.random() * 100, // percentage y
      size: Math.random() * 1.5 + 0.8, // size: 0.8px to 2.3px
      delay: Math.random() * 2, // animation delay
      duration: Math.random() * 4 + 2, // animation duration
      opacity: Math.random() * 0.6 + 0.4, // base opacity
    }))
  );

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize coordinates from -0.5 to 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-12 relative overflow-hidden">
      {/* Background shape */}
      <div className="glow-nebula-right" />

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#15151c]/65 border border-white/10 backdrop-blur-md rounded-[45px] p-8 md:p-14 text-center z-10 relative shadow-2xl overflow-hidden"
      >
        {/* Interactive Stars Backdrop */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full animate-pulse transition-transform duration-700 ease-out"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
                transform: `translate(${mousePos.x * star.size * 18}px, ${mousePos.y * star.size * 18}px)`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase mb-4">
            Skills
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base mb-12">
            I have built core proficiencies in backend development, real-time protocols, database management, and modern frontend design. Hover over each node to interact with the skill core.
          </p>

          {/* Orbit Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
            {skillsList.map((skill, index) => (
              <SkillOrbit
                key={index}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
