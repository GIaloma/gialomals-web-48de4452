
import { useState, useRef, useEffect, RefObject } from 'react';
import { useCurrentBreakpoint, getItemsPerView } from '@/lib/responsive';

interface UseResponsiveCarouselProps {
  items: any[];
  autoScrollEnabled?: boolean;
  autoScrollInterval?: number;
  autoScrollSpeed?: number;
  pauseOnHover?: boolean;
  infiniteScroll?: boolean;
}

interface UseResponsiveCarouselReturn {
  scrollRef: RefObject<HTMLDivElement>;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  handleScrollLeft: () => void;
  handleScrollRight: () => void;
  isAutoScrolling: boolean;
  setIsAutoScrolling: (value: boolean) => void;
  itemsPerView: number;
  totalPages: number;
  goToPage: (pageIndex: number) => void;
}

export function useResponsiveCarousel({
  items,
  autoScrollEnabled = true,
  autoScrollInterval = 50,
  autoScrollSpeed = 1.15,
  pauseOnHover = true,
  infiniteScroll = true
}: UseResponsiveCarouselProps): UseResponsiveCarouselReturn {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(autoScrollEnabled);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Get current breakpoint for responsive behavior
  const currentBreakpoint = useCurrentBreakpoint();
  const itemsPerView = getItemsPerView(currentBreakpoint);
  
  // Calculate total pages based on items and items per view
  const totalPages = Math.ceil(items.length / itemsPerView);
  
  // Auto-scrolling function
  const startAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    
    if (!autoScrollEnabled) return;
    
    scrollIntervalRef.current = setInterval(() => {
      if (scrollRef.current && isAutoScrolling) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        
        if (scrollLeft >= maxScroll) {
          // Reset to beginning when reaching the end
          if (infiniteScroll) {
            scrollRef.current.scrollLeft = 0;
            setActiveIndex(0);
          } else {
            setIsAutoScrolling(false);
          }
        } else {
          // Increment scroll position
          scrollRef.current.scrollLeft += autoScrollSpeed;
          
          // Update active index based on scroll position
          if (scrollRef.current.scrollWidth > 0) {
            const cardWidth = scrollRef.current.scrollWidth / items.length;
            const newIndex = Math.min(
              items.length - 1,
              Math.floor((scrollLeft + cardWidth / 2) / cardWidth)
            );
            
            if (newIndex !== activeIndex) {
              setActiveIndex(newIndex);
            }
          }
        }
      }
    }, autoScrollInterval);
  };
  
  // Start/stop auto-scrolling on mount/unmount and when autoScrolling state changes
  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll();
    } else if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling, items.length]);
  
  // Update active index when items or breakpoint changes
  useEffect(() => {
    // Reset to first item if active index is out of bounds
    if (activeIndex >= items.length) {
      setActiveIndex(0);
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = 0;
      }
    }
  }, [items.length, currentBreakpoint, activeIndex]);
  
  // Handle navigation
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      // Pause auto-scrolling during manual navigation
      setIsAutoScrolling(false);
      
      // Calculate card width based on container
      const containerWidth = scrollRef.current.clientWidth;
      const cardWidth = containerWidth / itemsPerView;
      
      // Calculate new index
      const newIndex = Math.max(0, activeIndex - 1);
      setActiveIndex(newIndex);
      
      // Scroll to new position
      const scrollPosition = newIndex * cardWidth;
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      // Resume auto-scrolling after delay if enabled
      if (autoScrollEnabled) {
        setTimeout(() => setIsAutoScrolling(true), 2000);
      }
    }
  };
  
  const handleScrollRight = () => {
    if (scrollRef.current) {
      // Pause auto-scrolling during manual navigation
      setIsAutoScrolling(false);
      
      // Calculate card width based on container
      const containerWidth = scrollRef.current.clientWidth;
      const cardWidth = containerWidth / itemsPerView;
      
      // Calculate new index
      const newIndex = Math.min(items.length - 1, activeIndex + 1);
      setActiveIndex(newIndex);
      
      // Scroll to new position
      const scrollPosition = newIndex * cardWidth;
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      // Resume auto-scrolling after delay if enabled
      if (autoScrollEnabled) {
        setTimeout(() => setIsAutoScrolling(true), 2000);
      }
    }
  };
  
  // Go to specific page (for pagination)
  const goToPage = (pageIndex: number) => {
    if (scrollRef.current && pageIndex >= 0 && pageIndex < totalPages) {
      // Pause auto-scrolling during manual navigation
      setIsAutoScrolling(false);
      
      // Calculate the starting item index for this page
      const itemIndex = pageIndex * itemsPerView;
      
      // Update active index
      setActiveIndex(Math.min(itemIndex, items.length - 1));
      
      // Calculate card width based on container
      const containerWidth = scrollRef.current.clientWidth;
      const cardWidth = containerWidth / itemsPerView;
      
      // Scroll to new position
      const scrollPosition = itemIndex * cardWidth;
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      // Resume auto-scrolling after delay if enabled
      if (autoScrollEnabled) {
        setTimeout(() => setIsAutoScrolling(true), 2000);
      }
    }
  };
  
  return {
    scrollRef,
    activeIndex,
    setActiveIndex,
    handleScrollLeft,
    handleScrollRight,
    isAutoScrolling,
    setIsAutoScrolling,
    itemsPerView,
    totalPages,
    goToPage
  };
}
