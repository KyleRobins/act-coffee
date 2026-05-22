"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FUNDING_PARTNERS, IMPLEMENTING_PARTNERS } from "@/lib/data";

function PartnerLogo({ name, logoUrl, website, height = 44 }: { name: string; logoUrl: string; website: string; height?: number }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
      className="flex items-center justify-center px-4 transition-all"
      style={{ filter: "grayscale(1) opacity(0.55)" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = "grayscale(0) opacity(1)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "grayscale(1) opacity(0.55)"; }}
      aria-label={`${name} — visit website`}
    >
      <Image
        src={logoUrl}
        alt={name}
        width={160}
        height={height}
        style={{ objectFit: "contain", maxHeight: `${height}px`, width: "auto" }}
      />
    </motion.a>
  );
}

export function Partners() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="partners"
      className="py-14 lg:py-20"
      style={{ background: "var(--act-blush)", borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
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

        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-10">
          {/* Row 1 — Funders */}
          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6"
          >
            {FUNDING_PARTNERS.map((p) => (
              <motion.div key={p.name} variants={shouldReduceMotion ? {} : itemVariants}>
                <PartnerLogo {...p} height={52} />
              </motion.div>
            ))}
          </motion.div>

          <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", margin: "0 auto", width: "60%" }} />

          {/* Row 2 — Implementing partners */}
          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6"
          >
            {IMPLEMENTING_PARTNERS.map((p) => (
              <motion.div key={p.name} variants={shouldReduceMotion ? {} : itemVariants}>
                <PartnerLogo {...p} height={44} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: scrolling marquee — all partners combined */}
        <div className="md:hidden overflow-hidden" aria-label="Partner logos">
          <div className="flex animate-marquee gap-10 w-max">
            {[...FUNDING_PARTNERS, ...IMPLEMENTING_PARTNERS, ...FUNDING_PARTNERS, ...IMPLEMENTING_PARTNERS].map((partner, i) => {
              const total = FUNDING_PARTNERS.length + IMPLEMENTING_PARTNERS.length;
              return (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex items-center justify-center flex-shrink-0"
                  aria-hidden={i >= total}
                >
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    width={80}
                    height={32}
                    style={{ objectFit: "contain", maxHeight: "32px", width: "auto", filter: "grayscale(1) opacity(0.6)" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
