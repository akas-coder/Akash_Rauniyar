import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
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
    <div className="space-bg min-h-screen text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer visitors={visitors} />
    </div>
  );
}
