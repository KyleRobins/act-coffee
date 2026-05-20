"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/data";

export function FAQ() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ background: "#FAFAF9" }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3" style={{ color: "var(--act-orange)" }}>Support</p>
          <h2
            id="faq-heading"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(26px, 3.2vw, 42px)",
              fontWeight: 700,
              color: "var(--act-text)",
              lineHeight: 1.2,
            }}
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion — single column like the reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <Accordion className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="mb-3 rounded-xl overflow-hidden"
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "white",
                }}
              >
                <AccordionTrigger
                  className="px-6 py-5 hover:no-underline"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--act-text)",
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="px-6 pb-5"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "14.5px",
                    lineHeight: "1.8",
                    color: "var(--act-muted)",
                  }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-10 text-center"
        >
          <p className="mb-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--act-muted)" }}>
            Still have questions?
          </p>
          <a
            href="mailto:coffee@e4impact.org"
            className="inline-flex items-center gap-2 font-semibold text-sm rounded-full px-6 py-2.5 transition-opacity hover:opacity-80"
            style={{
              background: "var(--act-brown)",
              color: "white",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Contact the Programme Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
