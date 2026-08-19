import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered reveal. Returns a ref to attach to the element and a
 * boolean that flips true once it enters the viewport (and stays true —
 * this animates content in once, it doesn't hide it again on scroll-out).
 *
 * Content is never removed from the DOM or hidden from assistive tech or
 * crawlers: the "hidden" state is just `opacity: 0` + a small transform via
 * CSS (see the `.reveal` classes in index.css), so screen readers and
 * search engines see the full content immediately regardless of animation
 * state. Visitors with `prefers-reduced-motion` skip the animation
 * entirely and get the visible state from the very first render.
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -80px 0px' } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (visible) return undefined;

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, visible]);

  return [ref, visible];
}
