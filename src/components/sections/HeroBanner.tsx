import { Picture } from "@/components/shared/Picture";
import { project } from "@/content/project";

// Dark photo band behind the header + breadcrumb.
export function HeroBanner() {
  return (
    <div className="relative h-92 md:h-90">
      <div className="absolute inset-0">
        <Picture
          src="/images/hero/hero.jpeg"
          alt=""
          tone="dark"
          label="Hero background"
          priority
          className="absolute inset-0 h-full w-full object-c"
        />

        <div className="absolute inset-0 bg-black/45" />
      </div>
      <div className="relative flex h-full items-end pb-16 px-3 xl:px-20 ">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2  text-white/70 text-sm font-semibold ">
            {project.breadcrumb.map((item, i) => (
              <li key={item.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">›</span>}
                {item.href ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <span aria-current="page" className="">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
