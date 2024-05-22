import React from "react";

interface TitleProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children?: React.ReactNode;
  supClass?: string;
}

export default function Title({ variant = 'primary', children, supClass }: TitleProps) {
  const baseClass = "tracking-tight";
  const variantClass = {
    primary: "text-5xl font-bold",
    secondary: "text-3xl font-semibold",
    tertiary: "text-xl font-medium",
  };

  const className = `${supClass} ${baseClass} ${variantClass[variant]}`;

  return <h1 className={className}>{children}</h1>;
}
