"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

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
  
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !isLoaded) {
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
    
    return () => {
      // Cleanup
      if (imgRef.current) {
        imgRef.current.onload = null;
        imgRef.current.onerror = null;
      }
    };
  }, [inView, backgroundImage, isLoaded]);

  const style = {
    backgroundImage: `url('${bgImage}')`,
    transition: isLoaded ? 'opacity 0.3s ease-in-out' : undefined,
    opacity: isLoaded ? 1 : 0.9,
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={style}
      id={id}
      {...otherProps}
    >
      {children}
    </Component>
  );
}