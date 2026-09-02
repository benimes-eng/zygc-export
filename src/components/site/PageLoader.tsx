import { useEffect, useState } from "react";

/** Cinematic loader: brand fades in, then a forest curtain slides up to reveal. */
export function PageLoader() {
  const seen = typeof window !== "undefined" && sessionStorage.getItem("zygc_loader_seen") === "1";
  const [phase, setPhase] = useState<"in" | "hold" | "reveal" | "gone">(seen ? "gone" : "in");

  useEffect(() => {
    if (seen) return;
    const t1 = setTimeout(() => setPhase("hold"), 250);
    const t2 = setTimeout(() => setPhase("reveal"), 700);
    const t3 = setTimeout(() => {
      setPhase("gone");
      try { sessionStorage.setItem("zygc_loader_seen", "1"); } catch {}
    }, 1300);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
    };
  }, [seen]);

  if (phase === "gone") return null;

  const reveal = phase === "reveal";

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Cream base */}
      <div
        className="absolute inset-0 bg-cream transition-transform duration-[1100ms] ease-[cubic-bezier(0.85,0,0.15,1)]"
        style={{ transform: reveal ? "translateY(-100%)" : "translateY(0)" }}
      />
      {/* Forest curtain behind (revealed second) */}
      <div
        className="absolute inset-0 bg-forest-deep transition-transform duration-[1100ms] ease-[cubic-bezier(0.85,0,0.15,1)] delay-[150ms]"
        style={{ transform: reveal ? "translateY(-100%)" : "translateY(0)" }}
      />
      {/* Brand */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          phase === "in" ? "opacity-0" : reveal ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-5">
          <div className="text-gold text-[0.72rem] tracking-[0.4em] uppercase">ZYGC Global Trade</div>
          <div className="overflow-hidden">
            <div
              className="font-serif text-cream text-4xl sm:text-6xl tracking-tight transition-transform duration-700 ease-out"
              style={{ transform: phase === "in" ? "translateY(110%)" : "translateY(0)" }}
            >
              Ethiopia to the world
            </div>
          </div>
          <div className="mt-2 h-px w-40 bg-gold/40 overflow-hidden">
            <div className="h-full bg-gold origin-left animate-[loadbar_1200ms_cubic-bezier(0.7,0,0.3,1)_forwards]" />
          </div>
        </div>
      </div>
    </div>
  );
}
