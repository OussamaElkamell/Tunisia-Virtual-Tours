
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface StaticMediaProps {
  title: string;
  media: { type: "image" | "video"; src: string; alt: string; }[];
  description?: string;
}

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export const LessonStaticMedia = ({ title, media, description }: StaticMediaProps) => {
  const [loadingVideo, setLoadingVideo] = useState<number | null>(null);
  
  return (
    <div className="my-4">
      <h3 className="text-lg font-bold text-tunisia-blue mb-2 font-[Noto_Kufi_Arabic]">{title}</h3>
      {description && <p className="mb-2 font-[Noto_Kufi_Arabic]">{description}</p>}
      <div className="flex gap-4 flex-wrap">
        {media.map((m, i) => (
          <Card key={i} className="w-56 overflow-hidden">
            {m.type === "image" ? (
              <img src={m.src} alt={m.alt} className="object-cover w-full h-36" loading="lazy" />
            ) : (
              <div className="w-full h-36 relative bg-gray-100">
                {getYouTubeVideoId(m.src) ? (
                  <iframe 
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(m.src)}`} 
                    title={m.alt}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    onLoad={() => setLoadingVideo(null)}
                    onError={(e) => console.error("Video error:", e)}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-sm text-gray-500 text-center p-2">Video unavailable</p>
                  </div>
                )}
                {loadingVideo === i && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80">
                    <div className="loading-spinner" />
                  </div>
                )}
              </div>
            )}
            {m.alt && (
              <div className="p-2 text-xs text-center font-[Noto_Kufi_Arabic]">
                {m.alt}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LessonStaticMedia;
