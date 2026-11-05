import { Icon, type IconName } from "@/components/shared/Icon";

export function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: IconName;
  title: string;
  text: string;
}) {
  return (
    <article className="group relative mt-12 h-full rounded-[24px] bg-gradient-to-b from-surface-soft to-white px-6 pb-8 pt-16 text-center transition-transform duration-300 hover:-translate-y-1">
      {/* Curved white shape */}
      <div className="pointer-events-none absolute -top-[1px] left-1/2 z-0 w-full max-w-[170px] -translate-x-1/2">
        <svg
          viewBox="0 0 320 104"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H320C290.545 0 267.772 24.6753 253.628 49.8666C235.516 82.1247 200.378 104 160 104C119.622 104 84.4835 82.1247 66.3718 49.8666C52.228 24.6753 29.4552 0 0 0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Floating icon */}
      <span className="absolute left-1/2 top-0 z-10 grid size-[80px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-ink transition-transform duration-300 group-hover:scale-105">
        <Icon name={icon} className="size-10" />
      </span>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-base leading-relaxed text-muted">{text}</p>
      </div>
    </article>
  );
}
