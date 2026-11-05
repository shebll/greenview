import { Container } from "@/components/shared/Container";
import { Picture } from "@/components/shared/Picture";
import { project } from "@/content/project";
import { ProjectDetails } from "./ProjectDetails";
import Image from "next/image";

export function ProjectOverview() {
  return (
    <Container className="pt-2">
      <Picture
        {...project.mainImage}
        priority
        label="Main project image · 1290×600"
        sizes="(min-width: 1440px) 1290px, 100vw"
        src={"/images/project/main.jpg"}
        className="aspect-4/3 rounded-image md:aspect-1290/600"
      />

      <div className="grid gap-10 pb-section pt-10 lg:grid-cols-[2fr_1fr] lg:gap-16">
        <div>
          <h2 className="text-h2">{project.descriptionTitle}</h2>
          <div className="mt-4 space-y-6">
            {project.description.map((p) => (
              <p
                className="text-[#4B4B4B] font-medium text-[18px]"
                key={p.slice(0, 20)}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
        <ProjectDetails />
      </div>
    </Container>
  );
}
