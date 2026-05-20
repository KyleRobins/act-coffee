"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APPLY_URL } from "@/lib/data";

export function ApplicationCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="apply"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--act-brown)" }}
      aria-labelledby="cta-heading"
    >
      {/* Decorative coffee bean SVG */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 320 320"
          className="w-[580px] h-[580px] opacity-[0.04]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="160" cy="160" rx="130" ry="100" fill="var(--act-orange)" />
          <ellipse cx="160" cy="160" rx="130" ry="100" fill="none" stroke="var(--act-orange)" strokeWidth="8" />
          <path
            d="M160 60 Q200 120 160 160 Q120 200 160 260"
            stroke="var(--act-brown)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <ellipse cx="160" cy="160" rx="130" ry="100" fill="none" stroke="var(--act-orange)" strokeWidth="3" strokeDasharray="8 6" />
        </svg>
      </div>

      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(232,148,26,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Overline */}
          <p
            className="section-label mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(232,148,26,0.12)",
              border: "1px solid rgba(232,148,26,0.3)",
              color: "var(--act-orange)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: "var(--act-orange)" }}
              aria-hidden="true"
            />
            Applications Open · July 2026 Cohort
          </p>

          {/* H2 */}
          <h2
            id="cta-heading"
            className="mb-5"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(30px, 4.5vw, 56px)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
            }}
          >
            Ready to Transform Kenya&rsquo;s Coffee Sector?
          </h2>

          {/* Subtext */}
          <p
            className="mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "17px",
              lineHeight: "1.7",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Join an elite cohort of Kenya&rsquo;s leading coffee professionals, cooperatives, and entrepreneurs.
            Build the expertise, network, and strategy to drive lasting change.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => window.open(APPLY_URL, "_blank", "noopener,noreferrer")}
              className="inline-flex items-center gap-2 font-bold rounded-full px-8 py-4 text-base h-auto"
              style={{
                background: "white",
                color: "var(--act-brown)",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "16px",
              }}
              aria-label="Apply to the July 2026 cohort"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>

            <Button
              variant="outline"
              onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 font-medium rounded-full px-8 py-4 text-base h-auto bg-transparent"
              style={{
                border: "1.5px solid rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "16px",
              }}
              aria-label="View frequently asked questions"
            >
              Contact Us
            </Button>
          </div>

          {/* Email note */}
          <p
            className="inline-flex items-center gap-2 text-sm"
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            For enquiries: <span style={{ color: "rgba(255,255,255,0.55)" }}>coffee@e4impact.org</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
