"use client";

import { useState } from "react";
import { Icon, type IconName } from "@/components/shared/Icon";
import { Section } from "@/components/shared/Section";
import { project } from "@/content/project";
import { FloorPlansGallery } from "./FloorPlansGallery";
import { PhotoGallery } from "./PhotoGallery";
import { StreetView } from "./StreetView";
import { VideoGallery } from "./VideoGallery";
import { Container } from "../shared/Container";

const tabs: { id: string; label: string; icon: IconName }[] = [
  { id: "photos", label: "Photos", icon: "image" },
  { id: "plans", label: "Plans", icon: "plans" },
  { id: "video", label: "Video", icon: "video" },
  { id: "street", label: "Street View", icon: "street" },
];

export function MediaSection() {
  const [active, setActive] = useState("photos");
  const m = project.media;

  return (
    <div className="pb-20">
      <Section className="pb-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-h2">{m.title}</h2>
          <div
            role="tablist"
            aria-label="Media"
            className="flex flex-col gap-2 md:flex-row"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={active === t.id}
                aria-controls="media-panel"
                onClick={() => setActive(t.id)}
                className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-base font-semibold text-ink transition-colors ${
                  active === t.id
                    ? "border-brand bg-brand"
                    : "border-line hover:border-ink"
                }`}
              >
                <Icon name={t.icon} className="size-7" />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </Section>
      <div
        id="media-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="mt-8 animate-fade-up "
        key={active}
      >
        {active === "photos" && <PhotoGallery photos={m.photos} />}
        {active === "plans" && <FloorPlansGallery plans={m.plans} />}
        {active === "video" && (
          <Container>
            <VideoGallery videos={m.videos} />
          </Container>
        )}
        {active === "street" && (
          <Container>
            <StreetView url={m.streetViewUrl} />
          </Container>
        )}
      </div>
    </div>
  );
}
