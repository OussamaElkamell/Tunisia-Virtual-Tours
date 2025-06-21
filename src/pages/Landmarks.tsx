
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LandmarkCard } from "@/components/LandmarkCard";
import { landmarks } from "@/data/landmarks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Landmarks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredLandmarks = landmarks.filter((landmark) => {
    const matchesSearch = landmark.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          landmark.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === null || landmark.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const categories = [
    { id: "historical", label: "تاريخي" },
    { id: "cultural", label: "ثقافي" },
    { id: "nature", label: "طبيعي" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section dir="rtl" className="container mx-auto py-6 sm:py-12 px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-tunisia-blue font-[Noto_Kufi_Arabic]">المعالم السياحية في تونس</h1>
          <p className="max-w-3xl mb-6 sm:mb-8 text-gray-700 font-[Noto_Kufi_Arabic] text-sm sm:text-base">
           اكتشف أجمل المواقع الجغرافية والطبيعية في تونس. استمتع بمشاهدة مناظرها الخلابة وتعرف على تنوع تضاريسها.
          </p>
          
          {/* Search and Filter */}
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="ابحث عن معلم..."
                  className="pl-4 pr-10 py-2 text-right font-[Noto_Kufi_Arabic] w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`font-[Noto_Kufi_Arabic] ${selectedCategory === category.id ? "bg-tunisia-blue" : ""}`}
                    onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Landmarks Grid */}
          {filteredLandmarks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {filteredLandmarks.map((landmark) => (
                <LandmarkCard key={landmark.id} landmark={landmark} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12">
              <p className="text-lg sm:text-xl text-gray-600 font-[Noto_Kufi_Arabic]">لا توجد نتائج مطابقة لبحثك</p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Landmarks;
