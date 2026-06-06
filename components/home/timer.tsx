"use client";

import { useEffect, useState, useRef } from "react";

interface TimerProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
  storageKey?: string;
  onComplete?: () => void;
  className?: string;
}

const Timer = ({
  hours = 24,
  minutes = 0,
  seconds = 0,
  storageKey = "timer-end",
  onComplete,
  className = "text-3xl",
}: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const endTimeRef = useRef<number>(0);
  const onCompleteRef = useRef(onComplete);
  const totalSecondsRef = useRef(hours * 3600 + minutes * 60 + seconds);
  const storageKeyRef = useRef(storageKey);

  // Update refs when props change
  useEffect(() => {
    totalSecondsRef.current = hours * 3600 + minutes * 60 + seconds;
  }, [hours, minutes, seconds]);

  useEffect(() => {
    storageKeyRef.current = storageKey;
  }, [storageKey]);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const key = storageKeyRef.current;
    const totalSeconds = totalSecondsRef.current;

    // Try to get stored end time, or create new one
    const storedEndTime = sessionStorage.getItem(key);
    const now = Date.now();

    if (storedEndTime) {
      const parsedEndTime = parseInt(storedEndTime, 10);
      if (parsedEndTime > now) {
        endTimeRef.current = parsedEndTime;
      } else {
        endTimeRef.current = now + totalSeconds * 1000;
        sessionStorage.setItem(key, endTimeRef.current.toString());
      }
    } else {
      endTimeRef.current = now + totalSeconds * 1000;
      sessionStorage.setItem(key, endTimeRef.current.toString());
    }

    // Set initial time
    const remaining = Math.max(
      0,
      Math.floor((endTimeRef.current - now) / 1000),
    );
    setTimeLeft(remaining);

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const remaining = Math.max(
        0,
        Math.floor((endTimeRef.current - currentTime) / 1000),
      );

      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        sessionStorage.removeItem(key);
        onCompleteRef.current?.();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array — uses refs instead

  const displayHours = Math.floor(timeLeft / 3600);
  const displayMinutes = Math.floor((timeLeft % 3600) / 60);
  const displaySeconds = timeLeft % 60;

  const showHours = hours > 0 || timeLeft >= 3600;

  return (
    <div className="flex justify-center items-center">
      <h2 className={`${className} text-[17px]`}>
        <span className="bg-surface-primary text-black rounded-sm p-1">
          {showHours && <>{displayHours.toString().padStart(2, "0")}</>}
        </span>
        <span> : </span>
        <span className="bg-surface-primary text-black rounded-sm p-1">
          {displayMinutes.toString().padStart(2, "0")}
        </span>
        <span> : </span>
        <span className="bg-surface-primary text-black rounded-sm p-1">
          {displaySeconds.toString().padStart(2, "0")}
        </span>
      </h2>
    </div>
  );
};

export default Timer;
