"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ABOUT_COPY, APPLY_URL, FUNDING_PARTNERS, IMPLEMENTING_PARTNERS } from "@/lib/data";

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const slideTransition = { duration: 0.65, ease: "easeOut" as const };

  return (
    <section
      id="about"
      className="py-20 lg:py-28"
      style={{ background: "var(--act-offwhite)" }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top two-column text block — mirrors reference "Our Journey" section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16 pb-16" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={slideTransition}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="section-label mb-4" style={{ color: "var(--act-orange)" }}>
              {ABOUT_COPY.label}
            </p>
            <h2
              id="about-heading"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(26px, 3.2vw, 40px)",
                fontWeight: 700,
                color: "var(--act-text)",
                lineHeight: 1.2,
              }}
            >
              {ABOUT_COPY.heading}
            </h2>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={slideTransition}
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col gap-5"
          >
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "16px", lineHeight: "1.8", color: "var(--act-muted)" }}>
              {ABOUT_COPY.body}
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "16px", lineHeight: "1.8", color: "var(--act-muted)" }}>
              {ABOUT_COPY.body2}
            </p>
            <div className="pt-2">
              <button
                onClick={() => window.open(APPLY_URL, "_blank", "noopener,noreferrer")}
                className="inline-flex items-center gap-2 font-semibold text-sm rounded-full px-6 py-3 transition-opacity hover:opacity-80"
                style={{
                  background: "var(--act-brown)",
                  color: "white",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Apply to the Programme
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Lower split: image + partner chips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with offset */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={slideTransition}
            viewport={{ once: true, amount: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl"
              style={{ background: "rgba(90,31,34,0.08)" }}
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
              <ImagePlaceholder
                src="/images/about.png"
                alt="Coffee professionals engaged in a collaborative training session on coffee quality"
                fill
              />
            </div>
          </motion.div>

          {/* Right: partners + chips */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...slideTransition, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 lg:order-2 flex flex-col gap-6"
          >
            <div>
              <p className="section-label mb-3" style={{ color: "var(--act-muted)" }}>Delivering Partners</p>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "16px", lineHeight: "1.75", color: "var(--act-muted)" }}>
                A landmark collaboration uniting leading international development organisations, renowned coffee companies, and Kenya&rsquo;s foremost academic and research institutions.
              </p>
            </div>

            {/* Partner logo grid */}
            <div className="flex flex-wrap gap-x-6 gap-y-4 items-center" aria-label="Delivering partners">
              {[...FUNDING_PARTNERS, ...IMPLEMENTING_PARTNERS].map((partner) => (
                <a
                  key={partner.name}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.name}
                  className="transition-all"
                  style={{ filter: "grayscale(1) opacity(0.5)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = "grayscale(0) opacity(1)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "grayscale(1) opacity(0.5)"; }}
                >
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    width={80}
                    height={32}
                    style={{ objectFit: "contain", maxHeight: "32px", width: "auto" }}
                  />
                </a>
              ))}
            </div>

            {/* Small stat strip */}
            <div
              className="grid grid-cols-3 gap-4 rounded-xl p-5"
              style={{ background: "rgba(90,31,34,0.04)", border: "1px solid rgba(90,31,34,0.08)" }}
            >
              {[
                { v: "8", l: "Months" },
                { v: "156h", l: "Training" },
                { v: "3", l: "Modules" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "22px", color: "var(--act-text)" }}>{s.v}</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "11px", color: "var(--act-muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
