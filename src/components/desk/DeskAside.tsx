import { useEffect, useState } from "react";
import { DESK_ASIDES } from "@/data/asides";
import { cn } from "@/lib/utils";

/**
 * Quiet rotating dry aside — fleet personality, not a carousel.
 * Pauses when the user prefers reduced motion (shows first line only).
 */
export function DeskAside({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setFading(true);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % DESK_ASIDES.length);
        setFading(false);
      }, 280);
    }, 5600);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <p
      className={cn("fleet-aside", className)}
      data-fading={fading ? "true" : "false"}
      aria-live="polite"
    >
      {DESK_ASIDES[index]}
    </p>
  );
}
