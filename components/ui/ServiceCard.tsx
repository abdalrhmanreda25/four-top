import React from 'react';
import { cn } from './button';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative rounded-[24px] border border-border/50 bg-white dark:bg-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-secondary/30",
        className
      )}
    >
      {/* Decorative gradient blob on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px] pointer-events-none" />

      {icon && (
        <div className="w-16 h-16 rounded-[20px] bg-primary/5 flex items-center justify-center text-primary mb-6 transition-all duration-500 group-hover:bg-secondary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
          {/* We clone the icon to ensure it's sized nicely if it's a lucide icon */}
          {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { className: 'w-8 h-8' }) : icon}
        </div>
      )}
      <h3 className="font-sans font-bold text-xl text-primary dark:text-primary-foreground mb-3">{title}</h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed relative z-10">{description}</p>
    </motion.div>
  );
}
