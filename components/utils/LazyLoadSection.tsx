import { useEffect, useRef, useState } from "react";

interface LazyLoadSectionProps {
  children: React.ReactNode;
  rootMargin?: string;
}

export default function LazyLoadSection({
  children,
  rootMargin = "0px",
}: LazyLoadSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isVisible]);

  return <div ref={ref}>{isVisible ? children : null}</div>;
}
