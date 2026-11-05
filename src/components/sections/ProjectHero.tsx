import { Container } from "@/components/shared/Container";
import { Icon } from "@/components/shared/Icon";
import { project } from "@/content/project";

export function ProjectHero() {
  return (
    <Container className="pt-12 md:pt-16">
      <a href="#" className="inline-flex items-center gap-2 text-small font-semibold text-ink">
        <Icon name="pin" className="size-5 text-brand-hover" />
        {project.city}
      </a>
      <h1 className="mt-2 text-display">{project.title}</h1>
    </Container>
  );
}
