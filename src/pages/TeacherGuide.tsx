import { useState, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookPage from '@/components/teacher-guide/BookPage';
import { GUIDE_PAGES } from '@/components/teacher-guide/TeacherGuideContent';
import { Link } from 'react-router-dom';

const coverImage = "/uploads/77c96060-16f3-4d48-aadc-856992fd528f.png";

const TeacherGuide = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isBookOpen, setIsBookOpen] = useState(false);

  const isSinglePage = useMemo(
    () => !isBookOpen || (isBookOpen && currentPage === GUIDE_PAGES.length - 1),
    [isBookOpen, currentPage]
  );

  const goToNextPage = useCallback(() => {
    if (!isBookOpen) {
      setIsBookOpen(true);
      return;
    }
    setCurrentPage((prev) => (prev < GUIDE_PAGES.length - 2 ? prev + 2 : prev));
  }, [isBookOpen]);

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => (prev > 0 ? prev - 2 : prev));
  }, []);

  const handleCoverClick = () => {
    setIsBookOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-8 px-4 bg-opacity-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
      <Link
  to={`/teacher-space`}
  className="text-tunisia-blue hover:text-tunisia-red px-4 transition-colors inline-flex items-center gap-2 font-[Noto_Kufi_Arabic] group bg-white/80 backdrop-blur-sm rounded-full py-2 shadow-md hover:shadow-lg"
>
  <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
  <span>العودة إلى فضاء المعلم</span>
</Link>

        <div className="flex items-center justify-between gap-8">
          <Button
            variant="ghost"
            onClick={goToPreviousPage}
            disabled={!isBookOpen || currentPage === 0}
            className=" hover:text-tunisia-red z-10 student-button"
          >
            <ChevronRight className="h-6 w-6 " />
          </Button>

          <div
            className={`flex-1 notebook-paper ${
              isSinglePage ? 'aspect-[2/2.8] max-w-[400px]' : 'aspect-[2/1.4]'
            } mx-auto transform hover:scale-[1.02] transition-all duration-500`}
          >
            <div className="w-full h-full flex">
              {isBookOpen ? (
                <>
                  <div className="w-1/2 h-full border-r border-gray-200">
                    <BookPage pageNumber={currentPage + 1} isLeft coverImage={coverImage} opened={isBookOpen}>
                      {GUIDE_PAGES[currentPage]?.content}
                    </BookPage>
                  </div>
                  <div className="w-1/2 h-full">
                    <BookPage pageNumber={currentPage + 2} isLeft={false} coverImage={coverImage} opened={isBookOpen}>
                      {GUIDE_PAGES[currentPage + 1]?.content}
                    </BookPage>
                  </div>
                </>
              ) : (
                <div 
                  className="w-full h-full flex items-center justify-center cursor-pointer"
                  onClick={handleCoverClick}
                >
                  <img
                    src={coverImage}
                    alt="Book Cover"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          </div>

          <Button
            variant="ghost"
            onClick={goToNextPage}
            disabled={isBookOpen && currentPage >= GUIDE_PAGES.length - 2}
            className=" hover:text-tunisia-red z-10 student-button"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeacherGuide;
