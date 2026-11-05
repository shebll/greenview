import type { VideoItem } from "@/content/project";

export function VideoGallery({ videos }: { videos: VideoItem[] }) {
  return (
    <div className="w-full">
      {videos.map((video) => (
        <div
          key={video.title}
          className="relative aspect-video w-full overflow-hidden rounded-image bg-black"
        >
          {video.youtubeId ? (
            <iframe
              title={video.title}
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?start=17&rel=0`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 size-full border-0"
            />
          ) : (
            <div className="grid size-full place-items-center text-white/60">
              Video unavailable
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
