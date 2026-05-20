"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { APPLY_URL } from "@/lib/data";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fade = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
  });

  return (
    <section
      id="hero"
      className="pt-16 min-h-svh flex flex-col justify-center"
      style={{ background: "white" }}
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="flex flex-col">
            {/* Tag */}
            <motion.div {...fade(0.1)} className="mb-5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(61,26,16,0.07)",
                  color: "var(--act-brown)",
                  fontFamily: "var(--font-dm-sans)",
                  border: "1px solid rgba(61,26,16,0.12)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--act-orange)" }} aria-hidden="true" />
                ACT Programme · Kenya 2026
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fade(0.2)}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(36px, 5vw, 62px)",
                fontWeight: 700,
                color: "var(--act-text)",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              Executive Programme in Coffee Innovation and Business
            </motion.h1>

            {/* Subtext */}
            <motion.p
              {...fade(0.3)}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "17px",
                lineHeight: "1.75",
                color: "var(--act-muted)",
                marginBottom: "32px",
                maxWidth: "480px",
              }}
            >
              Strengthening innovation, entrepreneurship and value creation across Kenya&rsquo;s coffee sector. Starting July 2026.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(0.4)} className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                onClick={() => window.open(APPLY_URL, "_blank", "noopener,noreferrer")}
                className="inline-flex items-center gap-2 font-semibold rounded-full px-7 h-12 text-base"
                style={{
                  background: "var(--act-brown)",
                  color: "white",
                  fontFamily: "var(--font-dm-sans)",
                }}
                aria-label="Apply to the Executive Programme"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 font-medium rounded-full px-7 h-12 text-base"
                style={{
                  border: "1.5px solid rgba(61,26,16,0.2)",
                  color: "var(--act-text)",
                  fontFamily: "var(--font-dm-sans)",
                  background: "transparent",
                }}
                aria-label="Learn more about the programme"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Star rating row */}
            <motion.div {...fade(0.5)} className="flex items-center gap-3">
              <div className="flex gap-0.5" aria-label="4.8 out of 5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    style={{ fill: i < 5 ? "var(--act-orange)" : "transparent", color: "var(--act-orange)" }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-dm-sans)", color: "var(--act-muted)" }}
              >
                <span style={{ fontWeight: 600, color: "var(--act-text)" }}>10+ global partners</span> delivering world-class training
              </p>
            </motion.div>
          </div>

          {/* Right — image collage */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.25 }}
            className="relative hidden lg:block"
            aria-label="Coffee programme imagery"
          >
            {/* Main large image — Kenyan coffee farmer in highland farm */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <ImagePlaceholder
                src="/images/Hero.png"
                alt="Kenyan coffee farmer standing in a highland coffee farm with red coffee cherries"
                fill
                priority
              />
            </div>

            {/* Overlapping smaller image bottom-left — coffee cherry sorting */}
            <div
              className="absolute -bottom-6 -left-6 w-44 h-44 rounded-xl overflow-hidden shadow-xl border-4"
              style={{ borderColor: "white" }}
            >
              <ImagePlaceholder
                src="/images/eligibilty.png"
                alt="Woman carefully sorting red coffee cherries at a processing station"
                fill
              />
            </div>

            {/* Floating stat pill — top right */}
            <div
              className="absolute -top-4 -right-4 rounded-xl px-4 py-3 shadow-lg flex items-center gap-3"
              style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(61,26,16,0.08)" }}
              >
                <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "14px", color: "var(--act-brown)" }}>8</span>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "11px", color: "var(--act-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Duration</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: "13px", color: "var(--act-text)" }}>8 Months</p>
              </div>
            </div>

            {/* Floating stat pill — bottom right */}
            <div
              className="absolute -bottom-2 right-6 rounded-xl px-4 py-3 shadow-lg flex items-center gap-3"
              style={{ background: "var(--act-brown)" }}
            >
              <div>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "11px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Cohort Start</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: "13px", color: "white" }}>July 2026</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile stat chips */}
        <motion.div
          {...fade(0.5)}
          className="lg:hidden mt-8 grid grid-cols-2 gap-3"
          aria-label="Programme statistics"
        >
          {[
            { v: "8", l: "Months" },
            { v: "156", l: "Hours Training" },
            { v: "3", l: "Modules" },
            { v: "July 2026", l: "Start Date" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl px-4 py-3.5 flex flex-col gap-0.5"
              style={{ background: "rgba(61,26,16,0.04)", border: "1px solid rgba(61,26,16,0.08)" }}
            >
              <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "22px", color: "var(--act-text)" }}>{s.v}</span>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12px", color: "var(--act-muted)" }}>{s.l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom image strip — full bleed coffee processing image */}
      <div className="w-full relative h-48 sm:h-64 overflow-hidden mt-4">
        <ImagePlaceholder
          src="/images/program-structure.png"
          alt="Hands carefully sorting red coffee cherries on a drying bed in the Kenyan highlands"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(26,15,10,0.45)" }}
          aria-hidden="true"
        />
        {/* Centred quote over strip */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p
            className="text-center text-white/90 italic max-w-2xl"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(16px, 2.5vw, 22px)",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            &ldquo;One of the ACT Programme&rsquo;s key initiatives to strengthen human capital across the coffee value chain in East Africa.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
