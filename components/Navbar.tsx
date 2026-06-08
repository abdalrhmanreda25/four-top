"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MapPin, MessageCircle } from "lucide-react";

const CONTACT_WHATSAPP = "https://wa.me/966570713153";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-12",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className={cn(
        "container max-w-[1280px] mx-auto flex items-center justify-between transition-all duration-500",
        isScrolled 
          ? "bg-slate-900/80 backdrop-blur-xl shadow-2xl border border-white/10 rounded-full px-6 md:px-8 py-3" 
          : "px-0 py-0"
      )}>
        {/* Right side: Logo */}
        <div className="flex items-center">
          <Link href="/">
             <span className="font-sans font-bold text-2xl text-white tracking-wide cursor-pointer hover:text-secondary transition-colors duration-300">فور توب</span>
          </Link>
        </div>

        {/* Middle: Links */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-2.5 rounded-full border border-white/5 backdrop-blur-md">
          <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="font-body text-white hover:text-secondary transition-colors text-sm font-medium">الرئيسية</button>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="font-body text-white/80 hover:text-secondary transition-colors text-sm font-medium">المشاريع</button>
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="font-body text-white/80 hover:text-secondary transition-colors text-sm font-medium">من نحن</button>
        </div>

        {/* Left side: CTA (Location & WhatsApp) */}
        <div className="flex items-center gap-3">
          <Button 
            href="https://www.google.com/maps/search/?api=1&query=24°43'00.4%22N+46°50'42.3%22E" 
            target="_blank" 
            rel="noopener noreferrer"
            variant="primary" 
            className="bg-white text-primary hover:bg-slate-100 hover:text-primary px-4 py-2 text-sm flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-secondary" />
            <span>موقعنا</span>
          </Button>
          <Button 
            href={CONTACT_WHATSAPP} 
            target="_blank" 
            rel="noopener noreferrer"
            variant="primary" 
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 text-sm flex items-center gap-2 border-0 shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span>واتساب</span>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
