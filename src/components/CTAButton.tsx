"use client";

import { ArrowRightIcon } from "./Icons";
import { useState } from "react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "blog" | "command";
  size?: "sm" | "md" | "lg";
  className?: string;
  title?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  external?: boolean;
  optimizedText?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  title,
  onClick,
  external = false,
  optimizedText = true,
}: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "font-normal rounded-lg shadow-lg transition duration-300 inline-flex items-center";
  
  const variantClasses = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black border border-2 border-black gap-2",
    secondary: "bg-white border border-2 border-black text-black hover:bg-gray-100 hover:text-black gap-2",
    blog: "bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black border border-2 border-black gap-2",
    command: "bg-green-600 text-white hover:bg-green-700 hover:text-white border border-2 border-green-700 gap-2",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const arrowClasses = {
    primary: "cta-arrow",
    secondary: "cta-arrow",
    blog: "cta-arrow",
    command: "cta-arrow",
  };

  // Générer des titres optimisés selon le contexte
  const getOptimizedTitle = () => {
    if (title) return title;
    
    const optimizedTitles: { [key: string]: string } = {
      primary: "Commander ma plaque personnalisée dès 15€",
      secondary: "Découvrir nos plaques d'immatriculation",
      blog: "Créer ma plaque personnalisée maintenant",
      command: "Commander ma plaque immatriculation personnalisée"
    };
    
    return optimizedTitles[variant] || "En savoir plus";
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
  };

  const linkProps = external
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { href };

  return (
    <a
      {...linkProps}
      className={combinedClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={optimizedText ? getOptimizedTitle() : title}
      onClick={handleClick}
    >
      {children}{" "}
      <ArrowRightIcon className={`inline w-4 h-4 ${arrowClasses[variant]}`} />
    </a>
  );
}
