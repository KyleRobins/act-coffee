"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, Coffee, User, Heart, Leaf, Globe } from "lucide-react";
import { ELIGIBILITY_CRITERIA, APPLY_URL } from "@/lib/data";

type LucideIconProps = { className?: string; "aria-hidden"?: string; style?: React.CSSProperties };
const ICON_MAP: Record<string, React.ComponentType<LucideIconProps>> = {
  MapPin: MapPin as React.ComponentType<LucideIconProps>,
  Coffee: Coffee as React.ComponentType<LucideIconProps>,
  User: User as React.ComponentType<LucideIconProps>,
  Heart: Heart as React.ComponentType<LucideIconProps>,
  Leaf: Leaf as React.ComponentType<LucideIconProps>,
  Globe: Globe as React.ComponentType<LucideIconProps>,
};

export function Eligibility() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="eligibility"
      className="py-20 lg:py-28"
      style={{ background: "var(--act-offwhite)" }}
      aria-labelledby="eligibility-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — split text left / image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <p className="section-label mb-3" style={{ color: "var(--act-orange)" }}>Eligibility</p>
            <h2
              id="eligibility-heading"
              className="mb-4"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(26px, 3.2vw, 42px)",
                fontWeight: 700,
                color: "var(--act-text)",
                lineHeight: 1.2,
              }}
            >
              Who Should Apply
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "16px", lineHeight: "1.75", color: "var(--act-muted)" }}>
              The programme is designed for established coffee sector professionals and entrepreneurs based in Kenya who are ready to take their business to the next level.
            </p>
          </motion.div>

          {/* Eligibility image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="relative rounded-2xl overflow-hidden shadow-md"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/images/eligibilty.png"
              alt="A woman carefully sorting and selecting red coffee cherries at a processing station"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle dark overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)" }} aria-hidden="true" />
            <div
              className="absolute bottom-4 left-4 rounded-lg px-3 py-2"
              style={{ background: "rgba(255,255,255,0.92)" }}
            >
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12px", fontWeight: 600, color: "var(--act-brown)", letterSpacing: "0.04em" }}>
                Kenya Coffee Value Chain
              </p>
            </div>
          </motion.div>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
        >
          {ELIGIBILITY_CRITERIA.map((criterion, idx) => {
            const Icon = ICON_MAP[criterion.icon] ?? MapPin;
            const isHighlighted = idx === 3; // highlight the Gender & Youth card
            return (
              <motion.div
                key={criterion.title}
                variants={shouldReduceMotion ? {} : cardVariants}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={
                  isHighlighted
                    ? { background: "var(--act-brown)", border: "1px solid transparent" }
                    : { background: "var(--act-offwhite)", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }
                }
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isHighlighted ? "rgba(255,255,255,0.15)" : "rgba(90,31,34,0.07)",
                  }}
                  aria-hidden="true"
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: isHighlighted ? "white" : "var(--act-brown)" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3
                    className="mb-2 font-semibold"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "15px",
                      color: isHighlighted ? "white" : "var(--act-text)",
                    }}
                  >
                    {criterion.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "13.5px",
                      lineHeight: "1.65",
                      color: isHighlighted ? "rgba(255,255,255,0.7)" : "var(--act-muted)",
                    }}
                  >
                    {criterion.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Callout banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: "rgba(232,148,26,0.08)", border: "1px solid rgba(232,148,26,0.25)" }}
        >
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 flex-shrink-0" style={{ color: "var(--act-orange)" } as React.CSSProperties} aria-hidden="true" />
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "15px", color: "var(--act-text)", fontWeight: 500 }}>
              Applications from <strong>women- and youth-led ventures</strong> are particularly encouraged.
            </p>
          </div>
          <button
            onClick={() => window.open(APPLY_URL, "_blank", "noopener,noreferrer")}
            className="flex-shrink-0 font-semibold rounded-full px-6 py-2.5 text-sm transition-opacity hover:opacity-80"
            style={{ background: "var(--act-brown)", color: "white", fontFamily: "var(--font-dm-sans)" }}
            aria-label="Apply now"
          >
            Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
