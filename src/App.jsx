import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import { useTheme } from "./app/providers/ThemeProvider";

const App = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg-main text-text-main transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Chat />
    </div>
  );
};

export default App;




