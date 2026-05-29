"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { NEWS_COPY, NEWS_ITEMS } from "@/lib/data";

export function News() {
  const shouldReduceMotion = useReducedMotion();
  const slideTransition = { duration: 0.6, ease: "easeOut" as const };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  return (
    <section
      id="news"
      className="py-20 lg:py-28"
      style={{ background: "var(--act-blush)", borderTop: "1px solid rgba(0,0,0,0.07)" }}
      aria-labelledby="news-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={slideTransition}
              viewport={{ once: true, amount: 0.3 }}
              className="section-label mb-4"
              style={{ color: "var(--act-orange)" }}
            >
              {NEWS_COPY.label}
            </motion.p>
            <motion.h2
              id="news-heading"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...slideTransition, delay: 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(26px, 3.2vw, 40px)",
                fontWeight: 700,
                color: "var(--act-text)",
                lineHeight: 1.2,
              }}
            >
              {NEWS_COPY.heading}
            </motion.h2>
          </div>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ...slideTransition, delay: 0.12 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-sm lg:text-right"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "14px",
              lineHeight: "1.75",
              color: "var(--act-muted)",
            }}
          >
            {NEWS_COPY.body}
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {NEWS_ITEMS.map((item) => (
            <motion.article
              key={item.id}
              variants={shouldReduceMotion ? {} : cardVariants}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "white",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Category badge */}
                <span
                  className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    background: "rgba(26,15,10,0.65)",
                    backdropFilter: "blur(4px)",
                    color: "white",
                    fontFamily: "var(--font-dm-sans)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 px-4 py-4 flex-1">
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--act-orange)",
                  }}
                >
                  {item.date}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "var(--act-text)",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "12.5px",
                    lineHeight: "1.65",
                    color: "var(--act-muted)",
                  }}
                >
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ...slideTransition, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-10 text-center text-sm"
          style={{ fontFamily: "var(--font-dm-sans)", color: "var(--act-muted)" }}
        >
          Real photos and updates from training sessions and events will replace these placeholders as the programme progresses.
        </motion.p>
      </div>
    </section>
  );
}
