import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Custom hook to track when a section becomes visible in the viewport
 * and send an analytics event
 * 
 * @param sectionName The name of the section to track
 * @param threshold The visibility threshold (0-1) required to consider the section viewed
 * @returns Ref to attach to the section element
 */
export function useSectionAnalytics<T extends HTMLElement>(
  sectionName: string,
  threshold = 0.5
) {
  const sectionRef = useRef<T>(null);
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    if (!window.IntersectionObserver || hasTracked) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTracked) {
          // Track the section view
          trackEvent('section_view', { section: sectionName });
          setHasTracked(true);
          // Once tracked, disconnect the observer
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [sectionName, threshold, hasTracked]);

  return sectionRef;
} 