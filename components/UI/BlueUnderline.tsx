"use client";

import { useState, useEffect, useRef } from "react";

interface BlueUnderlineProps {
  children: string;
  className?: string;
}

const BlueUnderline = ({ children, className }: BlueUnderlineProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, [children]);

  return (
    <div className="relative inline-block">
      <span ref={ref} className={`inline-block lg:mb-1 ${className}`}>
        {children}
      </span>
      {width > 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height="3"
          viewBox={`0 0 ${width} 3`}
          fill="none"
        >
          <path
            d={`M1 1.6 C${width * 0.2} 0.8, ${width * 0.8} 0.8, ${
              width - 1
            } 1.6`}
            stroke="#4361EE"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
};

export default BlueUnderline;
