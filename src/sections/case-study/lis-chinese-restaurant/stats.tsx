"use client";

import { useEffect, useRef, useState } from "react";

export const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20" ref={statsRef}>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-6 h-0.5 bg-primary block" />
          <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-primary">
            Results Since Launch
          </span>
          <span className="w-6 h-0.5 bg-primary block" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
          Numbers That <span className="italic text-primary">Speak</span> for
          Themselves
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <StatCard
          value={1300}
          label="Total Visitors"
          sublabel="Unique visitors tracked since launch day"
          animate={statsVisible}
          delay="0ms"
        />
        <StatCard
          value={20}
          label="Table Reservations"
          sublabel="Bookings made directly through the website"
          animate={statsVisible}
          delay="150ms"
        />
        <StatCard
          value={15}
          label="Career Applications"
          sublabel="Job submissions via the online careers portal"
          animate={statsVisible}
          delay="300ms"
        />
      </div>
    </section>
  );
};

function useCountUp(target: number, duration = 2000, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return value;
}

function StatCard({
  value,
  label,
  sublabel,
  animate,
  delay,
}: {
  value: number;
  label: string;
  sublabel: string;
  animate: boolean;
  delay: string;
}) {
  const count = useCountUp(value, 2000, animate);
  return (
    <div
      className="flex flex-col items-center text-center px-8 py-12 bg-card border border-border rounded-lg"
      style={{ animationDelay: delay }}
    >
      <span className="font-serif text-6xl font-black text-primary leading-none mb-3">
        {count.toLocaleString()} +
      </span>
      <span className="text-sm font-semibold tracking-widest uppercase text-foreground mb-1">
        {label}
      </span>
      <span className="text-xs text-muted-foreground font-light leading-relaxed max-w-[180px]">
        {sublabel}
      </span>
    </div>
  );
}
