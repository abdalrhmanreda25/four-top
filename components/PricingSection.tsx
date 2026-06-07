"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Tent, Receipt, CalendarClock, MapPin } from 'lucide-react';

const pricingItems = [
  {
    title: 'مخيم أوروبي مقاس 15×50 م',
    specs: 'مصنوع من الألمنيوم المقاوم للعوامل الجوية والحريق، ومطابق لمواصفات الأمن والسلامة. طربال PVC.',
    includes: ['الإنارة الداخلية', 'الديكور', 'التكييف'],
    quantity: 1
  },
  {
    title: 'مخيم أوروبي مقاس 15×25 م',
    specs: 'مصنوع من الألمنيوم المقاوم للعوامل الجوية والحريق، ومطابق لمواصفات الأمن والسلامة. طربال PVC.',
    includes: ['الإنارة الداخلية', 'الفرش', 'الديكور', 'التكييف'],
    quantity: 1
  },
  {
    title: 'مخيم أوروبي مقاس 15×5 م',
    specs: 'مصنوع من الألمنيوم المقاوم للعوامل الجوية والحريق، ومطابق لمواصفات الأمن والسلامة. طربال PVC.',
    includes: ['الإنارة الداخلية', 'الفرش', 'الديكور', 'التكييف', '3 مولدات كهرباء', '3 فنيين'],
    quantity: 1
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-primary/5 -skew-y-3 origin-top-left -z-10" />
      
      <div className="container max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-secondary/10 text-secondary font-bold font-sans text-sm mb-6 border border-secondary/20"
          >
            عرض سعر مخصص
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans font-bold text-3xl md:text-5xl text-primary mb-4"
          >
            إلى السادة: مؤسسة ملهمة لتنظيم المعارض والمؤتمرات
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-muted-foreground text-lg"
          >
            بناءً على طلبكم، يسعدنا في شركة فور توب للمقاولات العامة تقديم هذا العرض المخصص لتجهيز موقعكم بأعلى معايير الجودة والأمان.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Items Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {pricingItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-primary/5 text-primary text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-2">
                    الكمية: {item.quantity}
                  </div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-sans font-bold text-xl md:text-2xl text-primary">{item.title}</h3>
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                      <Tent className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <p className="font-body text-muted-foreground mb-6 text-right leading-relaxed">
                  {item.specs}
                </p>
                
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <h4 className="font-sans font-bold text-sm text-primary mb-3 text-right">التجهيزات المشمولة:</h4>
                  <div className="flex flex-wrap justify-end gap-2" dir="rtl">
                    {item.includes.map((inc, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-sm font-body text-slate-700 bg-white px-3 py-1.5 rounded-md border border-border/50 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        {inc}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Summary & Notes Column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Price Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white rounded-3xl p-8 shadow-xl shadow-primary/20 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-3 justify-end mb-8 border-b border-white/10 pb-6">
                <h3 className="font-sans font-bold text-2xl">الملخص المالي</h3>
                <Receipt className="w-6 h-6 text-secondary" />
              </div>

              <div className="space-y-4 font-body text-right mb-8 border-b border-white/10 pb-6">
                <div className="flex justify-between text-white/80">
                  <span>160,000 ر.س</span>
                  <span>السعر الإجمالي قبل الضريبة</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>24,000 ر.س</span>
                  <span>الضريبة (15%)</span>
                </div>
              </div>

              <div className="text-right">
                <span className="block font-body text-white/80 text-sm mb-2">السعر الإجمالي بعد الضريبة</span>
                <span className="font-sans font-bold text-4xl text-white">184,000 <span className="text-xl text-secondary">ر.س</span></span>
              </div>
            </motion.div>

            {/* Notes Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-border/50 shadow-sm"
            >
              <h3 className="font-sans font-bold text-xl text-primary mb-6 text-right border-b pb-4">ملاحظات وشروط التعاقد</h3>
              
              <div className="space-y-6 text-right font-body">
                <div className="flex flex-col gap-2 items-end">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <span>موقع الحفل</span>
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-muted-foreground text-sm">الدمام</p>
                </div>

                <div className="flex flex-col gap-2 items-end">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <span>مدة الإيجار</span>
                    <CalendarClock className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-muted-foreground text-sm">البند الأول (40 يوم) — البند الثاني والثالث (45 يوم)</p>
                </div>

                <div className="flex flex-col gap-2 items-end">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <span>جدولة الدفعات</span>
                    <Receipt className="w-5 h-5 text-secondary" />
                  </div>
                  <ul className="text-muted-foreground text-sm space-y-1 list-none p-0">
                    <li>50% عند الاتفاق والتعاقد</li>
                    <li>50% عند التوريد والبدء في التركيب</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
