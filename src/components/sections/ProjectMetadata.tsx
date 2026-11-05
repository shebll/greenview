import { Container } from "@/components/shared/Container";
import { Icon } from "@/components/shared/Icon";
import { project } from "@/content/project";

// Mobile: 2-column grid, icon above text. Desktop: 5 in a row, icon beside text.
export function ProjectMetadata() {
  return (
    <Container className="mt-8">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-8 border-t border-line py-8 md:grid-cols-3 xl:grid-cols-5">
        {project.metadata.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-3 text-center last:col-span-2 md:last:col-span-1 xl:flex-row xl:text-left"
          >
            <span className="grid size-16 shrink-0 place-items-center rounded-full border border-line text-ink">
              <Icon name={item.icon} />
            </span>
            <div>
              <dt className=" text-muted font-semibold leading-5">
                {item.label}
              </dt>
              <dd className=" font-bold text-ink ">{item.value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </Container>
  );
}
