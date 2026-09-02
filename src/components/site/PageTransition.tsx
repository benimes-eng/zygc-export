import { useEffect, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";

/**
 * Cinematic page transition: a forest curtain wipes in on navigation,
 * holds briefly, then wipes away to reveal the new page.
 */
export function PageTransition() {
  const router = useRouter();
  const [phase, setPhase] = useState<"idle" | "cover" | "uncover">("idle");
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const clear = () => {
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
    };

    const unsubStart = router.subscribe("onBeforeNavigate", ({ fromLocation, toLocation }) => {
      if (fromLocation?.pathname === toLocation.pathname) return;
      clear();
      setPhase("cover");
    });

    const unsubEnd = router.subscribe("onResolved", () => {
      clear();
      window.scrollTo({ top: 0, behavior: "auto" });
      timers.current.push(
        window.setTimeout(() => setPhase("uncover"), 450) as unknown as number,
      );
      timers.current.push(
        window.setTimeout(() => setPhase("idle"), 1250) as unknown as number,
      );
    });

    return () => {
      clear();
      unsubStart();
      unsubEnd();
    };
  }, [router]);

  const covered = phase === "cover";

  return (
    <div
      className="fixed inset-0 z-[95] pointer-events-none"
      style={{ visibility: phase === "idle" ? "hidden" : "visible" }}
      aria-hidden
    >
      <div
        className="absolute inset-0 bg-forest-deep transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]"
        style={{ transform: covered ? "translateY(0)" : "translateY(-100%)" }}
      />
      <div
        className="absolute inset-0 bg-cream transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] delay-[90ms]"
        style={{ transform: covered ? "translateY(0)" : "translateY(-100%)" }}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          covered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-forest text-[0.72rem] tracking-[0.4em] uppercase">ZYGC</div>
      </div>
    </div>
  );
}
