export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-2xl font-bold tracking-tight text-ink ${className}`}>
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <path d="M12 2 2 7l10 5 10-5-10-5z" className="fill-brand" />
        <path d="M2 12l10 5 10-5v3l-10 5L2 15v-3z" className="fill-ink" />
      </svg>
      spaciaz
    </span>
  );
}
