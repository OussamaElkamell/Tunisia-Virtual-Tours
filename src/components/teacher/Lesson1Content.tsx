import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import LessonStaticMedia from "./LessonStaticMedia";

/**
 * All textual content for Lesson 1, including static images/videos and search UI.
 */
const speak = (text: string) => {
  if ('speechSynthesis' in window) {
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-TN';
    window.speechSynthesis.speak(utterance);
  }
};

// Real images & videos for Tunisian countryside and agriculture
const agricultureImages = [
  {
    type: "image" as const,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtK9-L1bAIiGLow11cghn-anBltbDveZIklg&s",
    alt: "الريف التونسي - الحقول",
  },
  {
    type: "image" as const,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JNfeqD9q4VBbi2V0CmS7EVW9U8DkVqIQ2g&s",
    alt: "منظر زراعي في تونس",
  },
];
const agricultureImagesOlive = [
  {
    type: "image" as const,
    src: "https://www.fao.org/images/newsroomlibraries/stories-images/7baeff607008355715fd07be82d0f8be.jpg?sfvrsn=e6691b8d_12",
    alt: "تربية الماشية"
  },
  {
    type: "image" as const,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMocPMGFJ1YqQ5dz4Zk00rPpQ0d4H8gG9cfA&s",
    alt: "الزراعات البعلية",
  },
];
const oliveHarvestVideos = [
  {
    type: "video" as const,
    src: "https://www.youtube.com/watch?v=kyy28sKnC1M",
    alt: "موسم جني الزيتون في سليانة"
  }
];

// Real images & videos for terrain (السهول والجبال)
const plainsAndMountainsImages = [
  {
    type: "image" as const,
    src: "https://www.alchourouk.com/sites/default/files/article/jendouba55.jpg",
    alt: "سهل مجردة في تونس",
  },
  {
    type: "image" as const,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROxuz6_PkhWnVFT8TX_sUpAB4uunT6HBXMqQ&s",
    alt: "جبال الشمال التونسي",
  },
];

const mountainVideos = [
  {
    type: "video" as const,
    src: "https://www.youtube.com/watch?v=bTJoyAVhJQU",
    alt: "جبل زغوان"
  }
];

// plateau ("الهضاب") images/videos
const plateauMedia = [
  {
    type: "image" as const,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdV_fnsGhkwYH5V4HAPj8LTzkNoymQPEDMlA&s",
    alt: "هضبة الكاف",
  },
  {
    type: "image" as const,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp73_X0VRLyFo8iRgjjZhOtBCOHp8ClJqVg&s",
    alt: "هضاب باجة",
  },
];

