import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating?: number;
  className?: string;
  index?: number;
}

export function TestimonialCard({ quote, name, role, rating = 5, className, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className={cn("bg-white dark:bg-card rounded-[20px] p-6 md:p-8 border border-border/50 flex flex-col items-end text-right gap-4 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-300 relative overflow-hidden group", className)}
    >
      {/* Decorative Quote Icon */}
      <Quote className="absolute -top-4 -left-4 w-24 h-24 text-primary/5 -rotate-12 group-hover:scale-110 group-hover:text-primary/10 transition-all duration-500" />
      
      <div className="flex gap-1 relative z-10">
        {Array.from({ length: rating }).map((_, i) => (
          <motion.div
             key={i}
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.3, delay: (index * 0.2) + (i * 0.1) }}
          >
             <Star className="w-5 h-5 fill-secondary text-secondary" />
          </motion.div>
        ))}
      </div>
      
      <p className="font-body text-primary/80 leading-relaxed text-base relative z-10">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50 w-full justify-end relative z-10">
        <div className="flex flex-col">
          <span className="font-sans font-bold text-primary text-base">{name}</span>
          <span className="font-body text-xs text-secondary">{role}</span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
          {name.charAt(0)}
        </div>
      </div>
    </motion.div>
  );
}
