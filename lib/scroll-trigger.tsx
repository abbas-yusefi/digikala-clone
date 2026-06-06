"use client";
import { useEffect, useRef, useState } from "react";

type ScrollTriggerProps = {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
  onVisible?: (isVisible: boolean) => React.ReactNode;
};

const ScrollTrigger = ({
  children,
  threshold = 0.1,
  className = "",
}: ScrollTriggerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className} data-visible={isVisible}>
      {typeof children === "function" ? children(isVisible) : children}
    </div>
  );
};

export default ScrollTrigger;
