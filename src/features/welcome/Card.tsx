// src/components/ui/button/Button.tsx
import React, { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
}

export const Cards: React.FC<ButtonProps> = ({
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

export const Card: React.FC<ButtonProps> = ({
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

export const CardHeader: React.FC<ButtonProps> = ({
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

export const CardContent: React.FC<ButtonProps> = ({
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

export const CardFooter: React.FC<ButtonProps> = ({
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
