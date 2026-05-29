"use client";

import Image from "next/image";
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

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "4/3" }}>
              <Image
                src={FEES_COPY.imageUrl}
                alt={FEES_COPY.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay chip */}
              <div
                className="absolute bottom-4 left-4 rounded-xl px-4 py-2.5 flex items-center gap-3"
                style={{ background: "rgba(26,15,10,0.72)", backdropFilter: "blur(6px)" }}
              >
                <div>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "11px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Total Fee</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "20px", color: "white" }}>$300</p>
                </div>
                <div style={{ width: "1px", height: "32px", background: "rgba(255,255,255,0.2)" }} aria-hidden="true" />
                <div>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "11px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Instalments</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "20px", color: "white" }}>3 × $100</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — instalment rows */}
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
                Paid in 3 instalments of{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>$100</strong>{" "}
                — one per bootcamp.
              </p>
            </div>

            {/* Instalment cards */}
            <div className="flex flex-col gap-3">
              {FEES_COPY.instalments.map((inst) => (
                <div
                  key={inst.number}
                  className="rounded-xl flex items-center gap-5 px-5 py-4"
                  style={{
                    background: "white",
                    border: "1px solid rgba(0,0,0,0.08)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(90,31,34,0.07)" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 700,
                        fontSize: "13px",
                        color: "var(--act-brown)",
                      }}
                    >
                      {inst.number}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "var(--act-text)",
                        marginBottom: "2px",
                      }}
                    >
                      {inst.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "12.5px",
                        color: "var(--act-muted)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {inst.module}
                    </p>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "var(--act-brown)",
                      flexShrink: 0,
                    }}
                  >
                    {inst.amount}
                  </p>
                </div>
              ))}
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
