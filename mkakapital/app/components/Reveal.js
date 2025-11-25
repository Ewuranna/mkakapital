"use client";

import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, as: Tag = 'div', className = '' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-500 ease-out will-change-transform opacity-0 translate-y-4 ${
        isVisible ? 'opacity-100 translate-y-0' : ''
      }`}
    >
      {children}
    </Tag>
  );
}


