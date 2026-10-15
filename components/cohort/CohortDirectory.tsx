"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Search, X, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { PARTICIPANTS, type Participant } from "@/lib/data";
import { AVATAR_COLORS, initials } from "@/lib/cohort";

const PAGE_SIZE = 6;

export function CohortDirectory() {
  const shouldReduceMotion = useReducedMotion();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    setPage(0);
  }, [query]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const idParam = searchParams.get("id");
    if (!idParam) return;
    const idx = PARTICIPANTS.findIndex((p) => p.id === Number(idParam));
    if (idx !== -1) {
      setActiveIndex(idx);
      setPage(Math.floor(idx / PAGE_SIZE));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PARTICIPANTS;
    return PARTICIPANTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.profile.toLowerCase().includes(q)
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages - 1);
  const paginated = filtered.slice(currentPage * PAGE_SIZE, currentPage * PAGE_SIZE + PAGE_SIZE);

  const goToPage = (next: number) => {
    const clamped = Math.max(0, Math.min(totalPages - 1, next));
    setDirection(clamped >= currentPage ? 1 : -1);
    setPage(clamped);
  };

  const active: Participant | null = activeIndex !== null ? PARTICIPANTS[activeIndex] : null;

  const openProfile = (participant: Participant) => {
    setActiveIndex(PARTICIPANTS.findIndex((p) => p.id === participant.id));
  };

  const step = (delta: 1 | -1) => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev + delta + PARTICIPANTS.length) % PARTICIPANTS.length;
    });
  };

  return (
    <>
      {/* Search */}
      <div className="relative max-w-md mx-auto mb-10">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
          style={{ color: "var(--act-muted)" }}
          aria-hidden="true"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search participants by name, role or expertise…"
          aria-label="Search Cohort 1 participants"
          className="w-full rounded-full pl-11 pr-4 py-3 text-sm outline-none transition-shadow focus:shadow-md"
          style={{
            fontFamily: "var(--font-dm-sans)",
            background: "white",
            border: "1px solid rgba(0,0,0,0.1)",
            color: "var(--act-text)",
          }}
        />
      </div>

      {/* Participant grid */}
      {filtered.length === 0 ? (
        <p
          className="text-center"
          style={{ fontFamily: "var(--font-dm-sans)", color: "var(--act-muted)", fontSize: "14px" }}
        >
          No participants match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
            aria-label="Previous participants"
            className={`${totalPages > 1 ? "hidden sm:flex" : "hidden"} w-10 h-10 rounded-full items-center justify-center flex-shrink-0 transition-colors hover:bg-black/5 disabled:opacity-30 disabled:pointer-events-none`}
            style={{ border: "1px solid rgba(0,0,0,0.12)" }}
          >
            <ChevronLeft className="w-4 h-4" style={{ color: "var(--act-brown)" }} aria-hidden="true" />
          </button>

          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentPage}
                custom={direction}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: direction === 1 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? {} : { opacity: 0, x: direction === 1 ? -40 : 40 }}
                transition={{ duration: 0.3, ease: "easeOut" as const }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {paginated.map((participant) => {
                  const originalIdx = PARTICIPANTS.findIndex((p) => p.id === participant.id);
                  return (
                    <button
                      key={participant.id}
                      onClick={() => openProfile(participant)}
                      className="text-left rounded-2xl p-5 flex flex-col gap-4 transition-transform hover:-translate-y-0.5"
                      style={{
                        background: "white",
                        border: "1px solid rgba(0,0,0,0.08)",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                        cursor: "pointer",
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
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            aria-label="Next participants"
            className={`${totalPages > 1 ? "hidden sm:flex" : "hidden"} w-10 h-10 rounded-full items-center justify-center flex-shrink-0 transition-colors hover:bg-black/5 disabled:opacity-30 disabled:pointer-events-none`}
            style={{ border: "1px solid rgba(0,0,0,0.12)" }}
          >
            <ChevronRight className="w-4 h-4" style={{ color: "var(--act-brown)" }} aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Pagination controls */}
      {filtered.length > 0 && totalPages > 1 && (
        <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
            aria-label="Previous participants"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-black/5 disabled:opacity-30 disabled:pointer-events-none"
            style={{ border: "1px solid rgba(0,0,0,0.12)" }}
          >
            <ChevronLeft className="w-4 h-4" style={{ color: "var(--act-brown)" }} aria-hidden="true" />
          </button>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            aria-label="Next participants"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-black/5 disabled:opacity-30 disabled:pointer-events-none"
            style={{ border: "1px solid rgba(0,0,0,0.12)" }}
          >
            <ChevronRight className="w-4 h-4" style={{ color: "var(--act-brown)" }} aria-hidden="true" />
          </button>
        </div>
      )}

      {filtered.length > 0 && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Participant pages">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              role="tab"
              aria-selected={i === currentPage}
              aria-label={`Page ${i + 1} of ${totalPages}`}
              className="rounded-full transition-all"
              style={{
                width: i === currentPage ? "22px" : "8px",
                height: "8px",
                background: i === currentPage ? "var(--act-brown)" : "rgba(90,31,34,0.2)",
              }}
            />
          ))}
        </div>
      )}

      <p
        className="text-center mt-6"
        style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12.5px", color: "var(--act-muted)" }}
      >
        Showing {paginated.length ? currentPage * PAGE_SIZE + 1 : 0}–{currentPage * PAGE_SIZE + paginated.length} of {filtered.length} Cohort 1 participants.
      </p>

      {/* Profile modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(26,15,10,0.6)" }}
            onClick={() => setActiveIndex(null)}
            role="presentation"
          >
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" as const }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cohort-modal-heading"
              className="relative w-full max-w-lg rounded-2xl p-7 sm:p-8 max-h-[85vh] overflow-y-auto"
              style={{ background: "white" }}
            >
              <button
                onClick={() => setActiveIndex(null)}
                aria-label="Close profile"
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
              >
                <X className="w-4 h-4" style={{ color: "var(--act-muted)" }} aria-hidden="true" />
              </button>

              <div className="flex items-center gap-4 mb-5 pr-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: AVATAR_COLORS[PARTICIPANTS.findIndex((p) => p.id === active.id) % AVATAR_COLORS.length] }}
                  aria-hidden="true"
                >
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "16px", color: "white" }}>
                    {initials(active.name)}
                  </span>
                </div>
                <div>
                  <h3
                    id="cohort-modal-heading"
                    style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "19px", color: "var(--act-text)", lineHeight: 1.3 }}
                  >
                    {active.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13px", color: "var(--act-brown)" }}>
                    {active.title}
                  </p>
                </div>
              </div>

              <p
                style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14.5px", lineHeight: "1.75", color: "var(--act-muted)" }}
              >
                {active.profile}
              </p>

              <div className="mt-5 flex flex-col gap-2.5">
                {active.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5">
                    <Quote className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "var(--act-orange)" }} aria-hidden="true" />
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13.5px", lineHeight: "1.6", color: "var(--act-text)" }}>
                      {h}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between">
                <button
                  onClick={() => step(-1)}
                  aria-label="Previous participant"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "var(--act-brown)" }}
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" /> Previous
                </button>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12px", color: "var(--act-muted)" }}>
                  {PARTICIPANTS.findIndex((p) => p.id === active.id) + 1} of {PARTICIPANTS.length}
                </span>
                <button
                  onClick={() => step(1)}
                  aria-label="Next participant"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "var(--act-brown)" }}
                >
                  Next <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
