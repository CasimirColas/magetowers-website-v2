import { useEffect, useRef } from "react";

export default function useIntersectionObserver(
  targets: string[],
  threshold: number,
  callback: (section: string) => void
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    // Function to handle intersection changes
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Assuming the id of the section is the same as the section name
          const sectionName = entry.target.id;
          callback(sectionName);
        }
      });
    };

    // Create the observer
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: threshold, // Adjust this value to control when the callback is triggered
    });

    // Observe each section
    targets.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    // Store the observer in the ref
    observerRef.current = observer;

    // Cleanup function
    return () => {
      if (observerRef.current) {
        targets.forEach((section) => {
          const sectionElement = document.getElementById(section);
          if (sectionElement && observerRef.current) {
            observerRef.current.unobserve(sectionElement);
          }
        });
        observerRef.current.disconnect();
      }
    };
  }, []);
}
