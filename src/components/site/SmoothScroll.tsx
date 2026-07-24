import { useEffect } from "react";

/** Lenis smooth scroll with GSAP ScrollTrigger sync. Client-only. */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let lenis: any;
    let rafId = 0;
    let cleanupTrigger: (() => void) | undefined;

    (async () => {
      const [{ default: Lenis }, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.35,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
      });

      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      // Anchor link handling
      const onClick = (e: MouseEvent) => {
        const t = e.target as HTMLElement | null;
        const a = t?.closest("a[href*='#']") as HTMLAnchorElement | null;
        if (!a) return;
        const href = a.getAttribute("href") || "";
        const hashIdx = href.indexOf("#");
        if (hashIdx === -1) return;
        const id = href.slice(hashIdx + 1);
        const el = document.getElementById(id);
        if (!el) return;
        // only intercept same-page anchors
        if (href.startsWith("#") || location.pathname === (a.pathname || location.pathname)) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -80 });
        }
      };
      document.addEventListener("click", onClick);
      cleanupTrigger = () => document.removeEventListener("click", onClick);
    })();

    return () => {
      cancelAnimationFrame(rafId);
      cleanupTrigger?.();
      lenis?.destroy();
    };
  }, []);
  return null;
}
