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

export const Card: React.FC = () => {
  return (
    <div className="w-72 h-96 ">
      <CardHeader className="relative overflow-hidden rounded-t-lg flex items-center justify-center h-52">
        <img
          alt="Welcome"
          className="w-48"
          height="200"
          src="coock.webp"
          width="400"
        />
      </CardHeader>
      <CardContent className="space-y-4 p-6 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter text-[var(--tg-theme-text-color)]">
            Welcome
          </h2>
          <p className="text-[var(--tg-theme-text-color)] ">
            🛵💨 Your Next Pizza is Just a Click Away - And Delivery is On Us!
            🏡🍕
          </p>
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
