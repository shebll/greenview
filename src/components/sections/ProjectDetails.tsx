import { project } from "@/content/project";

export function ProjectDetails() {
  return (
    <aside>
      <h3 className="text-xl font-bold">Key Details</h3>
      <ul className="mt-4 space-y-3 text-lg">
        {project.keyDetails.map((d) => (
          <li
            key={d.label}
            className="relative pl-4 before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-brand"
          >
            <strong className="text-ink">{d.label}</strong> {d.value}
          </li>
        ))}
      </ul>
    </aside>
  );
}
