"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Award, TrendingUp, Link, Lightbulb, Globe, ArrowRight } from "lucide-react";
import { BENEFITS, APPLY_URL } from "@/lib/data";

type IconProps = { className?: string; style?: React.CSSProperties; "aria-hidden"?: string };
const ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
  Award: Award as React.ComponentType<IconProps>,
  TrendingUp: TrendingUp as React.ComponentType<IconProps>,
  Link: Link as React.ComponentType<IconProps>,
  Lightbulb: Lightbulb as React.ComponentType<IconProps>,
  Globe: Globe as React.ComponentType<IconProps>,
};

// The MIDDLE (index 1) card gets the dark treatment — mirrors the reference "100K+" card
const HIGHLIGHT_INDEX = 1;

export function Benefits() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="benefits"
      className="py-20 lg:py-28"
      style={{ background: "var(--act-offwhite)" }}
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3" style={{ color: "var(--act-orange)" }}>Programme Value</p>
          <h2
            id="benefits-heading"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(26px, 3.2vw, 42px)",
              fontWeight: 700,
              color: "var(--act-text)",
              lineHeight: 1.2,
            }}
          >
            Taste the Difference and Elevate Your Coffee Career
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "16px", lineHeight: "1.75", color: "var(--act-muted)" }}
          >
            Five high-impact outcomes that separate ACT Coffee Programme graduates from the rest of the field.
          </p>
        </motion.div>

        {/* Stats-style 3-column top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {BENEFITS.slice(0, 3).map((benefit, idx) => {
            const Icon = ICON_MAP[benefit.icon] ?? Award;
            const isCenter = idx === HIGHLIGHT_INDEX;

            return (
              <motion.div
                key={benefit.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: "easeOut" as const, delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="rounded-2xl p-7 flex flex-col gap-4"
                style={
                  isCenter
                    ? { background: "var(--act-brown)" }
                    : {
                        background: "var(--act-offwhite)",
                        border: "1px solid rgba(0,0,0,0.08)",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                      }
                }
              >
                {/* Tag pill */}
                <span
                  className="self-start text-xs font-semibold rounded-full px-2.5 py-1"
                  style={{
                    background: isCenter ? "rgba(255,255,255,0.15)" : "rgba(90,31,34,0.07)",
                    color: isCenter ? "white" : "var(--act-brown)",
                    fontFamily: "var(--font-dm-sans)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {isCenter ? "Top Benefit" : idx === 0 ? "Certificate" : "Expertise"}
                </span>

                {/* Big icon / metric */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: isCenter ? "rgba(255,255,255,0.12)" : "rgba(90,31,34,0.06)" }}
                  aria-hidden="true"
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: isCenter ? "white" : "var(--act-brown)" }}
                    aria-hidden="true"
                  />
                </div>

                <div className="flex-1">
                  <h3
                    className="mb-2 font-bold"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "20px",
                      color: isCenter ? "white" : "var(--act-text)",
                      lineHeight: 1.25,
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "13.5px",
                      lineHeight: "1.7",
                      color: isCenter ? "rgba(255,255,255,0.65)" : "var(--act-muted)",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>

                <button
                  onClick={() => document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: isCenter ? "white" : "var(--act-brown)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom 2-column row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {BENEFITS.slice(3).map((benefit, idx) => {
            const Icon = ICON_MAP[benefit.icon] ?? Award;
            return (
              <motion.div
                key={benefit.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: "easeOut" as const, delay: idx * 0.12 }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className="rounded-2xl p-7 flex gap-5 items-start"
                style={{
                  background: "var(--act-offwhite)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(90,31,34,0.07)" }}
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--act-brown)" }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "18px", color: "var(--act-text)", lineHeight: 1.3 }}>
                    {benefit.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13.5px", lineHeight: "1.7", color: "var(--act-muted)" }}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Network photo banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mt-10 relative rounded-2xl overflow-hidden"
          style={{ height: "280px" }}
        >
          <Image
            src="/images/benefits.png"
            alt="Professionals networking at the East Africa Coffee Innovation Summit"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(26,15,10,0.45)" }} aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p
              className="section-label mb-2"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              East Africa Coffee Innovation Summit
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(18px, 2.5vw, 26px)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.3,
                maxWidth: "520px",
              }}
            >
              Join a network of East Africa&rsquo;s most influential coffee leaders
            </p>
          </div>
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => window.open(APPLY_URL, "_blank", "noopener,noreferrer")}
            className="inline-flex items-center gap-2 font-semibold rounded-full px-7 py-3.5 text-sm transition-opacity hover:opacity-80"
            style={{ background: "var(--act-brown)", color: "white", fontFamily: "var(--font-dm-sans)" }}
          >
            Apply for July 2026 Cohort
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
