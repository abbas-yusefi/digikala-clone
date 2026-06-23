"use client";

import { forwardRef, useRef, useEffect, MouseEvent, TouchEvent } from "react";

type HorizantalNavProps = {
  children: React.ReactNode;
  className?: string;
};

const HorizantalNav = forwardRef<HTMLDivElement, HorizantalNavProps>(
  ({ children, className }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const velocity = useRef(0);
    const lastX = useRef(0);
    const hasMoved = useRef(false);
    const animationFrame = useRef<number | null>(null);

    // Merge forwarded ref
    useEffect(() => {
      if (typeof ref === "function") ref(containerRef.current);
      else if (ref) ref.current = containerRef.current;
    }, [ref]);

    const stopMomentum = () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
    };

    const applyMomentum = () => {
      if (!containerRef.current) return;

      const friction = 0.95; // How quickly it slows down
      velocity.current *= friction;

      containerRef.current.scrollLeft -= velocity.current;

      if (Math.abs(velocity.current) > 0.5) {
        animationFrame.current = requestAnimationFrame(applyMomentum);
      } else {
        velocity.current = 0;
      }
    };

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
      stopMomentum(); // Stop any previous momentum
      if (!containerRef.current) return;

      isDragging.current = true;
      hasMoved.current = false;
      startX.current = lastX.current =
        e.pageX - containerRef.current.offsetLeft;
      scrollLeft.current = containerRef.current.scrollLeft;
      velocity.current = 0;

      containerRef.current.style.cursor = "grabbing";
      containerRef.current.style.userSelect = "none";
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (!isDragging.current || !containerRef.current) return;

      e.preventDefault();
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX.current) * 2.2;
      const delta = x - lastX.current;

      containerRef.current.scrollLeft = scrollLeft.current - walk;

      velocity.current = delta * 1.8; // Calculate speed for momentum
      lastX.current = x;

      if (Math.abs(x - startX.current) > 8) hasMoved.current = true;
    };

    const handleMouseUp = () => {
      if (!containerRef.current) return;
      isDragging.current = false;
      containerRef.current.style.cursor = "grab";

      // Start momentum
      if (Math.abs(velocity.current) > 3) {
        applyMomentum();
      }
    };

    const handleMouseLeave = () => {
      if (isDragging.current) handleMouseUp();
      else {
        containerRef.current!.style.cursor = "grab";
      }
    };

    // Prevent click if dragged
    const handleClickCapture = (e: MouseEvent<HTMLDivElement>) => {
      if (hasMoved.current) {
        e.stopPropagation();
        e.preventDefault();
        hasMoved.current = false;
      }
    };

    // Touch support (with momentum)
    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
      stopMomentum();
      if (!containerRef.current) return;
      isDragging.current = true;
      hasMoved.current = false;
      startX.current = lastX.current =
        e.touches[0].pageX - containerRef.current.offsetLeft;
      scrollLeft.current = containerRef.current.scrollLeft;
      velocity.current = 0;
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
      if (!isDragging.current || !containerRef.current) return;
      const x = e.touches[0].pageX - containerRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      const delta = x - lastX.current;

      containerRef.current.scrollLeft = scrollLeft.current - walk;
      velocity.current = delta * 1.8;
      lastX.current = x;

      if (Math.abs(x - startX.current) > 8) hasMoved.current = true;
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
      if (Math.abs(velocity.current) > 3) {
        applyMomentum();
      }
    };

    return (
      <div
        ref={containerRef}
        className={`${className} flex flex-row-reverse overflow-x-auto whitespace-nowrap hide-scrollbar cursor-grab active:cursor-grabbing`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClickCapture={handleClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        {children}
      </div>
    );
  },
);

HorizantalNav.displayName = "HorizantalNav";

export default HorizantalNav;
