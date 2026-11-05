import { project } from "@/content/project";

export function LocationMap() {
  const { address } = project.location;
  return (
    <iframe
      title={`Map showing ${address}`}
      src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-80 w-full rounded-card border-0 lg:h-full"
    />
  );
}
