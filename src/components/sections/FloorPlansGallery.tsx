import { Carousel } from "@/components/shared/Carousel";
import { Picture } from "@/components/shared/Picture";
import type { ImageItem } from "@/content/project";

export function FloorPlansGallery({ plans }: { plans: ImageItem[] }) {
  return (
    <Carousel label="Floor plans">
      {plans.map((p, i) => (
        <Picture
          key={p.alt}
          {...p}
          label={`Floor plan ${i + 1}`}
          sizes="(min-width: 768px) 650px, 85vw"
          className="aspect-4/3 rounded-image border border-line md:aspect-1250/620"
        />
      ))}
    </Carousel>
  );
}
