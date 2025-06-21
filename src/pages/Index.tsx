import React, { useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LandmarkCard } from "@/components/LandmarkCard";
import { Button } from "@/components/ui/button";
import { landmarks } from "@/data/landmarks";
import { Link } from "react-router-dom";
import { Globe, Map, Image, Book } from "lucide-react";
import { Volume2, VolumeX } from 'lucide-react';
const Index = () => {
  const featuredLandmarks = landmarks.slice(0, 3);
  const iframeRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    if (!iframeRef.current) return;
    const action = isMuted ? 'unMute' : 'mute';
    iframeRef.current.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: action,
      args: []
    }), '*');
    setIsMuted(!isMuted);
  };
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section dir="rtl" className="relative h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
          <iframe ref={iframeRef} src="https://www.youtube.com/embed/JoOpZRlXJvc?autoplay=1&mute=1&loop=1&playlist=JoOpZRlXJvc&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="اكتشف مجالك الجغرافي" loading="lazy" className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
          border: 'none'
        }} />
        </div>


        <button onClick={toggleMute} className="absolute top-4 left-4 z-20 bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 m-2 sm:m-4 hover:bg-white/50 transition-all">
          {isMuted ? <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
        </button>

        <div className="absolute inset-0 bg-gradient-to-r from-tunisia-red via-tunisia-blue to-tunisia-white opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20" style={{
        backgroundSize: '30px 30px'
      }}></div>

        <div className="container mx-auto h-full flex items-center relative z-10 px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 font-[Noto_Kufi_Arabic] animate-fade-in">
              <span className="bg-clip-text bg-gradient-to-r from-tunisia-red via-tunisia-blue to-tunisia-white text-shadow-lg text-slate-50">
                <span className="text-tunisia-blue text-slate-50">اكتشف</span> مجالك
                <span className="text-tunisia-red"> الجغرافي</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-8 font-[Noto_Kufi_Arabic] text-white/90 leading-relaxed animate-fade-in-delay">
              رحلة افتراضية تعليمية لاستكشاف أجمل المعالم الجغرافية في تونس
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-delay-2">
              <Button asChild size="lg" className="bg-tunisia-red hover:bg-red-700 font-[Noto_Kufi_Arabic] text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-6 relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group w-full sm:w-auto">
                <Link to="/map" className="flex items-center justify-center gap-2">
                  استكشف الخريطة
                  <Map className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 font-[Noto_Kufi_Arabic] text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-6 border-2 relative overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <Link to="/landmarks" className="flex items-center justify-center gap-2">
                  جميع المعالم
                  <Globe className="w-5 h-5 animate-pulse" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section dir="rtl" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto relative z-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16 text-tunisia-blue font-[Noto_Kufi_Arabic] relative">
            <span className="relative">
              تعلم واستكشف تونس بطريقة تفاعلية
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-tunisia-red"></div>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[{
            icon: Map,
            title: "خريطة تفاعلية",
            desc: "استكشف مواقع المعالم المختلفة على خريطة تونس التفاعلية"
          }, {
            icon: Image,
            title: "صور عالية الجودة",
            desc: "شاهد صوراً خلابة لأشهر المعالم السياحية في تونس"
          }, {
            icon: Book,
            title: "معلومات تعليمية",
            desc: "تعرف على تاريخ وثقافة المواقع المختلفة بشكل تفاعلي"
          }, {
            icon: Globe,
            title: "اللغة العربية",
            desc: "محتوى كامل باللغة العربية لتسهيل التعلم للطلاب"
          }].map((feature, index) => <div key={index} className="group bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-tunisia-blue/10 w-16 sm:w-20 h-16 sm:h-20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-tunisia-blue/20 transition-colors">
                    <feature.icon className="h-8 sm:h-10 w-8 sm:w-10 text-tunisia-blue group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-[Noto_Kufi_Arabic] text-tunisia-blue group-hover:text-tunisia-red transition-colors text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-[Noto_Kufi_Arabic] leading-relaxed text-sm sm:text-base text-center">
                    {feature.desc}
                  </p>
                </div>)}
          </div>
        </div>
      </section>
      
      <section dir="rtl" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tunisia-blue font-[Noto_Kufi_Arabic] mb-4 sm:mb-0">معالم مميزة</h2>
            <Button asChild variant="outline" className="font-[Noto_Kufi_Arabic] group">
              <Link to="/landmarks" className="flex items-center gap-2">
                عرض الكل
                <Globe className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredLandmarks.map(landmark => <LandmarkCard key={landmark.id} landmark={landmark} />)}
          </div>
        </div>
      </section>
      
      <section dir="rtl" className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-tunisia-blue via-blue-600 to-tunisia-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white font-[Noto_Kufi_Arabic]">ابدأ رحلتك الافتراضية الآن</h2>
          <p className="max-w-2xl mx-auto mb-6 sm:mb-10 text-lg sm:text-xl text-white/90 font-[Noto_Kufi_Arabic] leading-relaxed">
            استكشف جمال تونس وتاريخها الغني من خلال هذه الرحلة التعليمية الافتراضية. مثالية للطلاب والمعلمين.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-tunisia-blue font-[Noto_Kufi_Arabic] text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              <Link to="/map" className="flex items-center justify-center gap-3">
                استكشف الخريطة التفاعلية
                <Map className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-[Noto_Kufi_Arabic] text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              <Link to="/teacher-guide" className="flex items-center justify-center gap-3">
                دليل المعلم
                <Book className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;