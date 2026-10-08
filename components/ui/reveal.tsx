"use client";

import { useEffect, useRef, useState } from "react";

const hidden = {
  left: "translate-x-8 lg:-translate-x-20",
  right: "translate-x-8 lg:translate-x-20",
};

export function Reveal({
  from,
  children,
}: {
  from: "left" | "right";
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        visible ? "translate-x-0 opacity-100" : `opacity-0 ${hidden[from]}`
      }`}
    >
      {children}
    </div>
  );
}
