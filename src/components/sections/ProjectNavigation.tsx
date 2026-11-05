import { Container } from "@/components/shared/Container";
import { project } from "@/content/project";

export function ProjectNavigation() {
  const { prev, next } = project.nav;
  const link =
    "flex-1 py-4 text-center text-xl font-bold text-ink transition-colors hover:bg-field ";
  return (
    <Container className="pb-section">
      <nav
        aria-label="Project navigation"
        className="flex  divide-x divide-line overflow-hidden rounded-full border border-line"
      >
        <a href={prev.href} className={link}>
          <span className="mr-3 text-brand-hover " aria-hidden="true">
            ‹
          </span>
          {prev.label}
        </a>
        <a href={next.href} className={link}>
          {next.label}
          <span className="ml-3 text-brand-hover" aria-hidden="true">
            ›
          </span>
        </a>
      </nav>
    </Container>
  );
}
