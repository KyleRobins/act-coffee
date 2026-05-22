"use client";

import Image from "next/image";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  gradientFrom?: string;
  gradientTo?: string;
  priority?: boolean;
}

export function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  fill = false,
  width,
  height,
  gradientFrom = "#5A1F22",
  gradientTo = "#E86F87",
  priority = false,
}: ImagePlaceholderProps) {
  const isPlaceholder = src.includes("PLACEHOLDER") || src.includes("CLOUDINARY_URL_PLACEHOLDER");

  if (isPlaceholder) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden ${className}`}
        style={{
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          width: fill ? "100%" : width,
          height: fill ? "100%" : height,
        }}
        role="img"
        aria-label={alt}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(245,163,84,0.3) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(232,111,135,0.4) 0%, transparent 50%)`,
          }}
        />
        {label && (
          <div className="relative z-10 text-center px-4">
            <div
              className="inline-block px-3 py-1.5 rounded text-xs font-medium border"
              style={{
                background: "rgba(245,163,84,0.15)",
                borderColor: "rgba(245,163,84,0.4)",
                color: "#F5A354",
                fontFamily: "var(--font-dm-sans), sans-serif",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {/* TODO: Replace with Cloudinary URL — {label} */}
              {label}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={`object-cover ${className}`}
      priority={priority}
    />
  );
}
