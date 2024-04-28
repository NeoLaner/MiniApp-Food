// src/components/ui/button/Button.tsx
import React, { ReactNode } from "react";

interface BasicProps {
  className?: string;
  children: ReactNode;
}

export const Cards: React.FC<BasicProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
};

interface CardProps {
  index: number;
  currentSlide: number;
  headingText: string;
  text: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({
  index,
  currentSlide,
  headingText,
  text,
  image,
}) => {
  const style = {
    transform: `translateX(${-(currentSlide - index) * 100}%)`,
  };
  return (
    <div
      style={style}
      className={`w-full max-w-md transition-all ${
        index !== currentSlide ? "absolute" : ""
      }`}
    >
      <CardHeader className="relative overflow-hidden rounded-t-lg flex items-center justify-center ">
        <img
          alt="Welcome"
          className="w-48"
          height="200"
          src={image}
          width="400"
        />
      </CardHeader>
      <CardContent className="space-y-4 p-6 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter text-[var(--tg-theme-text-color)]">
            {headingText}
          </h2>
          <p className="text-[var(--tg-theme-text-color)] ">{text}</p>
        </div>
      </CardContent>
    </div>
  );
};

export const CardHeader: React.FC<BasicProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<BasicProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
};
