
import { useParams, Link, useNavigate } from "react-router-dom";
import { TEACHER_LESSONS } from "@/components/teacher/teacherLessons";
import { Card } from "@/components/ui/card";
import { Quiz as QuizComponent } from "@/components/Quiz";
import { toast } from "sonner";
import { ChevronLeft, BookOpen } from "lucide-react";

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = TEACHER_LESSONS.find(l => l.id === id);

  const handleQuizComplete = (passed: boolean) => {
    if (passed) {
      toast("أحسنت! تم اجتياز الاختبار بنجاح", {
        duration: 3000,
      });
      
      // Find the next lesson
      const currentLessonIndex = TEACHER_LESSONS.findIndex(l => l.id === id);
      const nextLesson = TEACHER_LESSONS[currentLessonIndex + 1];
      
      if (nextLesson) {
        toast("جاري الانتقال إلى الدرس التالي...", {
          duration: 2000,
        });
        setTimeout(() => {
          navigate(`/lesson/${nextLesson.id}`);
        }, 2000);
      } else {
        toast("أحسنت! لقد أكملت جميع الدروس", {
          duration: 3000,
        });
        setTimeout(() => {
          navigate('/teacher-space');
        }, 2000);
      }
    } else {
      toast("حاول مرة أخرى", {
        duration: 3000,
      });
    }
  };

  if (!lesson) {
    return (
      <div className="container mx-auto py-12">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4 font-[Noto_Kufi_Arabic]">لم يتم العثور على الدرس</h2>
          <Link to="/teacher-space" className="text-tunisia-blue underline font-[Noto_Kufi_Arabic] hover:text-tunisia-red transition-colors">
            العودة إلى الدروس
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] bg-[url('/pattern.svg')] bg-opacity-50" dir="rtl">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link 
              to={`/lesson/${id}`} 
              className="text-tunisia-blue hover:text-tunisia-red transition-colors flex items-center gap-2 font-[Noto_Kufi_Arabic] group bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md hover:shadow-lg"
            >
              <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
              <span>العودة إلى الدرس</span>
            </Link>
          </div>
          <Card className="notebook-paper overflow-hidden border-2 border-tunisia-blue/20 shadow-xl">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-8 w-8 text-tunisia-blue animate-bounce" />
                <h1 className="text-2xl font-bold text-tunisia-blue font-[Noto_Kufi_Arabic] student-header">
                  اختبار: {lesson.title}
                </h1>
              </div>
              <QuizComponent 
                questions={lesson.quiz}
                onComplete={handleQuizComplete}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
