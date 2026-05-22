"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { PARTNERS } from "@/lib/data";

export function Partners() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="partners"
      className="py-14 lg:py-16"
      style={{ background: "#FAFAF9", borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          id="partners-heading"
          className="section-label text-center mb-10"
          style={{ color: "var(--act-muted)" }}
        >
          Delivered in partnership with
        </motion.p>

        {/* Desktop: all in one row, wrapped */}
        <motion.div
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden md:flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
        >
          {PARTNERS.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              variants={shouldReduceMotion ? {} : itemVariants}
              whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
              className="group flex items-center justify-center h-12 px-3 rounded-lg transition-all"
              style={{
                filter: "grayscale(1) opacity(0.5)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.filter = "grayscale(0) opacity(1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.filter = "grayscale(1) opacity(0.5)";
              }}
              aria-label={`${partner.name} — visit website`}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  minWidth: "90px",
                  height: "48px",
                  background: "white",
                  borderRadius: "8px",
                  padding: "6px 14px",
                  border: "1px solid rgba(0,0,0,0.09)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                {partner.logoUrl ? (
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    width={100}
                    height={36}
                    style={{ objectFit: "contain", maxHeight: "36px", width: "auto" }}
                  />
                ) : (
                  <span
                    className="text-xs font-semibold text-center leading-tight"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "var(--act-text)",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {partner.name}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile: scrolling marquee */}
        <div className="md:hidden overflow-hidden" aria-label="Partner logos">
          <div className="flex animate-marquee gap-8 w-max">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex items-center justify-center flex-shrink-0"
                aria-hidden={i >= PARTNERS.length}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    minWidth: "72px",
                    height: "40px",
                    background: "white",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    border: "1px solid rgba(0,0,0,0.09)",
                  }}
                >
                  {partner.logoUrl ? (
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={72}
                      height={28}
                      style={{ objectFit: "contain", maxHeight: "28px", width: "auto" }}
                    />
                  ) : (
                    <span
                      className="text-xs font-semibold"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        color: "var(--act-brown)",
                        whiteSpace: "nowrap",
                        fontSize: "11px",
                      }}
                    >
                      {partner.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
