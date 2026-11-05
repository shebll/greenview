"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

// Center-snapping carousel: drag with the mouse, swipe on touch.
// The active slide is centered at full opacity; its neighbors are faded.
export function Carousel({
  children,
  slideClassName = "w-[85vw] md:w-[950px]",
  edgePadding = "px-[calc(50%-42.5vw)] md:px-[calc(50%-325px)]",
  label,
}: {
  children: React.ReactNode;
  slideClassName?: string; // slide width
  edgePadding?: string; // (50% - half slide width) so first/last slides can center
  label: string;
}) {
  const track = useRef<HTMLUListElement>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0 });
  const [active, setActive] = useState(1);
  const slides = Children.toArray(children);

  const nearest = useCallback(() => {
    const el = track.current;
    if (!el) return 0;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const s = child as HTMLElement;
      const dist = Math.abs(s.offsetLeft + s.offsetWidth / 2 - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  }, []);

  const centerOn = (i: number) => {
    const el = track.current;
    const s = el?.children[i] as HTMLElement | undefined;
    if (!el || !s) return;
    el.scrollTo({
      left: s.offsetLeft + s.offsetWidth / 2 - el.clientWidth / 2,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setActive(nearest());
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [nearest]);

  const end = () => {
    const el = track.current;
    if (!drag.current.down || !el) return;
    drag.current.down = false;
    el.style.scrollSnapType = "";
    el.style.cursor = "";
    centerOn(nearest());
  };

  return (
    <ul
      ref={track}
      aria-label={label}
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse" || !track.current) return; // touch uses native swipe
        drag.current = {
          down: true,
          startX: e.clientX,
          startLeft: track.current.scrollLeft,
        };
        track.current.style.scrollSnapType = "none";
        track.current.style.cursor = "grabbing";
        track.current.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!drag.current.down || !track.current) return;
        track.current.scrollLeft =
          drag.current.startLeft - (e.clientX - drag.current.startX);
      }}
      onPointerUp={end}
      onPointerCancel={end}
      className={`relative -mx-gutter flex cursor-grab select-none snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [&_img]:pointer-events-none [&::-webkit-scrollbar]:hidden [scrollbar-width:none] ${edgePadding}`}
    >
      {slides.map((slide, i) => (
        <li
          key={i}
          className={`shrink-0 snap-center transition-opacity duration-500 ${slideClassName} ${
            i === active ? "opacity-100" : "opacity-40"
          }`}
        >
          {slide}
        </li>
      ))}
    </ul>
  );
}
