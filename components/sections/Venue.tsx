"use client";

import { motion, useReducedMotion } from "motion/react";
import { Users, Monitor, User, MapPin, Clock } from "lucide-react";
import { VENUE_COPY } from "@/lib/data";

type IconProps = { className?: string; "aria-hidden"?: string; style?: React.CSSProperties };
const FORMAT_ICONS: Record<string, React.ComponentType<IconProps>> = {
  "In-Person Sessions": Users as React.ComponentType<IconProps>,
  "Online Classes": Monitor as React.ComponentType<IconProps>,
  "1:1 Tutoring": User as React.ComponentType<IconProps>,
};

export function Venue() {
  const shouldReduceMotion = useReducedMotion();
  const slideTransition = { duration: 0.65, ease: "easeOut" as const };

  return (
    <section
      id="venue"
      className="py-20 lg:py-28"
      style={{ background: "var(--act-blush)" }}
      aria-labelledby="venue-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={slideTransition}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="section-label mb-4" style={{ color: "var(--act-orange)" }}>
              {VENUE_COPY.label}
            </p>
            <h2
              id="venue-heading"
              className="mb-5"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(26px, 3.2vw, 42px)",
                fontWeight: 700,
                color: "var(--act-text)",
                lineHeight: 1.2,
              }}
            >
              {VENUE_COPY.heading}
            </h2>
            <p
              className="mb-8"
              style={{ fontFamily: "var(--font-dm-sans)", fontSize: "16px", lineHeight: "1.8", color: "var(--act-muted)" }}
            >
              {VENUE_COPY.body}
            </p>

            {/* Format pills */}
            <div className="flex flex-wrap gap-2.5 mb-8" aria-label="Learning formats">
              {VENUE_COPY.formats.map((format) => {
                const FIcon = FORMAT_ICONS[format] ?? Users;
                return (
                  <span
                    key={format}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium"
                    style={{
                      background: "var(--act-offwhite)",
                      color: "var(--act-text)",
                      fontFamily: "var(--font-dm-sans)",
                      border: "1px solid rgba(0,0,0,0.1)",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                    }}
                  >
                    <FIcon className="w-3.5 h-3.5" style={{ color: "var(--act-brown)" }} aria-hidden="true" />
                    {format}
                  </span>
                );
              })}
            </div>

            {/* Hours callout */}
            <div
              className="inline-flex items-center gap-3 rounded-xl px-5 py-4"
              style={{
                background: "rgba(90,31,34,0.06)",
                border: "1px solid rgba(90,31,34,0.1)",
              }}
            >
              <Clock className="w-5 h-5 flex-shrink-0" style={{ color: "var(--act-brown)" } as React.CSSProperties} aria-hidden="true" />
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "15px", fontWeight: 600, color: "var(--act-text)" }}>
                {VENUE_COPY.hours}
              </p>
            </div>
          </motion.div>

          {/* Right — location card */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={slideTransition}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-sm"
              style={{ background: "var(--act-offwhite)", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              {/* Map visual */}
              <div
                className="w-full h-52 flex items-center justify-center relative"
                style={{
                  background: "linear-gradient(135deg, #5A1F22 0%, #7B2D32 50%, #E86F87 100%)",
                }}
                aria-label="Location map for CRI Nairobi"
              >
                <div className="relative flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full shadow-lg" style={{ background: "var(--act-orange)" }} aria-hidden="true" />
                  <div className="w-px h-8 mt-1" style={{ background: "rgba(245,163,84,0.5)" }} aria-hidden="true" />
                  <div
                    className="absolute -top-1 -left-1 w-8 h-8 rounded-full opacity-25"
                    style={{ background: "var(--act-orange)", animation: "ping 2.2s cubic-bezier(0,0,0.2,1) infinite" }}
                    aria-hidden="true"
                  />
                </div>
                <p
                  className="absolute bottom-4 right-4 section-label"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  aria-hidden="true"
                >
                  Nairobi County · Kenya
                </p>
              </div>

              {/* Address block */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(90,31,34,0.07)" }}>
                    <MapPin className="w-4 h-4" style={{ color: "var(--act-brown)" } as React.CSSProperties} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold mb-0.5" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "15px", color: "var(--act-text)" }}>
                      {VENUE_COPY.address.name}
                    </p>
                    <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--act-muted)" }}>
                      {VENUE_COPY.address.location}
                    </p>
                    <p className="text-xs mt-1" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--act-orange)", letterSpacing: "0.05em" }}>
                      {VENUE_COPY.address.note}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  {VENUE_COPY.formats.map((f) => {
                    const FIcon = FORMAT_ICONS[f] ?? Users;
                    return (
                      <div key={f} className="flex flex-col items-center gap-1.5">
                        <FIcon className="w-4 h-4" style={{ color: "var(--act-muted)" }} aria-hidden="true" />
                        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "11px", color: "var(--act-muted)", lineHeight: 1.3, textAlign: "center" }}>
                          {f}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
