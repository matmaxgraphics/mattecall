"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Subtle, one-time fade/slide-up when a section enters the viewport.
 * No looping, no parallax, no motion once revealed — respects
 * prefers-reduced-motion via CSS (see globals.css).
 */
export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => setIsIn(true), delayMs);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delayMs]);

  const Comp = Tag as "div";

  return (
    <Comp
      ref={ref}
      data-reveal={isIn ? "in" : "out"}
      className={className}
    >
      {children}
    </Comp>
  );
}
