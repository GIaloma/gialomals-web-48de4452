
import { useEffect, useState } from 'react';

// Breakpoints aligned with Tailwind's default breakpoints
export const breakpoints = {
  sm: 640,  // Small devices (phones)
  md: 768,  // Medium devices (tablets)
  lg: 1024, // Large devices (desktops)
  xl: 1280, // Extra large devices (large desktops)
  '2xl': 1536, // 2X large devices
};

export type BreakpointKey = keyof typeof breakpoints;

// Hook to determine if viewport is within specified breakpoint or smaller
export function useBreakpoint(breakpoint: BreakpointKey) {
  const [isBelow, setIsBelow] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsBelow(window.innerWidth < breakpoints[breakpoint]);
    };

    // Initial check
    checkViewport();

    // Add event listener
    window.addEventListener('resize', checkViewport);

    // Cleanup
    return () => window.removeEventListener('resize', checkViewport);
  }, [breakpoint]);

  return isBelow;
}

// Hook to get current breakpoint name
export function useCurrentBreakpoint() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointKey>('sm');

  useEffect(() => {
    const determineBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width < breakpoints.sm) {
        setCurrentBreakpoint('sm');
      } else if (width < breakpoints.md) {
        setCurrentBreakpoint('sm');
      } else if (width < breakpoints.lg) {
        setCurrentBreakpoint('md');
      } else if (width < breakpoints.xl) {
        setCurrentBreakpoint('lg');
      } else if (width < breakpoints['2xl']) {
        setCurrentBreakpoint('xl');
      } else {
        setCurrentBreakpoint('2xl');
      }
    };

    // Initial check
    determineBreakpoint();

    // Add event listener
    window.addEventListener('resize', determineBreakpoint);

    // Cleanup
    return () => window.removeEventListener('resize', determineBreakpoint);
  }, []);

  return currentBreakpoint;
}

// Helper to get number of items to show based on breakpoint
export function getItemsPerView(breakpoint: BreakpointKey): number {
  switch (breakpoint) {
    case 'sm': return 1;
    case 'md': return 2;
    case 'lg': return 3;
    case 'xl': return 4;
    case '2xl': return 5;
    default: return 3;
  }
}

// Hook to detect if device is likely mobile (touch-based)
export function useIsMobileDevice() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Check for touch support and viewport width
      const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileWidth = window.innerWidth < breakpoints.md;
      setIsMobile(hasTouchSupport && isMobileWidth);
    };

    // Initial check
    checkMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// Helper to calculate card width based on container width and items per view
export function calculateCardWidth(containerWidth: number, itemsPerView: number, gapSize: number = 24): number {
  // Calculate total gap space between cards
  const totalGapSpace = gapSize * (itemsPerView - 1);
  
  // Available width for cards = container width - total gap space
  const availableWidth = containerWidth - totalGapSpace;
  
  // Width per card
  return Math.floor(availableWidth / itemsPerView);
}

// Helper to ensure cards are centered when scrolling
export function scrollToCenter(scrollRef: React.RefObject<HTMLElement>, index: number, itemWidth: number, gapSize: number = 24) {
  if (!scrollRef.current) return;
  
  const scrollPosition = index * (itemWidth + gapSize);
  scrollRef.current.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
}
