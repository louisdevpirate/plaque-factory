"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyBackgroundSectionProps {
  backgroundImage: string;
  className?: string;
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: string;
  as?: React.ElementType;
  id?: string;
  [key: string]: any; // Allow additional props
}

export default function LazyBackgroundSection({
  backgroundImage,
  className = "",
  children,
  threshold = 0.1,
  rootMargin = "50px",
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23f3f4f6'/%3E%3C/svg%3E",
  as: Component = "section",
  id,
  ...otherProps
}: LazyBackgroundSectionProps) {
  const [bgImage, setBgImage] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          // Preload the image
          const img = new Image();
          img.src = backgroundImage;
          imgRef.current = img;
          
          img.onload = () => {
            setBgImage(backgroundImage);
            setIsLoaded(true);
          };
          
          img.onerror = () => {
            console.error(`Failed to load background image: ${backgroundImage}`);
          };
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      // Cleanup
      if (imgRef.current) {
        imgRef.current.onload = null;
        imgRef.current.onerror = null;
      }
    };
  }, [backgroundImage, isLoaded, threshold, rootMargin]);

  const style = {
    backgroundImage: `url('${bgImage}')`,
    transition: isLoaded ? 'opacity 0.3s ease-in-out' : undefined,
    opacity: isLoaded ? 1 : 0.9,
  };

  // Cast Component to any to avoid TypeScript children type checking issues
  const DynamicComponent = Component as any;

  return (
    <DynamicComponent
      ref={sectionRef}
      className={className}
      style={style}
      id={id}
      {...otherProps}
    >
      {children}
    </DynamicComponent>
  );
}