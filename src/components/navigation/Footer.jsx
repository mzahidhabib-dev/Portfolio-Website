import { Github, Linkedin, Mail, Calendar, Terminal } from "lucide-react";
import Container from "../ui/Container";
import StatusIndicator from "../ui/StatusIndicator";
import { NAV_LINKS, SOCIAL_LINKS } from "../../data/navigation";

export const Footer = () => {
  return (
    <footer className="w-full bg-bg-surface border-t border-border-main py-12 transition-colors duration-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-border-main">
          {/* Left Column: Brand & Telemetry */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-text-main hover:text-accent-main transition-colors"
            >
              <div className="p-1.5 rounded-lg bg-accent-subtle text-accent-main border border-accent-main/20">
                <Terminal className="w-4 h-4" />
              </div>
              <span>M ZAHID H.</span>
            </a>

            <p className="text-xs text-text-secondary leading-relaxed max-w-sm font-normal">
              Full-Stack AI &amp; Automation Systems Architect building resilient LangGraph agent loops, multi-modal RAG engines, and high-throughput n8n pipelines.
            </p>

            <div className="pt-1">
              <StatusIndicator status="active" label="SYS_STATUS: OPERATIONAL 99.9%" size="sm" />
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-semibold text-text-muted uppercase tracking-wider">
              NAVIGATION
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-xs text-text-secondary hover:text-text-main transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Social Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-semibold text-text-muted uppercase tracking-wider">
              VERIFIED CONNECT CHANNELS
            </h4>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="px-3 py-2 rounded-lg bg-bg-elevated text-text-secondary hover:text-text-main border border-border-main hover:border-accent-main/40 transition-all flex items-center gap-2 text-xs font-mono"
              >
                <Github className="w-4 h-4 text-accent-main" />
                <span>GitHub</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="px-3 py-2 rounded-lg bg-bg-elevated text-text-secondary hover:text-text-main border border-border-main hover:border-accent-main/40 transition-all flex items-center gap-2 text-xs font-mono"
              >
                <Linkedin className="w-4 h-4 text-accent-main" />
                <span>LinkedIn</span>
              </a>
              <a
                href={SOCIAL_LINKS.email}
                aria-label="Send Professional Email"
                className="px-3 py-2 rounded-lg bg-bg-elevated text-text-secondary hover:text-text-main border border-border-main hover:border-accent-main/40 transition-all flex items-center gap-2 text-xs font-mono"
              >
                <Mail className="w-4 h-4 text-accent-main" />
                <span>Email</span>
              </a>
              <a
                href="#contact"
                aria-label="Request System Intake"
                className="px-3 py-2 rounded-lg bg-bg-elevated text-text-secondary hover:text-text-main border border-border-main hover:border-accent-main/40 transition-all flex items-center gap-2 text-xs font-mono"
              >
                <Calendar className="w-4 h-4 text-accent-main" />
                <span>System Intake</span>
              </a>
            </div>
            <p className="text-[11px] text-text-muted font-mono">
              Strict NDA &amp; confidentiality guaranteed on all technical systems.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <span>&copy; 2026 Zahid Habib. All rights reserved.</span>
          <span>FULL-STACK AI &amp; AUTOMATION ARCHITECTURE</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
