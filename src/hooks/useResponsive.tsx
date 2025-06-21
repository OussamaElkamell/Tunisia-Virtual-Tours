
import { useEffect, useState } from 'react';
import { useIsMobile } from './use-mobile';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useBreakpoint(breakpoint: Breakpoint): boolean {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState<boolean | null>(null);
  
  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      setIsAboveBreakpoint(width >= breakpoints[breakpoint]);
    };
    
    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    
    return () => {
      window.removeEventListener('resize', checkBreakpoint);
    };
  }, [breakpoint]);
  
  return !!isAboveBreakpoint;
}

export function useResponsive() {
  const isMobile = useIsMobile();
  const isSmall = useBreakpoint('sm');
  const isMedium = useBreakpoint('md');
  const isLarge = useBreakpoint('lg');
  const isXL = useBreakpoint('xl');
  const is2XL = useBreakpoint('2xl');
  
  return {
    isMobile,
    isSmall,
    isMedium,
    isLarge,
    isXL,
    is2XL,
    // Helper functions
    isBelow: {
      sm: !isSmall,
      md: !isMedium,
      lg: !isLarge,
      xl: !isXL,
      '2xl': !is2XL,
    },
    isAbove: {
      xs: true,
      sm: isSmall,
      md: isMedium,
      lg: isLarge,
      xl: isXL,
      '2xl': is2XL,
    },
    // Current breakpoint
    current: is2XL ? '2xl' : isXL ? 'xl' : isLarge ? 'lg' : isMedium ? 'md' : isSmall ? 'sm' : 'xs' as Breakpoint,
  };
}
