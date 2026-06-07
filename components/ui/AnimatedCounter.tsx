"use client";

import { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2.5, className }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div ref={ref} className={className}>
      {hasAnimated ? (
        <CountUp end={end} duration={duration} suffix={suffix} prefix={prefix} separator="," />
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </div>
  );
}
