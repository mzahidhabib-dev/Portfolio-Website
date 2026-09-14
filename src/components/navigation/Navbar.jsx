import { useState } from "react";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";
import { useTheme } from "../../app/providers/ThemeProvider";
import { NAV_LINKS } from "../../data/navigation";
// import StatusIndicator from "../ui/StatusIndicator";
import Button from "../ui/Button";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-bg-main/85 backdrop-blur-md border-b border-border-main transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand & Telemetry Status */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-text-main hover:text-accent-main transition-colors"
          >
            <div className="p-1.5 rounded-lg bg-accent-subtle text-accent-main border border-accent-main/20">
              <Terminal className="w-4 h-4" />
            </div>
            <span>M ZAHID H.</span>
          </a>

          {/* <div className="hidden sm:flex items-center">
            <StatusIndicator
              status={TELEMETRY_STATUS.status}
              label={TELEMETRY_STATUS.label}
              size="sm"
            />
          </div> */}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text-main transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
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
            <Button href="#diagnostic" size="sm" variant="primary">
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
          {/* <div className="pb-2 border-b border-border-main sm:hidden">
            <StatusIndicator
              status={TELEMETRY_STATUS.status}
              label={TELEMETRY_STATUS.label}
              size="sm"
            />
          </div> */}

          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-text-secondary hover:text-text-main py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <Button
              href="#diagnostic"
              size="sm"
              variant="primary"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
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
