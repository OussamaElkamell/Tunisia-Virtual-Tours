
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { JourneyDialog } from "./JourneyDialog";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header dir="rtl" className="bg-tunisia-blue text-white py-4 px-6 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105 z-20">
          <Globe className="h-6 w-6 animate-pulse" />
          <span className="font-bold text-2xl font-[Noto_Kufi_Arabic]">رحلة بدون حقيبة</span>
        </Link>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="z-20 p-2 hover:bg-tunisia-blue/80 rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        )}
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-6">
            <ul className="flex space-x-6 rtl:space-x-reverse items-center">
              <li>
                <Link to="/" className="hover:text-tunisia-sand transition-colors duration-200 font-[Noto_Kufi_Arabic]">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/map" className="hover:text-tunisia-sand transition-colors duration-200 font-[Noto_Kufi_Arabic]">
                  الخريطة
                </Link>
              </li>
              <li>
                <Link to="/landmarks" className="hover:text-tunisia-sand transition-colors duration-200 font-[Noto_Kufi_Arabic]">
                  المعالم
                </Link>
              </li>
              <li>
                <Link to="/teacher-space" className="hover:text-tunisia-sand transition-colors duration-200 font-[Noto_Kufi_Arabic]">
                  فضاء المعلم
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-tunisia-sand transition-colors duration-200 font-[Noto_Kufi_Arabic]">
                  عن الموقع
                </Link>
              </li>
              <li>
                <JourneyDialog>
                  <Button className="relative overflow-hidden bg-tunisia-red hover:bg-red-700 text-white font-[Noto_Kufi_Arabic] transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                    <span className="relative z-10">ابدأ الرحلة</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-tunisia-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </JourneyDialog>
              </li>
            </ul>
          </nav>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <div
            className={`fixed inset-0 bg-tunisia-blue transition-transform duration-300 transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } z-10`}
          >
            <nav className="h-full pt-20 px-6">
              <ul className="space-y-6 text-center">
                <li>
                  <Link 
                    to="/" 
                    className="text-lg hover:text-tunisia-sand transition-colors duration-200 font-[Noto_Kufi_Arabic]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/map" 
                    className="text-lg hover:text-tunisia-sand transition-colors duration-200 font-[Noto_Kufi_Arabic]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    الخريطة
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/landmarks" 
                    className="text-lg hover:text-tunisia-sand transition-colors duration-200 font-[Noto_Kufi_Arabic]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    المعالم
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/teacher-space" 
                    className="text-lg hover:text-tunisia-sand transition-colors duration-200 font-[Noto_Kufi_Arabic]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    فضاء المعلم
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-lg hover:text-tunisia-sand transition-colors duration-200 font-[Noto_Kufi_Arabic]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    عن الموقع
                  </Link>
                </li>
                <li>
                  <JourneyDialog>
                    <Button 
                      className="w-full bg-tunisia-red hover:bg-red-700 text-white font-[Noto_Kufi_Arabic] transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative z-10">ابدأ الرحلة</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-tunisia-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </JourneyDialog>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