export const Lesson1Content = () => (
  <div dir="rtl" className="space-y-8 max-w-full overflow-hidden">
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl sm:text-2xl font-bold text-red-600 font-[Noto_Kufi_Arabic] text-center">
        مشهد ريفي من الشمال التونسي
      </h1>
    </div>
    <div>
      <p className="font-[Noto_Kufi_Arabic] text-base sm:text-lg">
        يتميّز المشهد الريفي في تونس بتنوعه واختلاف خصائصه من منطقة إلى أخرى، وذلك تبعًا للعوامل الطبيعية والمناخية والاقتصادية. ويُعدّ الشمال التونسي من أبرز المناطق التي تتّسم بغنى بيئي وطبيعي، مما ينعكس مباشرة على نوعية الأنشطة الفلاحية والسكّانية فيه.
      </p>
      <Button
        variant="ghost"
        size="icon"
        className="ml-2"
        onClick={() =>
          speak("يتميّز المشهد الريفي في تونس بتنوعه واختلاف خصائصه من منطقة إلى أخرى، وذلك تبعًا للعوامل الطبيعية والمناخية والاقتصادية. ويُعدّ الشمال التونسي من أبرز المناطق التي تتّسم بغنى بيئي وطبيعي، مما ينعكس مباشرة على نوعية الأنشطة الفلاحية والسكّانية فيه.")
        }
      >
        <Volume2 />
      </Button>
    </div>
    {/* "صور من الريف التونسي" */}
    <LessonStaticMedia 
      title="صور من الريف التونسي"
      media={agricultureImages}
    />

    <div>
      <h2 className="text-lg sm:text-xl font-bold text-green-800 mb-2 font-[Noto_Kufi_Arabic]">
        1. الخصائص الفلاحية بالشمال التونسي:
      </h2>
      <ul className="list-disc pr-3 sm:pr-5 space-y-1 font-[Noto_Kufi_Arabic] text-sm sm:text-base">
        <li>
          تواجد هام للزراعات البعلية أهمها القمح والشعير.. التي تعتمد أساسا على الأمطار ويفوق معدّلها 400 مم سنويّا وخصوبة التربة.
        </li>
        <li>
          وتتكامل هذه الزراعات البعلية مع أنشطة أخرى كـتربية الماشية والأبقار، التي تجد في المراعي الطبيعية ومخلفات الإنتاج الفلاحي موردًا غذائيًا هامًا.
        </li>
        <li>
          ومن بين مكونات المجال الفلاحي نلاحظ أيضًا تواجد بعض الغراسات كأشجار الزيتون وبعض الأشجار المثمرة، وهذا يدفعنا للتعرف أكثر على أهمية شجرة الزيتون في حياتنا الفلاحية، ولذلك سأعرض عليكم الآن فيديو يسلّط الضوء على موسم جني الزيتون في ولاية سليانة.
        </li>
      </ul>
      <Button
        variant="ghost"
        size="icon"
        className="ml-2"
        onClick={() =>
          speak("الخصائص الفلاحية: تواجد هام للزراعات البعلية أهمها القمح والشعير التي تعتمد أساسا على الأمطار ويفوق معدلها 400 مليمتر سنويا وخصوبة التربة. وتتكامل هذه الزراعات مع تربية الماشية والأبقار التي تجد في المراعي الطبيعية ومخلفات الإنتاج الفلاحي موردًا غذائيًا هامًا. ومن مكونات المجال الفلاحي أيضًا وجود غراسات كالزيتون وبعض الأشجار المثمرة.")
        }
      >
        <Volume2 />
      </Button>
    </div>

    {/* "صور الفلاحة وجني الزيتون" */}
    <LessonStaticMedia 
      title="صور الفلاحة وجني الزيتون"
      media={[...agricultureImagesOlive, ...oliveHarvestVideos]}
      description="أمثلة حقيقية: صور من الفلاحة وفيديو لجني الزيتون في سليانة"
    />

    {/* Remaining sections */}
    <div>
      <h2 className="text-lg sm:text-xl font-bold text-green-800 mb-2 font-[Noto_Kufi_Arabic]">
        2. المشهد التضاريسي بالشمال التونسي:
      </h2>
      <p className="mb-2 font-[Noto_Kufi_Arabic] text-sm sm:text-base">
        يتنوّع المشهد الطبيعي في الشمال التونسي بتعدّد أشكاله التضاريسية، وهو ما ينعكس على نوعية الأنشطة البشرية الممكن ممارستها في كل منطقة. ويمكن التمييز بين ثلاثة أنماط رئيسية من التضاريس، لكلّ منها خصائصه ومميزاته:
      </p>
      <ul className="list-disc pr-3 sm:pr-5 space-y-1 font-[Noto_Kufi_Arabic] text-sm sm:text-base">
        <li>
          السهول: هي أراض تغلب عليها ظاهرة الانبساط وتشقّها مجار مائيّة غير عميقة مثل سهل مجردة.
        </li>
        <li>
          الجبال: تُعدّ الجبال من أبرز المظاهر التضاريسية في الشمال التونسي، وتتميّز بارتفاعها الكبير وانحدار سفوحها بشدّة، مما يجعل التنقّل والأنشطة الفلاحية فيها أكثر صعوبة. ومن أبرز الأمثلة على ذلك جبل زغوان.
        </li>
      </ul>
      <Button
        variant="ghost"
        size="icon"
        className="ml-2"
        onClick={() =>
          speak("يتنوع المشهد الطبيعي في الشمال التونسي بتعدد أشكاله التضاريسية. ويمكن التمييز بين ثلاثة أنماط رئيسية من التضاريس: السهول، والجبال مثل جبل زغوان.")
        }
      >
        <Volume2 />
      </Button>
    </div>
    <LessonStaticMedia 
      title="صور و فيديو: سهول وجبال الشمال التونسي"
      media={[...plainsAndMountainsImages, ...mountainVideos]}
    />
    <div>
      <h3 className="text-md sm:text-lg mt-6 text-tunisia-blue font-[Noto_Kufi_Arabic]">الهضاب:</h3>
    </div>
    <LessonStaticMedia 
      title="صور الهضاب التونسية"
      media={plateauMedia}
    />
  </div>
);

export default Lesson1Content;
