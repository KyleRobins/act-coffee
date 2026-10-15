"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { COHORT_COPY, PARTICIPANTS } from "@/lib/data";
import { AVATAR_COLORS, initials } from "@/lib/cohort";

const VISIBLE = 3;

export function CohortTeaser() {
  const shouldReduceMotion = useReducedMotion();
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const total = PARTICIPANTS.length;
  const visible = Array.from({ length: VISIBLE }, (_, i) => PARTICIPANTS[(startIndex + i) % total]);

  const step = (delta: 1 | -1) => {
    setDirection(delta);
    setStartIndex((prev) => (prev + delta + total) % total);
  };

  return (
    <section
      id="cohort"
      className="py-20 lg:py-28"
      style={{ background: "var(--act-cream)" }}
      aria-labelledby="cohort-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <p className="section-label mb-3" style={{ color: "var(--act-orange)" }}>{COHORT_COPY.label}</p>
          <h2
            id="cohort-heading"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(26px, 3.2vw, 42px)",
              fontWeight: 700,
              color: "var(--act-text)",
              lineHeight: 1.2,
            }}
          >
            {COHORT_COPY.heading}
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "16px", lineHeight: "1.75", color: "var(--act-muted)" }}
          >
            {COHORT_COPY.body}
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {COHORT_COPY.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="rounded-2xl px-4 py-6 text-center"
              style={{ background: "white", border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 700,
                  fontSize: "clamp(22px, 2.6vw, 30px)",
                  color: "var(--act-brown)",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </p>
              <p
                className="mt-1"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "12px",
                  color: "var(--act-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3-card slider */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => step(-1)}
            aria-label="Previous participants"
            className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center flex-shrink-0 transition-colors hover:bg-black/5"
            style={{ border: "1px solid rgba(0,0,0,0.12)" }}
          >
            <ChevronLeft className="w-4 h-4" style={{ color: "var(--act-brown)" }} aria-hidden="true" />
          </button>

          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={startIndex}
                custom={direction}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: direction === 1 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? {} : { opacity: 0, x: direction === 1 ? -40 : 40 }}
                transition={{ duration: 0.35, ease: "easeOut" as const }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-5"
              >
                {visible.map((participant) => {
                  const originalIdx = PARTICIPANTS.findIndex((p) => p.id === participant.id);
                  return (
                    <Link
                      key={participant.id}
                      href={`/cohort?id=${participant.id}`}
                      className="text-left rounded-2xl p-5 flex flex-col gap-4"
                      style={{
                        background: "white",
                        border: "1px solid rgba(0,0,0,0.08)",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                      }}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: AVATAR_COLORS[originalIdx % AVATAR_COLORS.length] }}
                          aria-hidden="true"
                        >
                          <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "14px", color: "white" }}>
                            {initials(participant.name)}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p
                            className="truncate"
                            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "15px", color: "var(--act-text)" }}
                          >
                            {participant.name}
                          </p>
                          <p
                            className="truncate"
                            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12.5px", color: "var(--act-muted)" }}
                          >
                            {participant.title}
                          </p>
                        </div>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "13px",
                          lineHeight: "1.6",
                          color: "var(--act-muted)",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical" as const,
                          overflow: "hidden",
                        }}
                      >
                        {participant.highlights[0]}
                      </p>
                      <span
                        className="text-xs font-semibold"
                        style={{ fontFamily: "var(--font-dm-sans)", color: "var(--act-brown)" }}
                      >
                        View full profile →
                      </span>
                    </Link>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => step(1)}
            aria-label="Next participants"
            className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center flex-shrink-0 transition-colors hover:bg-black/5"
            style={{ border: "1px solid rgba(0,0,0,0.12)" }}
          >
            <ChevronRight className="w-4 h-4" style={{ color: "var(--act-brown)" }} aria-hidden="true" />
          </button>
        </div>

        {/* Mobile prev/next */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-5">
          <button
            onClick={() => step(-1)}
            aria-label="Previous participants"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
            style={{ border: "1px solid rgba(0,0,0,0.12)" }}
          >
            <ChevronLeft className="w-4 h-4" style={{ color: "var(--act-brown)" }} aria-hidden="true" />
          </button>
          <button
            onClick={() => step(1)}
            aria-label="Next participants"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
            style={{ border: "1px solid rgba(0,0,0,0.12)" }}
          >
            <ChevronRight className="w-4 h-4" style={{ color: "var(--act-brown)" }} aria-hidden="true" />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/cohort"
            className="inline-flex items-center gap-2 font-semibold rounded-full px-7 py-3.5 text-sm transition-opacity hover:opacity-80"
            style={{ background: "var(--act-brown)", color: "white", fontFamily: "var(--font-dm-sans)" }}
          >
            View All 30 Participants
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
