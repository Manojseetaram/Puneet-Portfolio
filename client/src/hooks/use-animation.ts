import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  }
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return { elementRef, isIntersecting };
}

export function useProgressAnimation(
  value: number,
  delay: number = 0,
  duration: number = 1500
) {
  const [progress, setProgress] = useState(0);
  const { elementRef, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    if (!isIntersecting) return;

    let start: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      // Start animation after delay
      if (elapsed > delay) {
        const adjustedElapsed = elapsed - delay;
        const easedProgress = Math.min(adjustedElapsed / duration, 1);
        setProgress(Math.floor(easedProgress * value));
      }

      if (elapsed - delay < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setProgress(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isIntersecting, value, delay, duration]);

  return { progress, elementRef };
}
