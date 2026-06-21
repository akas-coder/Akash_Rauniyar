import { Github, ExternalLink } from "lucide-react";
import perfumeImg from "../../assets/img/perfume.png";
import chatifyImg from "../../assets/img/chatify.png";
import gorideImg from "../../assets/img/goride.png";

const imageMap = {
  "Perfume Store": perfumeImg,
  "Chatify – Chat Application": chatifyImg,
  "Go Ride – Bus Pass Automation System": gorideImg,
};

export default function ProjectCard({ title, desc, github, live, tags = [] }) {
  // Retrieve image or construct dynamic colorful gradient card box fallback
  const projectImg = imageMap[title];

  return (
    <div className="project-img-box w-full relative">
      {projectImg ? (
        <img
          src={projectImg}
          alt={title}
          className="w-full h-full object-cover select-none"
        />
      ) : (
        /* Fallback coding background gradient */
        <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 flex flex-col justify-center items-center p-6 text-center select-none">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
            <span className="font-extrabold text-sm text-indigo-400 font-mono">&lt;/&gt;</span>
          </div>
          <span className="font-extrabold text-xs tracking-widest text-neutral-400 uppercase">
            Coding System
          </span>
          <span className="font-bold text-sm text-white mt-1">
            {title}
          </span>
        </div>
      )}

      {/* Hover Text Overlays */}
      <div className="project-txt-overlay flex flex-col justify-center items-center">
        <h3 className="text-base sm:text-lg font-black tracking-tight text-white leading-tight uppercase">
          {title}
        </h3>
        
        <p className="text-[11px] sm:text-xs text-neutral-200 mt-2 line-clamp-3 leading-relaxed">
          {desc}
        </p>

        {/* Action button links */}
        <div className="flex gap-4 mt-5">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            title="View Code"
            className="w-9 h-9 rounded-full bg-white text-[#121212] hover:bg-neutral-200 flex items-center justify-center transition-all duration-200"
          >
            <Github size={16} />
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              className="w-9 h-9 rounded-full bg-white text-[#121212] hover:bg-neutral-200 flex items-center justify-center transition-all duration-200"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        {/* Tech tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 justify-center mt-5 w-full">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 border border-white/10 text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
