"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10 hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(212,175,55,0.1)]",
        className
      )}
      {...props}
    >
      <div className="absolute -left-full top-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-500 hover:left-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
