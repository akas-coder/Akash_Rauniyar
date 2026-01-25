import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import useTheme from "./hooks/useTheme";
import Certifications from "./components/sections/Certifications";


export default function App() {
  const { dark, toggleTheme } = useTheme();
  const [visitors, setVisitors] = useState(0);

  // 🔹 INCREMENT VISITOR COUNT ON PAGE LOAD
  useEffect(() => {
    fetch("http://localhost:8080/api/visitors/increment", {
      method: "POST", // ✅ MUST BE POST
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Visitor count from backend:", data);
        setVisitors(data);
      })
      .catch((err) => console.error("Visitor API error:", err));
  }, []);

  return (
    <div
      className={`
        min-h-screen transition-all duration-700
        ${
          dark
            ? `
              bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
              from-indigo-950 via-slate-900 to-neutral-950
              text-neutral-100
            `
            : `
              bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
              from-white via-sky-100 to-indigo-100
              text-neutral-900
            `
        }
      `}
    >
      <Navbar dark={dark} toggle={toggleTheme} />

      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Contact  />
      </main>
    </div>
  );
}
