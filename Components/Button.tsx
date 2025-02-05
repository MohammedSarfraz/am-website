
'use client';

import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'text';
  className?: string;
  icon?: ReactNode;
  fullWidth?: boolean;
}

const Button = ({ text, variant = 'primary', className, icon, fullWidth }: ButtonProps) => (
  <button
    className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
      variant === 'primary' 
        ? 'bg-red-600 text-white hover:bg-red-700' 
        : variant === 'secondary' 
          ? 'bg-white text-red-600 ring-1 ring-red-600 hover:bg-red-50'
          : 'text-red-600 hover:text-red-700 px-0'
    } ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    <div className="flex items-center justify-center gap-2">
      {text}
      {icon && <span>{icon}</span>}
    </div>
  </button>
);

export default Button;
  