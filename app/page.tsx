"use client";

import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Navbar } from "@/components/Navbar";
import { ProjectGallery } from "@/components/ProjectGallery";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { PricingSection } from "@/components/PricingSection";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { 
  Building2, ShieldCheck, Tent, Briefcase, 
  Sofa, Wind, Paintbrush, Trees, Play, CheckCircle2 
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with slow zoom animation */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/heroBackground.jpeg')" }}
        />
        {/* Modern dark overlay with gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/70 to-primary/90 z-10" />
        
        {/* Decorative Glowing Orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] z-10 pointer-events-none" />

        <div className="container max-w-[1280px] mx-auto px-6 relative z-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center max-w-4xl"
          >
            <motion.h1 
              variants={fadeUp}
              className="font-sans font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white tracking-tight drop-shadow-2xl"
            >
              نصنع الفخامة في كل <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">تفصيلة</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="font-body text-lg md:text-xl text-white/80 max-w-2xl mt-6 leading-relaxed"
            >
              تجمع فور توب بين الهندسة الدقيقة والتصاميم الأوروبية الراقية لتنظيم معارض، مؤتمرات، وحفلات زفاف بمستويات عالمية في المملكة.
            </motion.p>

            <motion.div 
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-3 text-white/90 font-body text-sm md:text-base mt-8"
            >
              {[
                "تجهيز حفلات بالرياض",
                "خيام أوروبية",
                "كنب ومكيفات",
                "طاولات طعام فخمة"
              ].map((badge, idx) => (
                <motion.span 
                  key={idx}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 shadow-lg cursor-default"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-12 w-full justify-center">
              <Button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                اطلب تسعيرة الآن
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-black/20 backdrop-blur-md hover:bg-black/40 border-white/20 text-white hover:text-white"
              >
                تصفح مشاريعنا
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-4xl text-primary mb-4">
              خدماتنا المتميزة
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
              حلول متكاملة تجمع بين الرفاهية والجودة لتلبية كافة تطلعاتكم، من الفكرة إلى التنفيذ
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="تنظيم الفعاليات الكبرى"
              description="تخطيط وتنفيذ احترافي لأضخم الفعاليات والمناسبات الوطنية والخاصة"
              icon={<Building2 />}
            />
            <ServiceCard 
              title="المعارض والمؤتمرات"
              description="تصميم وبناء أجنحة المعارض والمؤتمرات وفق أحدث المعايير العالمية"
              icon={<Briefcase />}
            />
            <ServiceCard 
              title="خدمات كبار الشخصيات"
              description="تجهيزات فائقة الفخامة وخدمات حصرية مصممة خصيصاً للضيوف المميزين"
              icon={<ShieldCheck />}
            />
            <ServiceCard 
              title="تجهيزات خارجية"
              description="تهيئة المساحات المفتوحة وتوفير كافة المتطلبات لفعاليات لا تُنسى"
              icon={<Trees />}
            />
            <ServiceCard 
              title="تصميم ديكورات"
              description="إبداع في التصميم الداخلي وتنسيق الزهور والإضاءة لإضفاء لمسة ساحرة"
              icon={<Paintbrush />}
            />
            <ServiceCard 
              title="تأجير طاولات وكراسي"
              description="تشكيلة واسعة من أرقى الأثاث الفندقي الذي يتناسب مع كافة الأذواق"
              icon={<Sofa />}
            />
            <ServiceCard 
              title="أجهزة تكييف وتبريد"
              description="حلول تكييف متطورة تضمن الراحة التامة للضيوف في كافة الظروف المناخية"
              icon={<Wind />}
            />
            <ServiceCard 
              title="الخيام الأوروبية"
              description="توريد وتركيب خيام أوروبية بمواصفات عالمية ومقاسات تناسب جميع الاحتياجات"
              icon={<Tent />}
            />
          </div>
        </div>
      </section>

      <ProjectGallery />

      {/* Features Section */}
      <section className="bg-primary text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-auto relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
             <img 
               src="/heroBackground.jpeg" 
               alt="فور توب تجهيزات" 
               className="w-full h-full object-cover"
             />
          </motion.div>
          
          {/* Right: Content */}
          <div className="py-24 px-8 lg:px-24 flex flex-col justify-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-sans font-bold text-4xl lg:text-5xl mb-12 text-right leading-tight">
                لماذا تختار <span className="text-secondary">"فور توب"؟</span>
              </h2>
            </motion.div>
            
            <div className="flex flex-col gap-10 text-right">
              {[
                { title: "جودة أوروبية", desc: "نستخدم أفضل الخامات والمعدات العالمية المطابقة للمعايير الأوروبية" },
                { title: "أمان وسلامة", desc: "نلتزم بأدق معايير السلامة لضمان حماية جميع المشاركين والضيوف" },
                { title: "فريق متخصص", desc: "مهندسون وفنيون ذوو خبرة عالية يعملون بشغف وإتقان لتحقيق رؤيتك" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="flex items-start gap-6 justify-end group cursor-default"
                >
                  <div className="flex flex-col">
                    <h3 className="font-sans font-bold text-2xl mb-2 text-white group-hover:text-secondary transition-colors duration-300">{item.title}</h3>
                    <p className="font-body text-white/70 leading-relaxed text-lg">{item.desc}</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 mt-1 border border-secondary/20 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <CheckCircle2 className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/30 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary mb-6">قالوا عنا</h2>
               <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">نفخر بالثقة التي منحنا إياها عملاؤنا، ونعتبر نجاح فعالياتهم هو نجاحنا الحقيقي</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              index={0}
              quote="احترافية عالية في التعامل ودقة في المواعيد. التنفيذ كان يفوق التوقعات بكل المقاييس."
              name="أحمد محمد"
              role="مدير فعاليات"
            />
            <TestimonialCard 
              index={1}
              quote="فريق عمل متميز يمتلك حلولاً مبتكرة لكل التحديات. كانت تجربة التعاون معهم رائعة جداً."
              name="سارة عبدالله"
              role="منظمة مؤتمرات"
            />
            <TestimonialCard 
              index={2}
              quote="الجودة الأوروبية واضحة في كل تفصيلة. ضيوفنا كانوا في قمة الانبهار من مستوى التجهيزات."
              name="خالد عبدالرحمن"
              role="مدير تنفيذي"
            />
          </div>
        </div>
      </section>

      <VideoTestimonials />

      <PricingSection />

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-50 relative">
        <div className="container max-w-[1280px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[3rem] p-12 md:p-20 text-center flex flex-col items-center relative overflow-hidden shadow-2xl"
          >
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
            
            <div className="relative z-20">
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                جاهزون لصناعة حدث <span className="text-secondary">لا يُنسى؟</span>
              </h2>
              <p className="font-body text-white/80 mb-12 max-w-2xl text-lg md:text-xl">
                فريق "فور توب" مستعد دائماً لتقديم الاستشارة وتلبية كافة متطلباتكم بأعلى معايير الجودة والفخامة. دعنا نخطط لفعاليتك القادمة الآن.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-4 text-lg border-0 shadow-lg shadow-[#25D366]/30 group">
                  <span className="font-bold">تواصل عبر واتساب</span>
                </Button>
                <Button variant="secondary" className="bg-white text-primary hover:bg-slate-100 px-10 py-4 text-lg border-0 shadow-lg group">
                  <span className="font-bold">أو اتصل بنا هاتفياً</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary pt-16 pb-8 border-t border-white/10 text-white/70">
        <div className="container max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-white/10 pb-8">
            <div className="flex flex-col gap-2 items-center md:items-end">
              <span className="font-sans font-bold text-3xl text-white">فور توب</span>
              <p className="font-body text-sm text-center md:text-right">للفعاليات والمعارض والخيام الأوروبية</p>
            </div>
            <div className="flex gap-6">
               <span className="hover:text-white cursor-pointer transition-colors">تويتر</span>
               <span className="hover:text-white cursor-pointer transition-colors">انستقرام</span>
               <span className="hover:text-white cursor-pointer transition-colors">لينكد إن</span>
            </div>
          </div>
          <div className="text-center font-body text-sm text-white/50">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} فور توب
          </div>
        </div>
      </footer>
    </div>
  );
}
