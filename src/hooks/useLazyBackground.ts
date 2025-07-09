"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function useLazyBackground(
  backgroundImage: string,
  options: {
    threshold?: number;
    rootMargin?: string;
    placeholder?: string;
  } = {}
) {
  const {
    threshold = 0.1,
    rootMargin = "50px",
    placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23f3f4f6'/%3E%3C/svg%3E",
  } = options;

  const [bgImage, setBgImage] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !isLoaded) {
      const img = new Image();
      img.src = backgroundImage;
      
      img.onload = () => {
        setBgImage(backgroundImage);
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        console.error(`Failed to load background image: ${backgroundImage}`);
      };
    }
  }, [inView, backgroundImage, isLoaded]);

  return {
    ref,
    style: {
      backgroundImage: `url('${bgImage}')`,
      transition: isLoaded ? 'opacity 0.3s ease-in-out' : undefined,
      opacity: isLoaded ? 1 : 0.9,
    },
  };
}