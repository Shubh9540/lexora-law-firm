import React from 'react';

// बटन के लिए Props डिफाइन कर रहे हैं
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  // बेस स्टाइल जो हर बटन में होगी
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300";

  // अलग-अलग डिज़ाइन (Variants) की स्टाइलिंग
  const variants = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90",
    accent: "bg-gradient-to-r from-[#c49250] to-[#ddaf6a] text-white hover:brightness-105",
    outline: "bg-white border border-[var(--color-accent)] text-[var(--color-primary)] hover:bg-gray-50",
    ghost: "bg-transparent text-[var(--color-primary)] hover:bg-gray-100",
  };

  // अलग-अलग साइज़ (Sizes) की स्टाइलिंग
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    icon: "size-10", // गोल आइकॉन बटन के लिए
  };

  // सब स्टाइल्स को मिलाना
  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
