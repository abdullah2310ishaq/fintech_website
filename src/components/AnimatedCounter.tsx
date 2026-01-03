// src/components/AnimatedCounter/index.tsx
import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  to: number;
  suffix?: string; // e.g., "+" or "%"
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  to,
  suffix = "",
  duration = 1500,
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const increment = to / (duration / 16);
          const animate = () => {
            start += increment;
            if (start < to) {
              setCount(Math.ceil(start));
              requestAnimationFrame(animate);
            } else {
              setCount(to);
              setHasAnimated(true);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration, hasAnimated]);

  return (
    <div ref={ref} className={className}>
      {count}
      {suffix}
    </div>
  );
};

export default AnimatedCounter;
