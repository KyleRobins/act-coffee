"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { APPLY_URL } from "@/lib/data";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Programme", href: "#programme" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Fees", href: "#fees" },
  { label: "News", href: "#news" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        background: "var(--act-offwhite)",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="ACT Programme — Home">
            <Image
              src="/images/act.png"
              alt="ACT Programme"
              width={80}
              height={40}
              style={{ objectFit: "contain", maxHeight: "40px", width: "auto", height: "auto" }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "var(--act-muted)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--act-text)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--act-muted)"; }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Apply button */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.open(APPLY_URL, "_blank", "noopener,noreferrer")}
              className="font-semibold rounded-full px-5 h-9 text-sm"
              style={{
                background: "var(--act-brown)",
                color: "white",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-gray-100"
                  aria-label="Open navigation menu"
                  style={{ color: "var(--act-text)" }}
                />
              }
            >
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0" style={{ background: "var(--act-offwhite)" }} showCloseButton={false}>
              <div className="flex flex-col h-full pt-6 px-5">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/images/act.png"
                    alt="ACT Programme"
                    width={72}
                    height={36}
                    style={{ objectFit: "contain", maxHeight: "36px", width: "auto", height: "auto" }}
                  />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close navigation menu"
                    style={{ color: "var(--act-muted)" }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="flex flex-col gap-0.5" aria-label="Mobile navigation">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-3 rounded-lg font-medium text-base transition-colors hover:bg-gray-50"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "var(--act-text)" }}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto pb-6">
                  <Button
                    onClick={() => { setMobileOpen(false); window.open(APPLY_URL, "_blank", "noopener,noreferrer"); }}
                    className="w-full font-semibold rounded-full h-11"
                    style={{ background: "var(--act-brown)", color: "white", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
