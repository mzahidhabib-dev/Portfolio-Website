import Navbar from "./components/navigation/Navbar";
import Hero from "./sections/Hero";
import Systems from "./sections/Systems";
import Capabilities from "./sections/Capabilities";
import Diagnostic from "./sections/Diagnostic";
import Contact from "./sections/Contact";
import Footer from "./components/navigation/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-bg-main text-text-main transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Systems />
        <Capabilities />
        <Diagnostic />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
