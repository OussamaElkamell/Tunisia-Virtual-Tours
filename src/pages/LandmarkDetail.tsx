
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { landmarks } from "@/data/landmarks";
import { ArrowLeft, Globe, MapPin } from "lucide-react";

const LandmarkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const landmark = landmarks.find((l) => l.id === id);
  
  if (!landmark) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 font-[Noto_Kufi_Arabic]">لم يتم العثور على المعلم</h1>
            <p className="mb-6 font-[Noto_Kufi_Arabic]">عذرًا، لا يمكن العثور على المعلم المطلوب.</p>
            <Button asChild className="bg-tunisia-blue font-[Noto_Kufi_Arabic]">
              <Link to="/landmarks">العودة إلى صفحة المعالم</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main dir="rtl" className="flex-1">
        {/* Hero Image */}
        <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] relative">
          <img 
            src={landmark.images[activeImageIndex]} 
            alt={landmark.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <div className="container mx-auto">
              <span className="inline-flex items-center gap-1 bg-tunisia-red text-white px-2 sm:px-3 py-1 rounded-md mb-2 text-xs sm:text-sm font-[Noto_Kufi_Arabic]">
                {landmark.category === "historical" && "تاريخي"}
                {landmark.category === "cultural" && "ثقافي"}
                {landmark.category === "nature" && "طبيعي"}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[Noto_Kufi_Arabic]">{landmark.name}</h1>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6">
          {/* Breadcrumbs */}
          <div className="flex mb-6 sm:mb-8 text-xs sm:text-sm">
            <Link to="/" className="text-gray-600 hover:text-tunisia-blue font-[Noto_Kufi_Arabic]">الرئيسية</Link>
            <span className="mx-2">/</span>
            <Link to="/landmarks" className="text-gray-600 hover:text-tunisia-blue font-[Noto_Kufi_Arabic]">المعالم</Link>
            <span className="mx-2">/</span>
            <span className="text-tunisia-blue font-[Noto_Kufi_Arabic]">{landmark.name}</span>
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-tunisia-blue font-[Noto_Kufi_Arabic]">نبذة عن المعلم</h2>
              <p className="text-gray-700 mb-6 font-[Noto_Kufi_Arabic] text-sm sm:text-base">
                {landmark.fullDescription}
              </p>
              
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-tunisia-blue font-[Noto_Kufi_Arabic]">حقائق مثيرة للاهتمام</h3>
                <ul className="bg-tunisia-sand/20 p-3 sm:p-4 rounded-lg font-[Noto_Kufi_Arabic] text-sm sm:text-base">
                  {landmark.funFacts.map((fact, index) => (
                    <li key={index} className="mb-2 last:mb-0 flex items-start">
                      <span className="text-tunisia-blue inline-block mr-2">•</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Images Gallery */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-tunisia-blue font-[Noto_Kufi_Arabic]">معرض الصور</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {landmark.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${landmark.name} ${index + 1}`}
                      className={`w-full h-16 sm:h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity ${
                        activeImageIndex === index ? 'ring-2 ring-tunisia-blue' : ''
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden sticky top-4">
                <div className="bg-tunisia-blue text-white p-4">
                  <h3 className="text-lg sm:text-xl font-bold font-[Noto_Kufi_Arabic]">معلومات الزيارة</h3>
                </div>
                
                <div className="p-4">
                  <div className="mb-4 flex items-start">
                    <MapPin className="h-5 w-5 text-tunisia-red mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold font-[Noto_Kufi_Arabic]">الموقع</h4>
                      <p className="text-sm text-gray-600 font-[Noto_Kufi_Arabic]">موقع جغرافي في تونس</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex items-start">
                    <Globe className="h-5 w-5 text-tunisia-red mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold font-[Noto_Kufi_Arabic]">معلومات إضافية</h4>
                      <p className="text-sm text-gray-600 font-[Noto_Kufi_Arabic]">
                        لمزيد من المعلومات حول هذا المعلم والتاريخ المرتبط به، يمكنك زيارة مصادر تعليمية أخرى.
                      </p>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full mt-4 bg-tunisia-red font-[Noto_Kufi_Arabic]">
                    <Link to="/map">عرض على الخريطة</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Back Button */}
          <div className="mt-8 sm:mt-12">
            <Button asChild variant="outline" className="font-[Noto_Kufi_Arabic]">
              <Link to="/landmarks" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                العودة إلى قائمة المعالم
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LandmarkDetail;
