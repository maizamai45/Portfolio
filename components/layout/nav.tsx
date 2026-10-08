"use client";

import { useEffect, useState } from "react";

export function Nav({ items }: { items: { label: string; href: string }[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = items.map((item) => item.href.slice(1));

    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = id;
        }
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  return (
    <nav className="flex gap-6 sm:gap-8">
      {items.map((item) => {
        const isActive = active === item.href.slice(1);
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? "location" : undefined}
            className={`transition-colors ${
              isActive ? "text-accent" : "text-muted hover:text-foreground"
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
