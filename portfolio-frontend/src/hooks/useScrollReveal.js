import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Attach to a section's root element. Every element matching `selector`
 * inside it fades + slides up into view, staggered, the first time it
 * scrolls into the viewport.
 *
 * Usage:
 *   const sectionRef = useScrollReveal(".my-card, .section-tag, h2");
 *   <section ref={sectionRef}>...</section>
 */
export default function useScrollReveal(selector, options = {}) {
  const containerRef = useRef(null);
  const { y = 50, duration = 0.8, stagger = 0.12, start = "top 85%" } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector);
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y });

      ScrollTrigger.batch(targets, {
        start,
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration,
            ease: "power3.out",
            stagger,
            overwrite: true,
          }),
      });
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector]);

  return containerRef;
}
