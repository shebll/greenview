export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-site px-gutter ${className}`}>{children}</div>;
}
