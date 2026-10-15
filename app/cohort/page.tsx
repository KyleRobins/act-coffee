import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CohortDirectory } from "@/components/cohort/CohortDirectory";
import { COHORT_COPY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cohort 1 Participants | ACT Coffee Programme",
  description: "Meet the 30 coffee sector leaders from across Kenya selected for Cohort 1 of the Executive Programme in Coffee Innovation and Business.",
};

export default function CohortPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 lg:py-20" style={{ background: "var(--act-cream)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold mb-8 transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-dm-sans)", color: "var(--act-brown)" }}
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to home
            </Link>

            <div className="text-center mb-10">
              <p className="section-label mb-3" style={{ color: "var(--act-orange)" }}>{COHORT_COPY.label}</p>
              <h1
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(28px, 3.6vw, 46px)",
                  fontWeight: 700,
                  color: "var(--act-text)",
                  lineHeight: 1.2,
                }}
              >
                {COHORT_COPY.heading}
              </h1>
              <p
                className="mt-4 max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-dm-sans)", fontSize: "16px", lineHeight: "1.75", color: "var(--act-muted)" }}
              >
                {COHORT_COPY.body}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {COHORT_COPY.stats.map((stat) => (
                <div
                  key={stat.label}
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
                </div>
              ))}
            </div>

            <Suspense>
              <CohortDirectory />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
