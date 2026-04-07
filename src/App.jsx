import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  // Init animations + default theme
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });

    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} />
       <Hero />
     <About />
       <Skills />
      <Projects />
      <Contact />
     <Footer />
    </div>
  );
};

export default App;







// import { useEffect, useState } from "react";
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// const App = () => {
//   const [darkMode, setDarkMode] = useState(true)
//   // console.log("App Name from CI:", import.meta.env.VITE_APP_NAME);


//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//       offset: 100
//     })
//     document.documentElement.classList.add('dark');
//   }, [])
 
//   useEffect(() => {
//     AOS.refresh()
//   }, [darkMode])

//   const toggleDarkMode = () => {
//     const newMode = !darkMode
//     setDarkMode(newMode)
//     document.documentElement.classList.toggle('dark');

//   }

//   return (

//     <div className={darkMode ?
//       'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen' :
//       'bg-linear-to-br  from-gray-50 to-blue-50 min-h-screen'}>
//       <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//       <Hero darkMode={darkMode} />
//       <About darkMode={darkMode} />
//       <Skills darkMode={darkMode} />
//       <Projects darkMode={darkMode} />
//       <Contact darkMode={darkMode} />
//       <Footer darkMode={darkMode} />
//     </div>
//   )
// }
// export default App
