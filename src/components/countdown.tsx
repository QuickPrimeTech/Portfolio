"use client";

import { useEffect, useState } from "react";

// Countdown logic
export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background text-foreground rounded-lg p-4 mb-6 border border-border">
      <p className="text-center text-sm mb-2 text-destructive">
        ⏰ OFFER EXPIRES IN:
      </p>
      <div className="flex justify-center space-x-4">
        {["days", "hours", "minutes", "seconds"].map((key) => (
          <div key={key} className="text-center">
            <div className="text-2xl font-bold">
              {timeLeft[key as keyof typeof timeLeft]
                .toString()
                .padStart(2, "0")}
            </div>
            <div className="text-xs uppercase">{key}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
