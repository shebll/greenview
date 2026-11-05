export function StreetView({ url }: { url: string }) {
  return (
    <iframe
      title="Street view of the project"
      src={url}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="aspect-4/3 w-full rounded-image border-0 md:aspect-auto md:h-155"
    />
  );
}
