import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";
import { useTheme } from "../../app/providers/ThemeProvider";
import { NAV_LINKS } from "../../data/navigation";
import Button from "../ui/Button";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = NAV_LINKS.map((link) => link.id);
      const scrollPosition = window.scrollY + 180;

      // Check if scrolled near the bottom of the document
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        const lastLink = NAV_LINKS[NAV_LINKS.length - 1];
        if (lastLink) {
          setActiveSection(lastLink.id);
          return;
        }
      }

      // Find the furthest section that has been scrolled past
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-bg-main/85 backdrop-blur-md border-b border-border-main transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand & Telemetry Status */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-text-main hover:text-accent-main transition-colors"
          >
            <div className="p-1.5 rounded-lg bg-accent-subtle text-accent-main border border-accent-main/20">
              <Terminal className="w-4 h-4" />
            </div>
            <span>M ZAHID H.</span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-bg-elevated/40 p-1 rounded-full border border-border-main/60 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-accent-main/15 text-accent-main border border-accent-main/30 shadow-[0_0_12px_rgba(59,130,246,0.15)] font-semibold"
                    : "text-text-secondary hover:text-text-main hover:bg-bg-elevated/80 border border-transparent"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-main animate-pulse" />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            className="p-2 text-text-secondary hover:text-text-main rounded-lg hover:bg-bg-elevated border border-transparent hover:border-border-main transition-all duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent-main"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <div className="hidden md:block">
            <Button
              href="#diagnostic"
              size="sm"
              variant="primary"
              onClick={(e) => handleNavClick(e, "#diagnostic")}
            >
              Book Architecture Call
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-text-secondary hover:text-text-main rounded-lg hover:bg-bg-elevated transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-main bg-bg-surface px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-mono font-medium px-3.5 py-2.5 rounded-lg transition-all duration-150 flex items-center justify-between ${
                    isActive
                      ? "bg-accent-main/15 text-accent-main border border-accent-main/30 font-semibold"
                      : "text-text-secondary hover:text-text-main hover:bg-bg-elevated/50 border border-transparent"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-accent-main">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-main animate-pulse" />
                      ACTIVE
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-2">
            <Button
              href="#diagnostic"
              size="sm"
              variant="primary"
              className="w-full justify-center"
              onClick={(e) => handleNavClick(e, "#diagnostic")}
            >
              Book Architecture Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
