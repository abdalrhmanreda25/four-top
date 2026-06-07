import React from 'react';
import Image from 'next/image';
import { MapPin, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  className?: string;
}

export function ProjectCard({ title, image, className }: ProjectCardProps) {
  return (
    <div className={cn("bg-white border border-border/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group", className)}>
      {/* Image container */}
      <div className="relative w-full h-64 sm:h-80 overflow-hidden">
        {/* We use standard img to make it simpler, but could use Next Image */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
