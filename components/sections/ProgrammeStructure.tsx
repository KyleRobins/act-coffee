"use client";

import { motion, useReducedMotion } from "motion/react";
import { Sprout, TrendingUp, Lightbulb, Calendar, MapPin, BookOpen, Clock } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MODULES } from "@/lib/data";

type IconProps = { className?: string; "aria-hidden"?: string; style?: React.CSSProperties };
const ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
  Sprout: Sprout as React.ComponentType<IconProps>,
  TrendingUp: TrendingUp as React.ComponentType<IconProps>,
  Lightbulb: Lightbulb as React.ComponentType<IconProps>,
};

const INFO_STRIP = [
  { icon: Clock, label: "Duration", value: "8 months" },
  { icon: MapPin, label: "Venue", value: "Nairobi, Kenya + Online" },
  { icon: BookOpen, label: "Format", value: "In-person · Online · Tutoring" },
  { icon: Calendar, label: "Start Date", value: "July 2026" },
];

export function ProgrammeStructure() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="programme"
      className="py-20 lg:py-28"
      style={{ background: "#FAFAF9" }}
      aria-labelledby="programme-heading"
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
          <p className="section-label mb-3" style={{ color: "var(--act-orange)" }}>Curriculum</p>
          <h2
            id="programme-heading"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(26px, 3.2vw, 42px)",
              fontWeight: 700,
              color: "var(--act-text)",
              lineHeight: 1.2,
            }}
          >
            Structure of the Programme
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "16px", lineHeight: "1.75", color: "var(--act-muted)" }}
          >
            Three interconnected modules covering the full coffee value chain — from farm to market.
          </p>
        </motion.div>

        {/* Module cards — reference-style: image top, content bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {MODULES.map((mod, index) => {
            const Icon = ICON_MAP[mod.icon] ?? Sprout;
            return (
              <motion.article
                key={mod.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: "easeOut" as const, delay: index * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
                aria-label={`Module: ${mod.title}`}
              >
                {/* Image area */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* TODO: Replace with Cloudinary URL — {mod.title} */}
                  <ImagePlaceholder
                    src={mod.imageUrl}
                    alt={`Visual for ${mod.title}`}
                    label={mod.tag}
                    fill
                    gradientFrom={
                      mod.tagColor === "#2C4A2E" ? "#1a3320"
                        : mod.tagColor === "#D95F4B" ? "#5a2015"
                        : "#311540"
                    }
                    gradientTo={mod.tagColor}
                  />
                  {/* Dark overlay for label legibility */}
                  <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.25)" }} aria-hidden="true" />
                  {/* Tag badge over image */}
                  <span
                    className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold section-label"
                    style={{ background: mod.tagColor, color: "white" }}
                  >
                    <Icon className="w-3 h-3" aria-hidden="true" />
                    {mod.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--act-text)",
                      lineHeight: 1.3,
                    }}
                  >
                    {mod.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "13.5px",
                      lineHeight: "1.7",
                      color: "var(--act-muted)",
                    }}
                  >
                    {mod.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Info strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl overflow-hidden"
          style={{ background: "var(--act-brown)" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {INFO_STRIP.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-6"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                    aria-hidden="true"
                  >
                    <ItemIcon className="w-4 h-4 text-white/70" />
                  </div>
                  <div>
                    <p className="section-label" style={{ color: "rgba(255,255,255,0.45)", marginBottom: "2px" }}>{item.label}</p>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: "14px", color: "white" }}>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
