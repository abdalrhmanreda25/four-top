import React, { ButtonHTMLAttributes, forwardRef, useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <button
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          'relative overflow-hidden font-sans font-bold text-[16px] px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg active:scale-95',
          variant === 'primary' 
            ? 'bg-primary text-primary-foreground hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]'
            : 'bg-transparent border border-accent text-primary hover:bg-accent/10 dark:text-primary-foreground',
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && (
          <div 
            className="absolute inset-0 z-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle 40px at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.15), transparent)`
            }}
          />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
