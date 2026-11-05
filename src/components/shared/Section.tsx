import { Container } from "./Container";

// Standard page section: container + top divider + vertical spacing.
export function Section({
  id,
  divider = true,
  className = "",
  children,
}: {
  id?: string;
  divider?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Container>
      <section id={id} className={`py-section ${divider ? "border-t border-line" : ""} ${className}`}>
        {children}
      </section>
    </Container>
  );
}
