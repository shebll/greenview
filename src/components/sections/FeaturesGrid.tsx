import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { project } from "@/content/project";
import { FeatureCard } from "./FeatureCard";

// 1 column on mobile, 2 on tablet, 4 on desktop.
export function FeaturesGrid() {
  return (
    <Section>
      <h2 className="text-h2">{project.featuresTitle}</h2>
      <div className="mt-10 grid gap-x-8 gap-y-26 sm:grid-cols-2 lg:grid-cols-4">
        {project.features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 4) * 100}>
            <FeatureCard {...f} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
