import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Menu, Sun, Moon, X } from "lucide-react";

import logoLight from "../assets/Light mode logo.svg";
import logoDark from "../assets/Dark mode logo.svg";

export default function Navbar({ toggleTheme }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  // Close mobile menu automatically when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-3 z-50 w-full flex justify-center">
      <Motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
      flex items-center justify-between
      w-[86%] max-w-4xl
      px-4 lg:px-8 py-2
      rounded-2xl
      bg-white/60 dark:bg-[#020617]/60
      backdrop-blur-xl
      border border-[#E2E8F0]/30 dark:border-[#CBD5F5]/30
      shadow-md
    "
      >

        {/* Logo */}
        <a href="#home" className="flex items-center shrink-0">
          <img src={logoLight} alt="Logo" className="h-8 block dark:hidden" />
          <img src={logoDark} alt="Logo" className="h-8 hidden dark:block" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavClick(item.name)}
              className="relative"
            >
              <Motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-medium transition-colors ${activeSection === item.name.toLowerCase()
                    ? "text-[#2563EB] dark:text-[#60A5FA]"
                    : "text-[#475569] dark:text-[#CBD5F5] hover:text-[#2563EB] dark:hover:text-[#60A5FA]"
                  }`}
              >
                {item.name}
              </Motion.span>
              {activeSection === item.name.toLowerCase() && (
                <Motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#2563EB] dark:bg-[#60A5FA]"
                />
              )}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <Motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-[#F1F5F9]/80 dark:bg-[#1E293B]/80 transition-colors backdrop-blur-sm"
          >
            <Sun className="w-5 h-5 hidden dark:block text-[#60A5FA]" />
            <Moon className="w-5 h-5 block dark:hidden text-[#2563EB]" />
          </Motion.button>

          {/* Hire Me button for md+ */}
          <Motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 rounded-full font-semibold
                       bg-[#2563EB] dark:bg-[#60A5FA] text-white dark:text-[#020617]
                       transition-colors"
          >
            Hire Me
          </Motion.a>

          {/* Mobile menu toggle */}
          <Motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="lg:hidden p-2 rounded-lg bg-[#F1F5F9]/80 dark:bg-[#1E293B]/80 backdrop-blur-sm"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-[#0F172A] dark:text-[#E5E7EB]" />
            ) : (
              <Menu className="w-5 h-5 text-[#0F172A] dark:text-[#E5E7EB]" />
            )}
          </Motion.button>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              absolute top-full left-1/2 transform -translate-x-1/2 mt-2
              w-64 sm:w-72 bg-white/60 dark:bg-[#020617]/60
              border border-[#E2E8F0]/30 dark:border-[#CBD5F5]/30
              rounded-xl shadow-lg backdrop-blur-xl
            "
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name)}
                  className="block"
                >
                  <Motion.div
                    whileHover={{ x: 4 }}
                    className={`py-3 px-4 rounded-lg text-center ${activeSection === item.name.toLowerCase()
                        ? "bg-[#F1F5F9]/40 dark:bg-[#1E293B]/40"
                        : ""
                      }`}
                  >
                    <span
                      className={`font-medium ${activeSection === item.name.toLowerCase()
                          ? "text-[#2563EB] dark:text-[#60A5FA]"
                          : "text-[#475569] dark:text-[#CBD5F5]"
                        }`}
                    >
                      {item.name}
                    </span>
                  </Motion.div>
                </a>
              ))}

              {/* Hire Me button for sm screens only */}
              <Motion.a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center py-3 px-4 mt-2 font-semibold
                           rounded-lg bg-[#2563EB] dark:bg-[#60A5FA]
                           text-white dark:text-[#020617] transition-colors md:hidden"
              >
                Hire Me
              </Motion.a>
            </div>
          </Motion.div>
        )}
      </Motion.nav>
    </div>
  );
}







// import { useState } from 'react'
// import { motion as Motion } from 'framer-motion'
// import { Menu, Sun, Moon, X } from 'lucide-react';

// export default function Navbar({ darkMode, toggleDarkMode }) {
//   const [activeSection, setActiveSection] = useState('home')
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const navItems = [
//     { name: 'Home', link: '#home' },
//     { name: 'About', link: '#about' },
//     { name: 'Skills', link: '#skills' },
//     { name: 'Projects', link: '#projects' },
//     { name: 'Contact', link: '#contact' }
//   ]

//   const lightColors = {
//     navBg: 'bg-linear-to-br from-orange-200  to-white',
//     textPrimary: 'text-gray-900',
//     textSecondary: 'text-gray-800',
//     textHover: 'text-orange-500',
//     textActive: 'text-orange-600',
//     indicator: 'from-orange-500 to-amber-500',
//     button: 'from-orange-500 to-amber-500',

//   }
//   const darkColors = {
//     navBg: 'bg-linear-to-br from-gray-700  to-black',
//     textPrimary: 'text-white',
//     textSecondary: 'text-gray-300',
//     textHover: 'text-orange-400',
//     textActive: 'text-orange-400',
//     indicator: 'from-orange-500 to-amber-500',
//     button: 'from-orange-500 to-amber-500',

//   }

//   const colors = darkMode ? darkColors : lightColors

//   const handleNavClick = (itemName) => {
//     setActiveSection(itemName.toLowerCase());
//     setIsMenuOpen(false)

//   }

//   return (
//     <div className='flex justify-center w-full fixed z-50 mt-4'>
//       <Motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
//         className={`flex items-center justify-center ${colors.navBg}
//     backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>

//         <div className='flex items-center justify-between w-full space-x-6 lg:space-x-8'>
//           {/* LOGO SECTION */}
//           <Motion.a href='/' whileHover={{ scale: 1.05 }}
//             className='flex items-center space-x-2'>
//             <span className={`text-xl font-bold ${colors.textPrimary}`}>
//               PortFolio <span className='text-orange-500'>.</span>
//             </span>
//           </Motion.a>

//           {/* NAVIGATION ITEMS */}
//           <div className='hidden lg:flex items-center space-x-6'>
//             {navItems.map(
//               (item) => (<a key={item.name}
//                 href={item.link}
//                 onClick={() => {
//                   handleNavClick(item.name)
//                 }}
//                 className='relative' >
//                 <Motion.span
//                   className={`font-medium transition-colors duration-300
//             ${activeSection === item.name.toLocaleLowerCase()
//                       ? colors.textActive
//                       : `${colors.textSecondary} hover:text-orange-500`
//                     }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}>
//                   {item.name}
//                 </Motion.span>
//                 {activeSection === item.name.toLocaleLowerCase() && (
//                   <Motion.div
//                     layout="navbar-indicator"
//                     className={`absolute-bottom-1 left-0 right-0 h-0.5 bg-linear-to-r
//                 rounded-full
//                 ${colors.indicator}`
//                     }
//                   >

//                   </Motion.div>
//                 )}
//               </a>

//               ))}
//           </div>
//           <div className='flex items-center space-x-2'>
//             {/* DARK/LIGHT MODE TOGGLE */}
//             <Motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={toggleDarkMode}
//               className={`p-2 rounded-full ${darkMode
//                 ? 'bg-gray-700'
//                 : 'bg-gray-200'
//                 }
//             transition-colors`}
//               aria-label={darkMode ? 'Switch to light mode'
//                 : 'Switch to dark mode'
//               }>
//               {darkMode ? (<Sun className='w-5 h-5 text-yellow-300' />)
//                 : (<Moon className='w-5 h-5 text-gray-700' />)}
//             </Motion.button>
//             {/* BUTTON */}
//             <Motion.a href='#contact'
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`hidden lg:block px-6 py-2 font-semibold rounded-full
//              bg-linear-to-r ${colors.button}
//              text-white shadow-md hover:shadow-lg transition-shadow`}
//             >
//               Hire me
//             </Motion.a>
//           </div>
//           {/* MOBILE MENU BUTTONS */}
//           <div className='flex lg:hidden items-center space-x-4 px-2'>
//             <Motion.button
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className={`p-2 rounded-lg ${darkMode
//                 ? 'bg-gray-700'
//                 : 'bg-gray-200'
//                 }`}>
//               {isMenuOpen ? (
//                 <X className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
//               ) : (
//                 <Menu className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
//               )}
//             </Motion.button>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <Motion.div initial={{
//             opacity: 0, height: 0
//           }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className={`absolute top-full left-0 right-0 mt-2 lg:hidden
//     ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'}
//     backdrop-blur-lg rounded-xl shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'
//               }`}>
//             <div className='px-4 py-3 space-y-2'>
//               {navItems.map((item) => (
//                 <a key={item.name}
//                   href={item.link}
//                   onClick={() => handleNavClick(item.name)}
//                   className='block'>
//                   <Motion.div
//                     whileHover={{ x: 5 }}
//                     className={`py-3 px-4 rounded-lg text-center
//   ${activeSection === item.name.toLowerCase()
//                         ? darkMode ? 'bg-gray-800' : 'bg-orange-50'
//                         : ''
//                       }`}>
//                     <span
//                       className={`font-medium ${activeSection === item.name.toLowerCase()
//                         ? colors.textActive : colors.textSecondary
//                         }`}>
//                       {item.name}
//                     </span>
//                   </Motion.div>
//                 </a>
//               ))}
//               <Motion.a
//                 href='#contact'
//                 onClick={() => setIsMenuOpen(false)}
//                 whileTap={{ scale: 0.95 }}
//                 className={`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r
//               ${colors.button} text-white shadow-md`}>
//                 Hire Me
//               </Motion.a>
//             </div>

//           </Motion.div>
//         )}
//       </Motion.nav>
//     </div>
//   )
// }
