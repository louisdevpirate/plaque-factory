"use client";

import { ReactNode } from "react";

interface CTAContainerProps {
  children: ReactNode;
  direction?: "row" | "col";
  gap?: "sm" | "md" | "lg";
  className?: string;
  center?: boolean;
}

export default function CTAContainer({
  children,
  direction = "row",
  gap = "md",
  className = "",
  center = true,
}: CTAContainerProps) {
  const directionClasses = {
    row: "flex-row",
    col: "flex-col",
  };

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  };

  const centerClasses = center ? "items-center justify-center" : "";

  const combinedClasses = `flex ${directionClasses[direction]} ${gapClasses[gap]} ${centerClasses} ${className}`;

  return <div className={combinedClasses}>{children}</div>;
}
