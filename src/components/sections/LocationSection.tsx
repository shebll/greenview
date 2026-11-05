import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { project } from "@/content/project";
import { LocationMap } from "./LocationMap";

export function LocationSection() {
  const l = project.location;
  return (
    <Section>
      <h2 className="text-h2">{l.title}</h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="rounded-card border border-line p-6 md:px-20 md:py-15">
          <p className="text-[0.8rem] font-semibold uppercase tracking-wider">
            {l.addressLabel}
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
            <address className="max-w-56 text-h3 font-bold not-italic text-ink">
              {l.text}
            </address>
            <Button
              variant="arrow"
              external
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(l.address)}`}
            >
              {l.directionsLabel}
            </Button>
          </div>

          <h3 className="mt-6 text-xl font-bold">{l.transportTitle}</h3>
          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6">
            {l.transport.map(([name, distance]) => (
              <div key={name}>
                <dt className="text-base text-muted">{name}</dt>
                <dd className="text-base font-bold text-ink">{distance}</dd>
              </div>
            ))}
          </dl>
        </div>
        <LocationMap />
      </div>
    </Section>
  );
}
