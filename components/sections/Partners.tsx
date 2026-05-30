"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { INITIATIVE_PARTNERS, IMPLEMENTING_PARTNERS, PARTNERSHIP_PARTNERS } from "@/lib/data";

function PartnerLogo({
  name,
  logoUrl,
  website,
  height = 44,
}: {
  name: string;
  logoUrl: string;
  website: string;
  height?: number;
}) {
  const isPlaceholder = false;

  return (
    <motion.a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.06 }}
      className="flex items-center justify-center px-4 transition-all"
      style={{ filter: "grayscale(1) opacity(0.55)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.filter = "grayscale(0) opacity(1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.filter = "grayscale(1) opacity(0.55)";
      }}
      aria-label={`${name} — visit website`}
    >
      {isPlaceholder ? (
        <div
          className="flex items-center justify-center rounded-lg"
          style={{
            width: "auto",
            height: `${height}px`,
            minWidth: "120px",
            background: "rgba(0,0,0,0.06)",
            border: "1px dashed rgba(0,0,0,0.2)",
            padding: "0 16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              color: "rgba(0,0,0,0.35)",
              letterSpacing: "0.04em",
              textAlign: "center",
            }}
          >
            {name}
            <br />
            <span style={{ fontSize: "10px", opacity: 0.7 }}>Logo coming soon</span>
          </span>
        </div>
      ) : (
        <Image
          src={logoUrl}
          alt={name}
          width={180}
          height={height}
          style={{ objectFit: "contain", maxHeight: `${height}px`, width: "auto", height: "auto" }}
        />
      )}
    </motion.a>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-10">
      <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.07)" }} />
      <span
        className="section-label"
        style={{
          color: "var(--act-muted)",
          whiteSpace: "nowrap",
          fontSize: "10px",
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.07)" }} />
    </div>
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

  const allMobile = [...INITIATIVE_PARTNERS, ...IMPLEMENTING_PARTNERS, ...PARTNERSHIP_PARTNERS];

  return (
    <section
      id="partners"
      className="py-14 lg:py-20"
      style={{
        background: "var(--act-blush)",
        borderTop: "1px solid rgba(0,0,0,0.07)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop layout */}
        <div className="hidden md:block">

          {/* Initiative of */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            id="partners-heading"
            className="section-label text-center mb-8"
            style={{ color: "var(--act-muted)" }}
          >
            Initiative of
          </motion.p>
          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 mb-2"
          >
            {INITIATIVE_PARTNERS.map((p) => (
              <motion.div key={p.name} variants={shouldReduceMotion ? {} : itemVariants}>
                {/* ACT and UNIDO get larger treatment */}
                <PartnerLogo
                  {...p}
                  height={
                    p.name === "ACT Coffee Programme" || p.name === "UNIDO" ? 64 : 48
                  }
                />
              </motion.div>
            ))}
          </motion.div>

          <SectionDivider label="Implemented by" />

          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 mb-2"
          >
            {IMPLEMENTING_PARTNERS.map((p) => (
              <motion.div key={p.name} variants={shouldReduceMotion ? {} : itemVariants}>
                <PartnerLogo {...p} height={44} />
              </motion.div>
            ))}
          </motion.div>

          <SectionDivider label="In partnership with" />

          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6"
          >
            {PARTNERSHIP_PARTNERS.map((p) => (
              <motion.div key={p.name} variants={shouldReduceMotion ? {} : itemVariants}>
                <PartnerLogo {...p} height={44} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: scrolling marquee — all partners combined */}
        <div className="md:hidden overflow-hidden" aria-label="Partner logos">
          <p
            className="section-label text-center mb-6"
            style={{ color: "var(--act-muted)" }}
          >
            Our Partners
          </p>
          <div className="flex animate-marquee gap-10 w-max">
            {[...allMobile, ...allMobile].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex items-center justify-center flex-shrink-0"
                aria-hidden={i >= allMobile.length}
              >
                {false ? (
                  <div
                    style={{
                      height: "28px",
                      minWidth: "80px",
                      background: "rgba(0,0,0,0.06)",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 8px",
                    }}
                  >
                    <span style={{ fontSize: "9px", color: "rgba(0,0,0,0.3)", fontFamily: "var(--font-dm-sans)" }}>
                      Govt. Kenya
                    </span>
                  </div>
                ) : (
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    width={80}
                    height={32}
                    style={{
                      objectFit: "contain",
                      maxHeight: "32px",
                      width: "auto",
                      height: "auto",
                      filter: "grayscale(1) opacity(0.6)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
