
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Volume2, BookOpen, GraduationCap } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  questions: Question[];
  onComplete: (passed: boolean) => void;
}

export const Quiz = ({ questions, onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-TN'; // Set language to Tunisian Arabic
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleAnswer = (selectedOption: number) => {
    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      toast("إجابة صحيحة!", {
        duration: 2000,
      });
    } else {
      toast("إجابة خاطئة", {
        duration: 2000,
      });
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      // Read next question after a short delay
      setTimeout(() => {
        speak(questions[currentQuestion + 1].question);
      }, 1000);
    } else {
      const finalScore = isCorrect ? score + 1 : score;
      const passed = (finalScore / questions.length) >= 0.7; // 70% passing threshold
      setShowResults(true);
      onComplete(passed);
      speak(passed ? "أحسنت! لقد نجحت في الاختبار" : "حاول مرة أخرى");
    }
  };

  // Automatically read the first question when starting
  useState(() => {
    if (questions.length > 0) {
      speak(questions[0].question);
    }
  });

  if (showResults) {
    const passed = (score / questions.length) >= 0.7;
    return (
      <Card className="p-6 text-center bg-white/95 backdrop-blur-sm border-2 border-tunisia-blue/20 shadow-lg">
        <div className="flex justify-center mb-4">
          <GraduationCap className={`h-12 w-12 ${passed ? 'text-student-green animate-bounce' : 'text-tunisia-red'}`} />
        </div>
        <h3 className="text-2xl font-bold mb-4 font-[Noto_Kufi_Arabic] student-header">نتيجة الاختبار</h3>
        <p className="text-xl mb-4 font-[Noto_Kufi_Arabic]">
          {score} / {questions.length} إجابات صحيحة
        </p>
        <p className={`text-lg font-[Noto_Kufi_Arabic] ${passed ? 'text-student-green' : 'text-tunisia-red'}`}>
          {passed ? "مبروك! يمكنك الانتقال إلى الدرس التالي" : "حاول مرة أخرى للانتقال إلى الدرس التالي"}
        </p>
        <Button 
          onClick={() => speak(passed ? "مبروك! يمكنك الانتقال إلى الدرس التالي" : "حاول مرة أخرى للانتقال إلى الدرس التالي")}
          className="mt-4"
          variant="ghost"
          size="icon"
        >
          <Volume2 className="h-5 w-5" />
        </Button>
      </Card>
    );
  }

  return (
    <Card className="notebook-paper overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h3 className="text-xl font-bold font-[Noto_Kufi_Arabic] flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-tunisia-blue" />
            <span>السؤال {currentQuestion + 1} من {questions.length}</span>
          </h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => speak(questions[currentQuestion].question)}
            className="hover:bg-tunisia-blue/10"
          >
            <Volume2 className="h-5 w-5" />
          </Button>
        </div>
        
        <p className="text-lg mb-6 font-[Noto_Kufi_Arabic] leading-relaxed">{questions[currentQuestion].question}</p>
        
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full text-right font-[Noto_Kufi_Arabic] bg-white/80 hover:bg-tunisia-blue/10 border-2 text-black border-tunisia-blue/20 hover:border-tunisia-blue transition-all duration-300 rounded-lg py-4 student-button"
              onClick={() => handleAnswer(index)}
            >
              {option}
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  speak(option);
                }}
              >
                <Volume2 className="h-4 w-4" />
              </Button>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};
