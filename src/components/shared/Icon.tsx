const paths = {
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z M12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
  layers: "M12 3 3 8l9 5 9-5-9-5z M3 13l9 5 9-5",
  building: "M5 21V4h9v17 M14 9h5v12 M8 8h3 M8 12h3 M8 16h3 M3 21h18",
  area: "M4 4h3v3H4z M17 4h3v3h-3z M4 17h3v3H4z M17 17h3v3h-3z M7 5.5h10 M7 18.5h10 M5.5 7v10 M18.5 7v10",
  calendar: "M4 6h16v14H4z M4 10h16 M8 3v4 M16 3v4",
  dollar:
    "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1 1.6 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5 M12 6v2 M12 16v2",
  "arrow-up-right": "M7 17 17 7 M8 7h9v9",
  "chevron-left": "m15 6-6 6 6 6",
  "chevron-right": "m9 6 6 6-6 6",
  "chevron-up": "m6 15 6-6 6 6",
  image: "M4 5h16v14H4z M4 16l5-5 4 4 3-3 4 4 M9 9.5h.01",
  plans: "M4 9V4h5 M15 4h5v5 M20 15v5h-5 M9 20H4v-5",
  video: "M4 7h16v10H4z M10 10l4 2-4 2z",
  street: "M12 3 4 7v10l8 4 8-4V7l-8-4z M4 7l8 4 8-4 M12 11v10",
  menu: "M4 7h16 M4 12h16 M4 17h16",
  close: "M6 6l12 12 M18 6 6 18",
  shield: "M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3z M9.5 12l2 2 3.5-4",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  dumbbell: "M6 8v8 M3 10v4 M18 8v8 M21 10v4 M6 12h12",
  play: "M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z M6 20l3-7 3 3 3-6 3 10",
  wrench:
    "M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2-2z",
  pool: "M3 18c2 0 2-1.5 4.5-1.5S10 18 12 18s2-1.5 4.5-1.5S19 18 21 18 M8 14V6a2 2 0 0 1 4 0 M16 14V6a2 2 0 0 1 4 0 M8 10h8",
  flame:
    "M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z",
  tree: "M12 21v-6 M12 15c-4 0-6-2-6-5a4 4 0 0 1 3-3.5A3.5 3.5 0 0 1 15 6.5 4 4 0 0 1 18 10c0 3-2 5-6 5z",
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className = "size-7",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
