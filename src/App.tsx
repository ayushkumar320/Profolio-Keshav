import {useEffect, useState} from "react";
import {ThemeProvider} from "./contexts/ThemeContext";
import CardNav from "./components/CardNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Internships from "./components/Internships";
import ResearchPapers from "./components/ResearchPapers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1400); // brief intro
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 theme-transition">
        {showIntro && (
          <div
            className="intro-overlay"
            style={{animation: "overlayOut 400ms ease 1s forwards"}}
            aria-hidden
          >
            <div className="intro-text">Hello, Keshav This Side</div>
          </div>
        )}
        <CardNav />
        <main
          className={!showIntro ? "opacity-100" : "opacity-0"}
          style={{transition: "opacity 400ms ease 1s"}}
        >
          <Hero />
          <About />
          <Education />
          <Internships />
          <ResearchPapers />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
