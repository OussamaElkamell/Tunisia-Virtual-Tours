import Lesson1Content from "./Lesson1Content";
import Lesson2Content from "./Lesson2Content";
import { Book, MapPin } from "lucide-react";
import { landmarks } from "@/data/landmarks";

export const TEACHER_LESSONS = [
  {
    id: "north-tunisian-countryside",
    title: "مشهد ريفي من الشمال التونسي",
    customContent: <Lesson1Content />,
    description: "خصائص المشهد الريفي والتضاريس في الشمال التونسي والتعرف على الزراعات والجبال والسهول والهضاب والنشاط الفلاحي.",
    icon: Book,
    quiz: [
      {
        id: 1,
        question: "ما الذي يميز الشمال التونسي من الناحية الفلاحية؟",
        options: [
          "كثرة الصناعات والورشات",
          "اعتماد الزراعات البعلية مثل القمح والشعير، وتربية الماشية",
          "كثرة الغابات فقط",
          "عدم وجود أنشطة بشرية"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "ما هي السهول؟",
        options: [
          "أراضٍ شديدة الانحدار",
          "أراضٍ تغلب عليها ظاهرة الانبساط وتشقها مجار مائية غير عميقة",
          "جزر في البحر",
          "غابات كثيفة"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "ما هي أبرز الجبال في الشمال التونسي؟",
        options: [
          "جبل زغوان",
          "جبل الشيباني",
          "جبل التل الكبير",
          "جبل الطاولة"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "central-tunisian-countryside",
    title: "مشهد ريفي من الوسط التونسي",
    customContent: <Lesson2Content />,
    description: "خصائص المشهد الريفي في الوسط التونسي: الغراسات المنظمة، تربية الماشية، والتضاريس المتنوعة.",
    icon: Book,
    quiz: [
      {
        id: 1,
        question: "ما هي أهم خصائص الغراسات في الوسط التونسي؟",
        options: [
          "اعتمادها على الوسائل التقليدية فقط",
          "اعتمادها على الري بالتنقيط والآلات الفلاحية المتطورة",
          "عدم وجود غراسات منظمة",
          "اقتصارها على النباتات البرية"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "ما هي المنطقة التي تُعد نموذجاً ناجحاً للغراسات العصرية ف�� الوسط التونسي؟",
        options: [
          "منطقة النفيضة",
          "منطقة قفصة",
          "منطقة القصرين",
          "منطقة المكناسي"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "ما هو جبل السرج وأين يقع؟",
        options: [
          "جبل في الشمال، يتميز بقلة النباتات",
          "جبل في الجنوب، معروف بالمناجم",
          "جبل في الوسط (القيروان)، يتميز بتنوع غطائه النباتي",
          "هضبة في الغرب التونسي"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "geography",
    title: "جغرافيا تونس",
    description: "دروس حول المواقع الجغرافية في تونس",
    landmarks: landmarks.filter(l => l.category === "nature"),
    icon: MapPin,
    quiz: [
      {
        id: 1,
        question: "ما هو أعلى جبل في تونس؟",
        options: ["جبل الشعانبي", "جبل زغوان", "جبل بوقرنين", "جبل السراج"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "كم يبلغ طول الساحل التونسي؟",
        options: ["1148 كم", "1250 كم", "1300 كم", "1500 كم"],
        correctAnswer: 0
      }
    ]
  },
];
