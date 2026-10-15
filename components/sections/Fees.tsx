"use client";

import { motion, useReducedMotion } from "motion/react";
import { FEES_COPY, APPLY_URL } from "@/lib/data";

export function Fees() {
  const shouldReduceMotion = useReducedMotion();
  const slide = { duration: 0.6, ease: "easeOut" as const };

  return (
    <section
      id="fees"
      className="py-20 lg:py-28"
      style={{ background: "var(--act-offwhite)" }}
      aria-labelledby="fees-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={slide}
          viewport={{ once: true, amount: 0.3 }}
          className="section-label mb-4"
          style={{ color: "var(--act-orange)" }}
        >
          {FEES_COPY.label}
        </motion.p>

        {/* Two-column layout: image left, fee table right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — image + heading */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={slide}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h2
              id="fees-heading"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(26px, 3.2vw, 40px)",
                fontWeight: 700,
                color: "var(--act-text)",
                lineHeight: 1.2,
              }}
            >
              {FEES_COPY.heading}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "var(--act-muted)",
              }}
            >
              {FEES_COPY.body}
            </p>
          </motion.div>

          {/* Right — fee summary */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...slide, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* Total bar */}
            <div
              className="rounded-2xl px-6 py-5 flex items-center justify-between gap-4"
              style={{ background: "var(--act-brown)" }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "4px",
                  }}
                >
                  {FEES_COPY.totalLabel}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 700,
                    fontSize: "clamp(32px, 4vw, 44px)",
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  {FEES_COPY.totalFee}
                </p>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: "200px",
                  lineHeight: "1.6",
                  textAlign: "right",
                }}
              >
                Paid as a{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>single, one-off payment</strong>{" "}
                upon acceptance.
              </p>
            </div>

            {/* Footer note + CTA */}
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "13px",
                color: "var(--act-muted)",
                lineHeight: "1.65",
              }}
            >
              {FEES_COPY.footerNote}
            </p>
            <button
              onClick={() => window.open(APPLY_URL, "_blank", "noopener,noreferrer")}
              className="self-start font-semibold rounded-full px-7 py-3 text-sm transition-opacity hover:opacity-80"
              style={{
                background: "var(--act-brown)",
                color: "white",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Apply Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
