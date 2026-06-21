import { Github, Linkedin, Mail, Eye } from "lucide-react";

// Inline LeetCode SVG Icon
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="transition-transform group-hover:scale-110">
    <path d="M16.102 17.93l-2.697 2.607c-.466.451-1.211.451-1.677 0l-4.51-4.359a2.506 2.506 0 0 1 0-3.538l3.626-3.503a.501.501 0 0 1 .709.006l.707.707a.501.501 0 0 1-.007.71l-3.617 3.493a1.002 1.002 0 0 0 0 1.414l4.51 4.359c.188.181.505.181.693 0l2.69-2.599a.501.501 0 0 1 .707.006l.707.707a.501.501 0 0 1-.007.71zm.332-9.75l-.007-.007c-.466-.451-1.211-.451-1.677 0l-4.51 4.359a2.506 2.506 0 0 1 0 3.538l.007.007a.501.501 0 0 1 .707-.006l.707-.707a.501.501 0 0 1-.006-.71l-4.51-4.359c-.188-.181-.505-.181-.693 0l4.51-4.359c.466-.451 1.211-.451 1.677 0l4.51 4.359c.188.181.505.181.693 0l-.707-.707a.501.501 0 0 1-.006-.71z"/>
  </svg>
);

// Inline CodeChef Chef Hat SVG Icon
const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" className="transition-transform group-hover:scale-110">
    <path d="M6 18V6c0-1.5 1-2.5 2.5-2.5h7c1.5 0 2.5 1 2.5 2.5v12" />
    <path d="M3 18h18a1 1 0 0 1 1 1v2c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1v-2c0-.5.5-1 1-1z" />
    <circle cx="12" cy="7" r="1" />
  </svg>
);

export default function Footer({ visitors }) {
  return (
    <footer className="border-t border-neutral-900 bg-[#0c0c14] py-14 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* BRAND BRANDING */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="font-extrabold text-xl tracking-widest text-white uppercase font-display">
            Akash
          </span>
          <span className="text-xs font-semibold text-neutral-500 mt-1.5 tracking-wider uppercase">
            Full-Stack Software Engineer
          </span>
        </div>

        {/* SOCIALS, COPYRIGHT & VISITOR COUNT */}
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right gap-4">
          <div className="flex gap-2.5">
            <a
              href="https://github.com/akas-coder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon-btn group"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-rauniyar-62866132b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon-btn group"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://leetcode.com/u/Akash_Rauniyar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="social-icon-btn group"
            >
              <LeetCodeIcon />
            </a>
            <a
              href="https://www.codechef.com/users/akash_123_1234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodeChef"
              className="social-icon-btn group"
            >
              <CodeChefIcon />
            </a>
            <a
              href="mailto:rauniyarakash144@gmail.com"
              aria-label="Email"
              className="social-icon-btn group"
            >
              <Mail size={16} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-1 text-xs font-semibold tracking-wider text-neutral-500 uppercase">
            <span>© 2026 Akash Rauniyar. All Rights Reserved</span>
            {visitors !== undefined && (
              <>
                <span className="hidden sm:inline text-neutral-700">•</span>
                <span className="inline-flex items-center gap-1.5 text-indigo-400 bg-indigo-950/20 border border-indigo-900/30 px-2 py-0.5 rounded">
                  <Eye size={12} /> Visitors: {visitors}
                </span>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}
