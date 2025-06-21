
import { useParams, Link } from "react-router-dom";
import { TEACHER_LESSONS } from "@/components/teacher/teacherLessons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, BookOpen } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import LessonReader from "@/components/teacher/LessonReader";
import { useEffect, useMemo } from "react";
import { toast } from "sonner";

const Lesson = () => {
  const { id } = useParams();
  const lesson = TEACHER_LESSONS.find(l => l.id === id);

  const getLessonFullText = useMemo(() => {
    if (!lesson) return "";
    
    let fullText = "";
    
    if (lesson.customContent) {
      if (lesson.id === "north-tunisian-countryside") {
        fullText = `
          يتميّز المشهد الريفي في تونس بتنوعه واختلاف خصائصه من منطقة إلى أخرى، وذلك تبعًا للعوامل الطبيعية والمناخية والاقتصادية. ويُعدّ الشمال التونسي من أبرز المناطق التي تتّسم بغنى بيئي وطبيعي، مما ينعكس مباشرة على نوعية الأنشطة الفلاحية والسكّانية فيه.
          الخصائص الفلاحية بالشمال التونسي. تواجد هام للزراعات البعلية أهمها القمح والشعير.. التي تعتمد أساسا على الأمطار ويفوق معدّلها 400 مم سنويّا وخصوبة التربة.
          وتتكامل هذه الزراعات البعلية مع أنشطة أخرى كـتربية الماشية والأبقار، التي تجد في المراعي الطبيعية ومخلفات الإنتاج الفلاحي موردًا غذائيًا هامًا.
          ومن بين مكونات المجال الفلاحي نلاحظ أيضًا تواجد بعض الغراسات كأشجار الزيتون وبعض الأشجار المثمرة، وهذا يدفعنا للتعرف أكثر على أهمية شجرة الزيتون في حياتنا الفلاحية.
          المشهد التضاريسي بالشمال التونسي. يتنوّع المشهد الطبيعي في الشمال التونسي بتعدّد أشكاله التضاريسية، وهو ما ينعكس على نوعية الأنشطة البشرية الممكن ممارستها في كل منطقة. ويمكن التمييز بين ثلاثة أنماط رئيسية من التضاريس، لكلّ منها خصائصه ومميزاته.
          السهول هي أراض تغلب عليها ظاهرة الانبساط وتشقّها مجار مائيّة غير عميقة مثل سهل مجردة.
          الجبال تُعدّ الجبال من أبرز المظاهر التضاريسية في الشمال التونسي، وتتميّز بارتفاعها الكبير وانحدار سفوحها بشدّة، مما يجعل التنقّل والأنشطة الفلاحية فيها أكثر صعوبة. ومن أبرز الأمثلة على ذلك جبل زغوان.
          الهضاب هي مناطق تضاريسية تمتاز بسطحها المنبسط أو المحدّب أحيانًا، وتخترقها أودية ضيّقة وعميقة نتيجة التعرية. وتنتشر هذه التضاريس خاصة في الشمال الغربي من تونس، ومن أبرز الأمثلة على ذلك هضبة الكاف وهضاب باجة.
      `;
      } else if (lesson.id === "central-tunisian-countryside") {
        fullText = `
          يتميّز المشهد الريفي في تونس بتنوعه واختلاف خصائصه من منطقة إلى أخرى، وذلك تبعًا للعوامل الطبيعية والمناخية والاقتصادية. ويُعدّ الوسط ��لتونسي من أبرز المناطق التي تتّسم بغنى بيئي وطبيعي، مما ينعكس مباشرة على نوعية الأنشطة الفلاحية والسكّانية فيه.
          الخصائص الفلاحية بالوسط التونسي. يتميّز الوسط التونسي بوجود هام للغراسات المنظّمة التي تمتدّ على مساحات شاسعة، وتعتمد على وسائل عصرية حديثة، مثل الري بالتنقيط واستعمال الآلات الفلاحية المتطورة. ومن أهم هذه الغراسات نذكر الأشجار المثمرة وأشجار الزيتون.
          تُعدّ منطقة النفيضة (التي تقع إداريا في ولاية سوسة وتمتد نحو الوسط التونسي) من النماذج الناجحة لهذه الغراسات العصرية، إذ تشهد استثمارات كبرى في زراعة الزيتون والرمان واللوز، مع اعتماد أساليب حديثة في الإنتاج والتسويق.
          إلى جانب الغراسات المنظّمة، يتميّز الريف في الوسط التونسي بنشاط مكثّف في تربية الماشية والأبقار، وهو ما يساهم في دعم الاقتصاد المحلّي وتوفير المنتجات الحيوانية مثل الحليب، اللحوم، والصوف.
          الخصائص التضاريسية للوسط التونسي. يتنوع المشهد التضاريسي بالوسط التونسي فنجد:
          السهول هي أراض منبسطة تمتدّ على مساحات شاسعة، وتُعتَبر الطاغية على المشهد التضاريسي بالوسط التونسي. سهل المكناسي (بولاية سيدي بوزيد): يمتد بين الجبال، ويتميّز بانبساطه واستغلاله في زراعة الحبوب وتربية الماشية.
          الجبال هي تضاريس تتميّز بالارتفاع وشدة انحدار السفوح مثل جبل جبل السرج (ولاية القيروان): يُعد من أعلى جب��ل الوسط، ويمثّل جزءا من الحزام الجبلي الذي يفصل بين السهول الشمالية والجنوبية، ويعرف بتنوع غطائه النباتي.
          الهضاب تُعتَبر الهضاب تضاريس منبسطة وأحيانًا محدّبة، وتتميّز الأودية في الهضاب بأنها غالبًا ضيقة وعميقة. وفي الوسط التونسي، نجد بعض الهضاب الهامة مثل هضبة قفصة وهضبة سيدي بوزيد.
        `;
      } else {
        fullText = lesson.description;
      }
      return fullText.trim();
    }
    
    fullText = lesson.description;
    if (lesson.landmarks && lesson.landmarks.length > 0) {
      lesson.landmarks.forEach(landmark => {
        fullText += ` ${landmark.name}. ${landmark.shortDescription}`;
      });
    }
    
    return fullText.trim();
  }, [lesson]);

  useEffect(() => {
    if (lesson) {
      toast("بدأ الدرس. انقر على زر الإيقاف للتوقف عن القراءة", {
        duration: 3000,
      });
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="container mx-auto py-12">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4 font-[Noto_Kufi_Arabic]">لم يتم العثور على ا��درس</h2>
          <Link to="/teacher-space" className="text-tunisia-blue underline font-[Noto_Kufi_Arabic] hover:text-tunisia-red transition-colors">
            العودة إلى الدروس
          </Link>
        </div>
      </div>
    );
  }

  const backgroundStyle = {
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7)), 
      url('/uploads/Background3.jpg')`,
      backgroundSize: '100%',
   

    
   
   
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
  };
  

  if (lesson.customContent) {
    return (
      <div className="min-h-screen bg-[#f8f9fa]" dir="rtl">
        <div className="container mx-auto py-12 px-4">
          <div 
            className="max-w-4xl mx-auto rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl border-2 border-tunisia-blue/20 bg-white/95 " style={backgroundStyle}
          >
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tunisia-blue via-tunisia-red to-tunisia-sand"/>
              <div className="p-8">
                <div className="mb-6 flex justify-between items-center">
                  <Link 
                    to="/teacher-space" 
                    className="text-tunisia-blue hover:text-tunisia-red transition-colors flex items-center gap-2 font-[Noto_Kufi_Arabic] group"
                  >
                    <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
                    <span>العودة إلى الدروس</span>
                  </Link>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b pb-4">
                    <Layers className="h-8 w-8 text-tunisia-blue" />
                    <h1 className="text-3xl font-bold text-tunisia-blue font-[Noto_Kufi_Arabic]">{lesson.title}</h1>
                  </div>
                  <LessonReader text={getLessonFullText} initialAutoPlay={true} />
                  <div className="prose prose-lg max-w-none font-[Noto_Kufi_Arabic] leading-relaxed">
                    {lesson.customContent}
                  </div>
                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={() => {
                        window.location.href = `/quiz/${id}`;
                      }}
                      className="font-[Noto_Kufi_Arabic] bg-tunisia-blue hover:bg-tunisia-red transition-colors"
                    >
                      بدء الاختبار
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" dir="rtl" style={backgroundStyle}>
      <div className="container mx-auto py-12 px-4">
        <div 
          className="max-w-4xl mx-auto rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl border-2 border-tunisia-blue/20 bg-white/95"
        >
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tunisia-blue via-tunisia-red to-tunisia-sand"/>
            <div className="p-8">
              <div className="mb-6 flex justify-between items-center">
                <Link 
                  to="/teacher-space" 
                  className="text-tunisia-blue hover:text-tunisia-red transition-colors flex items-center gap-2 font-[Noto_Kufi_Arabic] group"
                >
                  <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
                  <span>العودة إلى الدروس</span>
                </Link>
                <LessonReader text={getLessonFullText} initialAutoPlay={true} />
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-3 border-b pb-4">
                  <Layers className="h-8 w-8 text-tunisia-blue" />
                  <h1 className="text-3xl font-bold text-tunisia-blue font-[Noto_Kufi_Arabic]">{lesson.title}</h1>
                </div>
                <div>
                  <p className="text-lg leading-relaxed font-[Noto_Kufi_Arabic] text-gray-700">{lesson.description}</p>
                </div>
                {lesson.landmarks && lesson.landmarks.length > 0 && (
                  <div className="pt-6">
                    <h2 className="text-xl font-bold mb-6 text-green-800 font-[Noto_Kufi_Arabic] flex items-center gap-2">
                      <Layers className="h-6 w-6" />
                      المعالم المرتبطة:
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {lesson.landmarks.map(lm => (
                        <Card key={lm.id} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-100">
                          <div className="aspect-video relative overflow-hidden">
                            {lm.images.length > 0 && (
                              <img 
                                src={lm.images[0]} 
                                alt={lm.name} 
                                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" 
                              />
                            )}
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold mb-2 font-[Noto_Kufi_Arabic] text-tunisia-blue">{lm.name}</h3>
                            <p className="text-gray-700 font-[Noto_Kufi_Arabic] mb-4">{lm.shortDescription}</p>
                            <Button 
                              variant="outline" 
                              className="w-full font-[Noto_Kufi_Arabic] hover:bg-tunisia-blue hover:text-white transition-colors" 
                              asChild
                            >
                              <Link to={`/landmark/${lm.id}`}>عرض التفاصيل</Link>
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => {
                      window.location.href = `/quiz/${id}`;
                    }}
                    className="font-[Noto_Kufi_Arabic] bg-tunisia-blue hover:bg-tunisia-red transition-colors"
                  >
                    بدء الاختبار
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
