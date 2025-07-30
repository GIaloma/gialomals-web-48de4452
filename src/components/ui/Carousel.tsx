
import React, { ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useResponsiveCarousel } from '@/hooks/useResponsiveCarousel';

interface CarouselProps {
  items: any[];
  renderItem: (item: any, index: number) => ReactNode;
  className?: string;
  itemClassName?: string;
  autoScroll?: boolean;
  showArrows?: boolean;
  showPagination?: boolean;
  infiniteScroll?: boolean;
  cardMinWidth?: number | string;
  cardHeight?: number | string;
}

export function Carousel({
  items,
  renderItem,
  className = '',
  itemClassName = '',
  autoScroll = true,
  showArrows = true,
  showPagination = false,
  infiniteScroll = true,
  cardMinWidth = '330px',
  cardHeight = 'auto'
}: CarouselProps) {
  const {
    scrollRef,
    activeIndex,
    handleScrollLeft,
    handleScrollRight,
    isAutoScrolling,
    setIsAutoScrolling,
    totalPages,
    goToPage
  } = useResponsiveCarousel({
    items,
    autoScrollEnabled: autoScroll,
    infiniteScroll
  });

  return (
    <div className={`relative ${className}`}>
      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button 
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 focus:outline-none -ml-4"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 focus:outline-none -mr-4"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
      
      {/* Carousel Content */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar px-4"
        style={{ scrollBehavior: 'smooth' }}
        onMouseEnter={() => setIsAutoScrolling(false)}
        onMouseLeave={() => setIsAutoScrolling(true)}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`flex-shrink-0 ${itemClassName}`}
            style={{ 
              minWidth: cardMinWidth,
              height: cardHeight,
              scrollSnapAlign: 'center' // For better mobile scrolling
            }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      
      {/* Pagination Indicators */}
      {showPagination && totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                Math.floor(activeIndex / (items.length / totalPages)) === index 
                  ? 'bg-gialoma-gold scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* CSS for hiding scrollbar */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* Internet Explorer and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
        
        /* Add CSS for better touch scrolling on mobile */
        @media (max-width: 768px) {
          .hide-scrollbar {
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  );
}
