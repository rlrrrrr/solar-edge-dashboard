import React from "react";

interface ParagraphProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children?: React.ReactNode;
}

export default function Paragraph({ variant = 'primary', children }: ParagraphProps) {
  const variantClass = {
    primary: "text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
    secondary: "text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",
    tertiary: "text-gray-500 dark:text-gray-400 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed",
  };

  const className = `${variantClass[variant]}`;

  return <p className={className}>{children}</p>;
}
