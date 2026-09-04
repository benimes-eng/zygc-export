import { useEffect, useRef, useState } from "react";
import { useRouter, useRouterState } from "@tanstack/react-router";

/**
 * Cinematic page transition: a forest curtain wipes in on navigation,
 * holds briefly, then wipes away to reveal the new page.
 * Covers both paths: pre-navigation (fast wipe-in) and post-mount
 * (instant cover, then reveal) so the transition always plays.
 */
export function PageTransition() {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [phase, setPhase] = useState<"idle" | "cover" | "covered" | "reveal">("idle");
  const timers = useRef<number[]>([]);
  const first = useRef(true);

  const clear = () => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  };

  // Wipe in as soon as a navigation begins
  useEffect(() => {
    const unsub = router.subscribe("onBeforeNavigate", ({ fromLocation, toLocation }) => {
      if (fromLocation?.pathname === toLocation.pathname) return;
      clear();
      setPhase("cover");
    });
    return () => {
      clear();
      unsub();
    };
  }, [router]);

  // When the new page mounts: ensure covered, then reveal quickly
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    clear();
    window.scrollTo({ top: 0, behavior: "auto" });
    setPhase((p) => (p === "cover" ? p : "covered"));
    timers.current.push(window.setTimeout(() => setPhase("reveal"), 90));
    timers.current.push(window.setTimeout(() => setPhase("idle"), 460));
    return clear;
  }, [pathname]);

  const down = phase === "cover" || phase === "covered";
  const instant = phase === "covered";

  return (
    <div
      className="fixed inset-0 z-[95] pointer-events-none"
      style={{ visibility: phase === "idle" ? "hidden" : "visible" }}
      aria-hidden
    >
      <div
        className={`absolute inset-0 bg-forest-deep ${
          instant ? "" : "transition-transform duration-300 ease-[cubic-bezier(0.85,0,0.15,1)]"
        }`}
        style={{ transform: down ? "translateY(0)" : "translateY(-100%)" }}
      />
      <div
        className={`absolute inset-0 bg-cream ${
          instant ? "" : "transition-transform duration-300 ease-[cubic-bezier(0.85,0,0.15,1)] delay-[40ms]"
        }`}
        style={{ transform: down ? "translateY(0)" : "translateY(-100%)" }}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-150 ${
          down ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="font-serif text-forest text-lg tracking-[0.35em] uppercase">ZYGC</div>
      </div>
    </div>
  );
}
