import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import headerImg from "../../assets/img/header-img.svg";
import ContactOptions from "../ui/ContactOptions";

export default function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
  const [openContact, setOpenContact] = useState(false);
  
  useEffect(() => {
    const toRotate = ["Web Developer", "Spring Boot Engineer", "React Developer"];
    const period = 2000;

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(50); // Speed up when deleting
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(120);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum]);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center px-6 pt-28 pb-16 overflow-hidden">
        {/* Glow Nebula background helper */}
        <div className="glow-nebula-left" />

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* TEXT INFO COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 text-left flex flex-col items-start"
          >
            {/* Greeting Tag */}
            <span className="inline-block px-5 py-2.5 rounded-none font-bold text-xs uppercase tracking-widest border border-white/30 bg-white/5 backdrop-blur-md mb-6">
              Welcome to my portfolio
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white font-display">
              Hi! I'm Akash,{" "}
              <br />
              <span className="inline-block min-h-[50px] sm:min-h-[60px] text-indigo-400 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {text}
                <span className="animate-pulse ml-1 text-white">|</span>
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl">
              I am a third-year engineering student with a strong technical foundation in problem solving, data structures, and full-stack development. I enjoy building scalable web applications that focus on clean architecture, performance, and real-world usability.
            </p>

            <div className="mt-10 flex flex-wrap gap-6 items-center">
              <button
                onClick={() => setOpenContact(true)}
                className="
                  inline-flex items-center gap-2 font-bold text-sm md:text-base text-white uppercase tracking-widest group
                  hover:text-indigo-400 transition-colors duration-200
                "
              >
                Let’s Connect 
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-200 text-indigo-500" />
              </button>

              <a
                href="/resume/Better.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2.5 px-5 py-3 border border-white/20 bg-white/5 hover:border-indigo-500/50 hover:bg-white/[0.08] backdrop-blur-md rounded-none font-bold text-xs uppercase tracking-widest text-neutral-300 hover:text-white transition-all duration-300 shadow-sm
                "
              >
                <FileText size={15} className="text-indigo-400" />
                Resume / CV
              </a>
            </div>
          </motion.div>

          {/* ILLUSTRATION COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 flex justify-center items-center"
          >
            <div className="w-full max-w-[380px] sm:max-w-[420px] select-none">
              <img
                src={headerImg}
                alt="Floating Space Astronaut"
                className="float-animation w-full h-auto drop-shadow-[0_20px_50px_rgba(99,102,241,0.25)]"
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
