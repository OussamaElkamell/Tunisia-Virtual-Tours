import { type ReactNode, memo } from 'react';

interface BookPageProps {
  children: ReactNode;
  pageNumber: number;
  isLeft: boolean;
  coverImage: string;
  opened: boolean; // Passed from parent
}

const BookPage = memo(({ children, pageNumber, isLeft, coverImage, opened }: BookPageProps) => {
  return (
    <div
      className={`
        w-full h-full relative overflow-hidden
        transform-gpu transition-transform duration-1000 ease-in-out
        ${isLeft ? 'origin-right' : 'origin-left'}
      `}
      style={{
        perspective: '2000px',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {/* Cover */}
      <div
        className={`
          absolute inset-0 bg-cover bg-center rounded-xl
          ${opened ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          transition-opacity duration-700
        `}
        style={{
          backgroundImage: `url(${coverImage})`,
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Book content */}
      <div
        className={`
          absolute inset-0 bg-[#FFF8F7] p-4
          ${opened ? 'rotate-y-0 rotate-x-0' : (isLeft ? 'rotate-y-90 rotate-x-10' : 'rotate-y--90 rotate-x-10')}
          transition-transform duration-1000 ease-in-out
        `}
        style={{
          transformOrigin: isLeft ? 'right center' : 'left center',
          backfaceVisibility: 'hidden',
          boxShadow: opened
            ? 'none'
            : isLeft
              ? '-10px 0 20px rgba(0,0,0,0.15)'
              : '10px 0 20px rgba(0,0,0,0.15)',
          willChange: 'transform',
        }}
      >
        <div className="h-full relative overflow-y-auto">
          <div className="text-xs sm:text-sm md:text-base">
            {children}
          </div>
          <div
            className={`absolute bottom-2 sm:bottom-4 ${
              isLeft ? 'left-4' : 'right-4'
            } text-tunisia-blue/60 text-xs sm:text-sm`}
          >
            {pageNumber}
          </div>
        </div>
      </div>
    </div>
  );
});

BookPage.displayName = 'BookPage';
export default BookPage;
