
import { TEACHER_LESSONS } from "@/components/teacher/teacherLessons";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Volume2 } from "lucide-react";
import { Quiz } from "@/components/Quiz";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Book } from "lucide-react";

const TeacherSpace = () => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const lessons = TEACHER_LESSONS;
  const currentLesson = lessons.find(l => l.id === selectedLesson);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-TN'; // Set language to Tunisian Arabic
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleQuizComplete = (passed: boolean) => {
    if (passed) {
      setCompletedLessons([...completedLessons, selectedLesson!]);
      toast("تم إكمال الدرس بنجاح!", {
        duration: 3000,
      });

      const currentIndex = lessons.findIndex(l => l.id === selectedLesson);
      if (currentIndex < lessons.length - 1) {
        const nextLesson = lessons[currentIndex + 1];
        setSelectedLesson(nextLesson.id);
        toast(`تم فتح الدرس التالي: ${nextLesson.title}`, {
          duration: 3000,
        });
        setShowQuiz(false);
      } else {
        toast("أحسنت! لقد أكملت جميع الدروس", {
          duration: 3000,
        });
      }
    } else {
      toast("يجب أن تجتاز الاختبار للانتقال إلى الدرس التالي", {
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1" dir="rtl">
        <div className="container mx-auto py-6 sm:py-12 px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-tunisia-blue font-[Noto_Kufi_Arabic]">
              فضاء المعلم
            </h1>
            <Button asChild className="bg-tunisia-blue hover:bg-blue-700 font-[Noto_Kufi_Arabic] w-full sm:w-auto">
              <Link to="/teacher-guide" className="flex items-center justify-center gap-2">
                دليل المعلم
                <Book className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {lessons.map((lesson, idx) => {
              const Icon = lesson.icon;
              const isCompleted = completedLessons.includes(lesson.id);
              const isFirstLesson = idx === 0;
              const isAvailable = isFirstLesson || completedLessons.includes(lessons[idx - 1]?.id);

              return (
                <Card
  key={lesson.id}
  style={{
    backgroundImage: `url('/uploads/Background3.jpg')`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
  }}
  className={`cursor-pointer transition-all ${
    selectedLesson === lesson.id ? 'ring-2 ring-tunisia-blue' : ''
  } ${!isAvailable ? 'opacity-50' : 'hover:shadow-lg'}`}
  onClick={() => isAvailable && setSelectedLesson(lesson.id)}
>
  <CardHeader className="p-4 sm:p-6">
    <CardTitle className="flex items-center gap-2 font-[Noto_Kufi_Arabic] text-sm sm:text-base flex-wrap">
      {Icon && <Icon className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />}
      {lesson.title}
      <span className="ml-auto flex gap-2 flex-shrink-0">
        {isCompleted && <span className="text-green-500">✓</span>}
        {isAvailable && (
          <Link
            to={`/lesson/${lesson.id}`}
            className="text-xs bg-tunisia-blue hover:bg-tunisia-sand text-white px-2 py-1 rounded transition-colors font-[Noto_Kufi_Arabic]"
            onClick={(e) => e.stopPropagation()}
          >
            صفحة الدرس
          </Link>
        )}
      </span>
    </CardTitle>
  </CardHeader>
  <CardContent className="pb-4 sm:pb-6 px-4 sm:px-6">
    <p className="text-gray-600 mb-4 font-[Noto_Kufi_Arabic] flex items-center text-sm sm:text-base">
      {lesson.description}
      <Button
        variant="ghost"
        size="icon"
        className="ml-2 flex-shrink-0"
        onClick={(e) => {
          e.stopPropagation();
          speak(lesson.description);
        }}
      >
        <Volume2 className="h-4 w-4" />
      </Button>
    </p>
    {lesson.landmarks && lesson.landmarks.length > 0 && (
      <p className="text-xs sm:text-sm text-gray-500 font-[Noto_Kufi_Arabic]">
        {lesson.landmarks.length} معالم متوفرة
      </p>
    )}
  </CardContent>
</Card>

              );
            })}
          </div>

          {selectedLesson && currentLesson && (
            <div className="space-y-4 sm:space-y-6">
              {currentLesson.customContent ? (
                <>
                  <Card className="mb-4 sm:mb-6">
                    <CardContent className="p-4 sm:p-6">
                      {currentLesson.customContent}
                    </CardContent>
                  </Card>
                  <div className="flex justify-center mt-6 sm:mt-8">
                    {!showQuiz ? (
                      <Button 
                        onClick={() => {
                          setShowQuiz(true);
                          toast("بدأ الاختبار - استمع إلى الأسئلة وأجب عليها", {
                            duration: 3000,
                          });
                        }}
                        className="font-[Noto_Kufi_Arabic] w-full sm:w-auto"
                      >
                        ابدأ الاختبار
                      </Button>
                    ) : (
                      <Quiz 
                        questions={currentLesson.quiz}
                        onComplete={handleQuizComplete}
                      />
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-tunisia-blue font-[Noto_Kufi_Arabic]">
                      المعالم المتعلقة بالدرس
                    </h2>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => speak(currentLesson.description)}
                    >
                      <Volume2 className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  {!showQuiz ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {currentLesson.landmarks?.map((landmark) => (
                          <Card key={landmark.id}>
                            <div className="aspect-video relative overflow-hidden">
                              <img 
                                src={landmark.images[0]} 
                                alt={landmark.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <CardHeader className="p-3 sm:p-4">
                              <CardTitle className="font-[Noto_Kufi_Arabic] text-sm sm:text-base">
                                <div className="flex justify-between items-center">
                                  {landmark.name}
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    onClick={() => speak(landmark.name)}
                                  >
                                    <Volume2 className="h-4 sm:h-5 w-4 sm:w-5" />
                                  </Button>
                                </div>
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pb-3 sm:pb-4 px-3 sm:px-4">
                              <p className="text-gray-600 mb-3 sm:mb-4 font-[Noto_Kufi_Arabic] text-xs sm:text-sm">
                                {landmark.shortDescription}
                              </p>
                              <div className="space-x-2 flex justify-between items-center">
                                <Button 
                                  variant="outline" 
                                  className="font-[Noto_Kufi_Arabic] text-xs sm:text-sm py-1 h-auto"
                                  onClick={() => window.location.href = `/landmark/${landmark.id}`}
                                >
                                  عرض التفاصيل
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => speak(landmark.shortDescription)}
                                >
                                  <Volume2 className="h-4 sm:h-5 w-4 sm:w-5" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      <div className="flex justify-center mt-6 sm:mt-8">
                        <Button 
                          onClick={() => {
                            setShowQuiz(true);
                            toast("بدأ الاختبار - استمع إلى الأسئلة وأجب عليها", {
                              duration: 3000,
                            });
                          }}
                          className="font-[Noto_Kufi_Arabic] w-full sm:w-auto"
                        >
                          ابدأ الاختبار
                        </Button>
                      </div>
                    </>
                  ) : (
                    <Quiz 
                      questions={currentLesson.quiz}
                      onComplete={handleQuizComplete}
                    />
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeacherSpace;
