"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

const videos = [
  { id: 'main', src: '/videos/main.mp4' },
  { id: 'bath', src: '/videos/bath.mp4' },
  { id: 1, src: '/videos/video1.mp4' },
  { id: 2, src: '/videos/video2.mp4' },
  { id: 3, src: '/videos/video3.mp4' },
  { id: 4, src: '/videos/video4.mp4' },
  { id: 5, src: '/videos/video5.mp4' },
];

function VideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-[260px] sm:w-[320px] md:w-[400px] h-[160px] sm:h-[200px] md:h-[250px] rounded-3xl overflow-hidden group shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] hover:shadow-primary/20 transition-all duration-500 cursor-pointer shrink-0">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Dark gradient overlay at the bottom for controls */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Center Play Icon (Decorative) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
          <Play className="w-8 h-8 text-white fill-white ml-1" />
        </div>
      </div>

      {/* Mute/Unmute Toggle - Always visible so users can easily toggle sound on both mobile and desktop */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary/85 z-20 border border-white/10 shadow-lg cursor-pointer transition-all duration-300 active:scale-95"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </div>
  );
}

export function VideoTestimonials() {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate videos to create a seamless loop
  const marqueeVideos = [...videos, ...videos];

  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-6">جولة سينمائية في أعمالنا</h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            شاهد عن قرب الإبداع والتفاصيل الدقيقة التي نصنعها في كل مشروع ليكون حدثاً لا يُنسى
          </p>
        </motion.div>
      </div>

      <div
        className="relative w-full flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left and Right Gradients for smooth fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 px-6 w-max overflow-visible">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: isHovered ? undefined : ["0%", "50%"] }} // Using framer motion to slide right (because of RTL layout, positive x is right)
            transition={isHovered ? {} : {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {marqueeVideos.map((video, idx) => (
              <VideoCard key={idx} src={video.src} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
