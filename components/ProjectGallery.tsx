"use client";

import React, { useState } from 'react';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/lib/projectsData';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const categories = [
  'الكل',
  'حفلات زفاف',
  'معارض',
  'مؤتمرات',
  'دورات مياه',
  'تنظيم مخيمات في مهرجان الملك عبد العزيز للإبل',
  'إيجار الحمامات VIP'
];

export function ProjectGallery() {
  const [filter, setFilter] = useState('الكل');
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredProjects = filter === 'الكل'
    ? projects
    : projects.filter(p => p.category === filter);

  const visibleProjects = filter === 'الكل' ? filteredProjects.slice(0, visibleCount) : filteredProjects;

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setVisibleCount(9); // Reset to 9 when changing tabs
  };

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-4xl text-primary mb-4">معرض مشاريعنا الاستثنائية</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            فخورون بتنفيذ أرقى الفعاليات والمشاريع الاستراتيجية في كافة أنحاء المملكة، حيث تجتمع الدقة الهندسية مع الفخامة الأوروبية لتشكيل فضاءات استثنائية.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" dir="rtl">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-6 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${filter === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-primary'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Link */}
        {filter === 'الكل' && filteredProjects.length > visibleCount && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setVisibleCount(filteredProjects.length)}
              className="text-primary hover:text-secondary transition-colors duration-300 font-sans font-bold text-lg underline underline-offset-8 decoration-2 decoration-secondary/50 hover:decoration-secondary"
            >
              عرض المزيد
            </button>
          </motion.div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-muted-foreground font-body">
            لا توجد مشاريع مطابقة لهذا التصنيف حالياً.
          </div>
        )}
      </div>
    </section>
  );
}
