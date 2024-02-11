import { cn } from "@/lib/utils";

function YoutubeVideoPlayer({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  return (
    <iframe
      className={cn("aspect-video rounded-xl border-2 bg-white", className)}
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

export default YoutubeVideoPlayer;
