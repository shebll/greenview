import Image from "next/image";

type Props = {
  alt: string;
  src?: string;
  className?: string; // set size / aspect ratio / radius here
  tone?: "light" | "dark";
  label?: string;
  priority?: boolean;
  sizes?: string;
};

// Shows the real image when `src` exists, otherwise a placeholder with the same box.
export function Picture({
  alt,
  src,
  className = "",
  tone = "light",
  label,
  priority,
  sizes = "100vw",
}: Props) {
  return (
    <div
      className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="contain-content"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className={`flex size-full items-center justify-center bg-linear-to-br text-small ${
            tone === "dark"
              ? "from-ink to-body text-white/50"
              : "from-surface-soft to-line text-muted"
          }`}
        >
          {label ?? "Image placeholder"}
        </div>
      )}
    </div>
  );
}
