
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main dir="rtl" className="flex-1">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-8 text-tunisia-blue font-[Noto_Kufi_Arabic]">رحلة جغرافية</h1>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-tunisia-blue font-[Noto_Kufi_Arabic]">رحلة جغرافية في تونس</h2>
            <p className="text-gray-700 mb-4 font-[Noto_Kufi_Arabic]">
              مرحبًا بكم في رحلتنا الجغرافية عبر تونس، حيث نستكشف التنوع الطبيعي والجغرافي المذهل لهذا البلد الساحر.
            </p>
            <p className="text-gray-700 mb-4 font-[Noto_Kufi_Arabic]">
              سنرحل عبر المناظر الطبيعية المتنوعة، من السواحل الزرقاء إلى الصحراء الشاسعة، ومن الجبال الخضراء إلى السهول الخصبة.
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-tunisia-blue font-[Noto_Kufi_Arabic]">هدفنا الجغرافي</h2>
            <p className="text-gray-700 mb-4 font-[Noto_Kufi_Arabic]">
              نهدف إلى تعميق فهم الطلاب للتنوع الجغرافي التونسي من خلال:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 font-[Noto_Kufi_Arabic]">
              <li>استكشاف التضاريس المختلفة في تونس</li>
              <li>فهم المناخات المتنوعة من السواحل إلى الصحراء</li>
              <li>دراسة التوزيع الجغرافي للموارد الطبيعية</li>
              <li>التعرف على التأثيرات البيئية والمناخية</li>
              <li>فهم العلاقة بين الجغرافيا والثقافة التونسية</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-tunisia-blue font-[Noto_Kufi_Arabic]">للمعلمين والطلاب</h2>
            <p className="text-gray-700 mb-4 font-[Noto_Kufi_Arabic]">
              يمكن للمعلمين استخدام هذا الموقع كأداة تعليمية لتقديم:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 font-[Noto_Kufi_Arabic]">
              <li>دروس جغرافية تفاعلية عن تونس</li>
              <li>خرائط تفصيلية للتضاريس والمناخ</li>
              <li>مواد إضافية لفهم الجغرافيا الطبيعية والبشرية</li>
              <li>رحلات افتراضية للمناطق الجغرافية المختلفة</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-tunisia-blue font-[Noto_Kufi_Arabic]">تواصل معنا</h2>
            <p className="text-gray-700 mb-4 font-[Noto_Kufi_Arabic]">
              إذا كان لديك اقتراحات لتحسين محتوى رحلتنا الجغرافية أو إضافة معلومات جديدة، فلا تتردد في التواصل معنا.
            </p>
            <p className="text-gray-700 font-[Noto_Kufi_Arabic]">
              نحن نعمل باستمرار على توسيع وتعميق معرفتنا الجغرافية عن تونس.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
