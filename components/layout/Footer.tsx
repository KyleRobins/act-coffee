"use client";

import Image from "next/image";
import { Mail, Globe, ExternalLink } from "lucide-react";

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Our Partners", href: "#partners" },
  { label: "Contact", href: "mailto:coffee@e4impact.org" },
];

const PROGRAMME_LINKS = [
  { label: "Module 1: Upstream", href: "#programme" },
  { label: "Module 2: Downstream", href: "#programme" },
  { label: "Module 3: Project", href: "#programme" },
  { label: "See All Modules", href: "#programme" },
];

const APPLY_LINKS = [
  { label: "Apply Now", href: "#apply" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
];

const SUPPORT_LINKS = [
  { label: "Contact Us", href: "mailto:coffee@e4impact.org" },
  { label: "E4Impact Website", href: "https://www.e4impact.org" },
  { label: "UNIDO Website", href: "https://www.unido.org" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--act-brown)" }} aria-label="Site footer">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

          {/* Col 1: Company */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/act.png"
                alt="ACT Coffee Programme"
                width={140}
                height={70}
                style={{ objectFit: "contain", maxHeight: "70px", width: "auto", height: "auto", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13px", lineHeight: "1.75", color: "rgba(255,255,255,0.5)", marginBottom: "16px" }}>
              Advancing Climate-Resilience and Transformation in African Coffee. Implemented by E4Impact Foundation.
            </p>
            <div className="flex gap-2.5">
              <a href="https://www.e4impactkenya.org" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }} aria-label="E4Impact website">
                <Globe className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.6)" }} />
              </a>
              <a href="https://www.unido.org" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }} aria-label="UNIDO website">
                <ExternalLink className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.6)" }} />
              </a>
              <a href="mailto:coffee@e4impact.org"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }} aria-label="Email us">
                <Mail className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.6)" }} />
              </a>
            </div>
          </div>

          {/* Col 2: Programme */}
          <div>
            <p className="mb-4 font-semibold text-white text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>Programme</p>
            <nav aria-label="Programme links">
              <ul className="flex flex-col gap-2.5">
                {PROGRAMME_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition-colors hover:text-white"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3: Apply */}
          <div>
            <p className="mb-4 font-semibold text-white text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>Apply</p>
            <nav aria-label="Application links">
              <ul className="flex flex-col gap-2.5">
                {APPLY_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition-colors hover:text-white"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 4: Support */}
          <div>
            <p className="mb-4 font-semibold text-white text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>Support</p>
            <nav aria-label="Support links">
              <ul className="flex flex-col gap-2.5">
                {SUPPORT_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition-colors hover:text-white"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
            © 2026 ACT Coffee Programme · Promoted by UNIDO · Funded by Italian Cooperation · Implemented by E4Impact
          </p>
          <div className="flex gap-4">
            {["Terms of Use", "Privacy Policy", "Cookies"].map((t) => (
              <a key={t} href="#" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12px", color: "rgba(255,255,255,0.3)" }}
                className="hover:text-white/60 transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
