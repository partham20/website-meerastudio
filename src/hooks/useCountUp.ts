import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

// Animates a stat like "6000+" or "99%" from zero once `start` is true.
// Returns the formatted string so the suffix stays attached.
export function useCountUp(value: string, start: boolean, duration = 1800) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : '';
  const reducedMotion = usePrefersReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start || target === null) return;
    if (reducedMotion) {
      setCurrent(target);
      return;
    }
    let frame = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCurrent(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration, reducedMotion]);

  if (target === null) return value;
  return `${current.toLocaleString('en-IN')}${suffix}`;
}
