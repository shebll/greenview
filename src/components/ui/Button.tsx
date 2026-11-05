import { Icon } from "@/components/shared/Icon";

type Props = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "arrow";
  className?: string;
  external?: boolean;
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  external,
}: Props) {
  const base =
    "group inline-flex items-center justify-center gap-3 rounded-full font-semibold transition-all duration-300 ease-in-out";

  const styles =
    variant === "primary"
      ? "bg-brand px-8 py-3 text-ink hover:bg-brand-hover"
      : "border border-line bg-white py-1 pl-6 pr-1 text-ink hover:border-black hover:bg-black hover:text-white";

  const content =
    variant === "arrow" ? (
      <>
        <span>{children}</span>

        <span className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-full bg-brand">
          <span className="absolute inset-0 grid place-items-center transition-transform duration-300 group-hover:scale-105">
            <Icon
              name="arrow-up-right"
              className="size-6 arrow-entrance text-black"
            />
          </span>
        </span>
      </>
    ) : (
      <>
        <span>{children}</span>
      </>
    );

  const cls = `${base} ${styles} ${className}`;

  return href ? (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  ) : (
    <button type={type} className={cls}>
      {content}
    </button>
  );
}
