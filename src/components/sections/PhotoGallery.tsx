import { Picture } from "@/components/shared/Picture";
import type { ImageItem } from "@/content/project";
import { Carousel } from "../shared/Carousel";

export function PhotoGallery({ photos }: { photos: ImageItem[] }) {
  return (
    <Carousel label="Project photos">
      {photos.map((p, i) => (
        <Picture
          src={p.src}
          key={p.alt}
          {...p}
          label={`Photo ${i + 1}`}
          // sizes="(min-width: 768px) 650px, 85vw"
          className="aspect-4/3 rounded-image md:aspect-850/620"
        />
      ))}
    </Carousel>
  );
}
