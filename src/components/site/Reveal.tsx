import { useEffect, useRef, type ReactNode, type ElementType } from "react";

/** Scroll-triggered fade + rise using IntersectionObserver. Lightweight, no GSAP dep. */
export function Reveal({
  children,
  as: Tag = "div" as ElementType,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = `translate3d(0, ${y}px, 0)`;
    el.style.transition = `opacity 900ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms, transform 900ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms`;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translate3d(0,0,0)";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, y]);
  const Comp = Tag as any;
  return (
    <Comp ref={ref as any} className={className}>
      {children}
    </Comp>
  );
}

/** Word-by-word text reveal (masking). */
export function SplitReveal({
  text,
  className = "",
  stagger = 60,
  delay = 0,
}: {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>(".sr-word > span"));
    spans.forEach((s, i) => {
      s.style.transform = "translate3d(0, 110%, 0)";
      s.style.transition = `transform 900ms cubic-bezier(0.2,0.7,0.2,1) ${delay + i * stagger}ms`;
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            spans.forEach((s) => (s.style.transform = "translate3d(0,0,0)"));
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text, stagger, delay]);
  const words = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="sr-word inline-block overflow-hidden align-baseline">
          <span className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
