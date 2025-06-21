
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer dir="rtl" className="bg-tunisia-blue text-white py-8 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <h3 className="font-bold text-xl font-[Noto_Kufi_Arabic]">رحلة جغرافية في تونس</h3>
            </Link>
            <p className="mt-4 text-sm font-[Noto_Kufi_Arabic]">
              اكتشف التنوع الجغرافي لتونس من خلال رحلة افتراضية تعليمية. موقع مخصص للطلاب لاستكشاف التضاريس والمناخات والموارد الطبيعية في تونس.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 font-[Noto_Kufi_Arabic]">روابط جغرافية</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-tunisia-sand transition-colors text-sm font-[Noto_Kufi_Arabic]">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/map" className="hover:text-tunisia-sand transition-colors text-sm font-[Noto_Kufi_Arabic]">
                  خريطة تونس
                </Link>
              </li>
              <li>
                <Link to="/landmarks" className="hover:text-tunisia-sand transition-colors text-sm font-[Noto_Kufi_Arabic]">
                  المناطق الجغرافية
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-tunisia-sand transition-colors text-sm font-[Noto_Kufi_Arabic]">
                  رحلة جغرافية
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 font-[Noto_Kufi_Arabic]">للطلاب والمعلمين</h3>
            <p className="text-sm mb-4 font-[Noto_Kufi_Arabic]">
              هذا الموقع مصمم خصيصًا للأغراض التعليمية، لمساعدة الطلاب على فهم التنوع الجغرافي التونسي بطريقة تفاعلية وممتعة.
            </p>
            <a href="#" className="bg-tunisia-red hover:bg-red-700 text-white py-2 px-4 rounded inline-block mt-2 text-sm font-[Noto_Kufi_Arabic]">
              موارد جغرافية
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm">
          <p className="font-[Noto_Kufi_Arabic]">© {new Date().getFullYear()} رحلة جغرافية في تونس. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
