
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Navigation2, Compass, Flag } from "lucide-react";

export function JourneyDialog({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const journeyOptions = [
    {
      title: "رحلة جغرافية",
      description: "اكتشف التضاريس والمناظر الطبيعية في تونس",
      icon: <Navigation2 className="w-12 h-12 mb-4 text-tunisia-blue transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      action: () => navigate("/map"),
      gradient: "from-sky-400 to-blue-600"
    },
    {
      title: "المسار التعليمي",
      description: "تعلم عن جغرافيا تونس مع دروس تفاعلية",
      icon: <Compass className="w-12 h-12 mb-4 text-tunisia-blue transition-all duration-300 group-hover:scale-110 group-hover:rotate-45" />,
      action: () => navigate("/teacher-space"),
      gradient: "from-violet-400 to-indigo-600"
    },
    {
      title: "استكشاف حر",
      description: "تصفح المعالم الطبيعية بحرية",
      icon: <Flag className="w-12 h-12 mb-4 text-tunisia-blue transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12" />,
      action: () => navigate("/landmarks"),
      gradient: "from-emerald-400 to-cyan-600"
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] animate-fade-in">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center mb-8 font-[Noto_Kufi_Arabic] bg-clip-text text-transparent bg-gradient-to-r from-tunisia-blue to-tunisia-red">
            اختر طريقة الاستكشاف
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {journeyOptions.map((option, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-tunisia-blue"
              onClick={option.action}
              style={{
                background: `radial-gradient(circle at 100% 100%, transparent 0%, rgba(255,255,255,0.1) 100%)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center">
                {option.icon}
                <h3 className="text-xl font-bold mb-3 font-[Noto_Kufi_Arabic] group-hover:text-tunisia-blue transition-colors">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 font-[Noto_Kufi_Arabic] group-hover:text-gray-800 transition-colors">
                  {option.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
