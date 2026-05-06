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






