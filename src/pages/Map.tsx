
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InteractiveMap } from "@/components/InteractiveMap";

const Map = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section dir="rtl" className="container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-6 text-tunisia-blue font-[Noto_Kufi_Arabic]">الخريطة التفاعلية</h1>
          <p className="max-w-3xl mb-8 text-gray-700 font-[Noto_Kufi_Arabic]">
            استكشف أشهر المعالم التونسية على هذه الخريطة التفاعلية. انقر على أي معلم للحصول على مزيد من المعلومات وبدء رحلتك الافتراضية.
          </p>
          
          <div className="border-4 border-tunisia-blue rounded-lg shadow-xl overflow-hidden mt-8">
            <InteractiveMap />
          </div>
          
          <div className="mt-8 bg-tunisia-sand/20 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-tunisia-blue font-[Noto_Kufi_Arabic]">كيفية استخدام الخريطة</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 font-[Noto_Kufi_Arabic]">
              <li>انقر على أي علامة على الخريطة لزيارة صفحة المعلم</li>
              <li>حرك مؤشر الماوس فوق العلامة لمشاهدة وصف موجز</li>
              <li>استخدم التكبير والتصغير للتنقل في أنحاء خريطة تونس</li>
              <li>يمكنك أيضًا زيارة صفحة المعالم لعرض قائمة بجميع المواقع المتاحة</li>
            </ul>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Map;
