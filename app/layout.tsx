import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Executive Programme in Coffee Innovation and Business | ACT Programme",
  description:
    "Strengthening innovation, entrepreneurship and value creation across Kenya's coffee sector. An executive programme by UNIDO, E4Impact, and Università Cattolica — starting July 2026.",
  keywords: ["coffee", "Kenya", "ACT programme", "executive education", "UNIDO", "E4Impact", "coffee innovation"],
  openGraph: {
    title: "Executive Programme in Coffee Innovation and Business",
    description: "Join an elite cohort of Kenya's leading coffee professionals. 8 months, 156 hours, 3 modules. Starting July 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
