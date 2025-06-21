
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Image, Video } from "lucide-react";

/**
 * Simple UI so a teacher/student can "search" or specify URLs of images/videos for the lesson.
 * (Extension: Hook up to real image/video search APIs if requested)
 */
export const LessonMediaSearch = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"image" | "video">("image");
  const [results, setResults] = useState<string[]>([]);

  // Dummy handler: Just adds the entered URL or search term to the results.
  const handleAdd = () => {
    if (!query.trim()) return;
    setResults([...results, query.trim()]);
    setQuery("");
  };

  return (
    <div className="mb-6 space-y-2 font-[Noto_Kufi_Arabic]">
      <label className="block text-lg font-bold text-tunisia-blue mb-2">
        بحث عن صور أو فيديوهات لإثراء الدرس
      </label>
      <div className="flex gap-2 mb-2">
        <Button
          variant={type === "image" ? "default" : "outline"}
          onClick={() => setType("image")}
          size="icon"
        >
          <Image className="h-5 w-5" />
        </Button>
        <Button
          variant={type === "video" ? "default" : "outline"}
          onClick={() => setType("video")}
          size="icon"
        >
          <Video className="h-5 w-5" />
        </Button>
        <Input
          placeholder={`أدخل كلمة مفتاحية أو رابط ${type === "image" ? "صورة" : "فيديو"}`}
          value={query}
          className="flex-1"
          onChange={e => setQuery(e.target.value)}
          dir="rtl"
        />
        <Button onClick={handleAdd}>إضافة</Button>
      </div>
      {results.length > 0 && (
        <div className="bg-gray-100 p-3 rounded space-y-1">
          <div className="font-semibold mb-1">وسائط مقترحة:</div>
          <ul className="list-disc pr-4">
            {results.map((item, i) => (
              <li key={i} className="break-all">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LessonMediaSearch;

