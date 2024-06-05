import React from "react";

interface TitleProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children?: React.ReactNode;
  supClass?: string;
}

export default function Title({ variant = 'primary', children, supClass }: TitleProps) {
  const baseClass = "tracking-tight";
  const variantClass = {
    primary: "text-3xl md:text-4xl lg:text-5xl font-bold",
    secondary: "text-2xl md:text-3xl lg:text-4xl font-semibold",
    tertiary: "text-lg md:text-xl lg:text-2xl font-medium",
    centered: "text-lg md:text-xl lg:text-2xl font-medium text-center",
  };

  const className = `${supClass} ${baseClass} ${variantClass[variant]}`;

  return <h1 className={className}>{children}</h1>;
}
