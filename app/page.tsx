"use client";

import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Navbar } from "@/components/Navbar";
import { ProjectGallery } from "@/components/ProjectGallery";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { PricingSection } from "@/components/PricingSection";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { 
  Building2, ShieldCheck, Tent, Briefcase, 
  Sofa, Wind, Paintbrush, Trees, CheckCircle2,
  MessageCircle, Phone
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CONTACT_PHONE = "+966570713153";
const CONTACT_WHATSAPP = "https://wa.me/966570713153";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with slow zoom animation (Fallback) */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/heroBackground.jpeg')" }}
        />
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/main.mp4" type="video/mp4" />
        </video>
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
      <section id="about" className="bg-primary text-white relative overflow-hidden">
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
              {/* Season Offer Tag */}
              <div className="inline-flex items-center gap-3 bg-secondary/15 border border-secondary/35 rounded-full px-6 py-2.5 mb-8 text-secondary font-bold text-sm md:text-base">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                <span>خصومات حصرية للموسم الجديد: عروض 20% و 30% على كافة خدمات التجهيز والخيام الأوروبية!</span>
              </div>

              <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                جاهزون لصناعة حدث <span className="text-secondary">لا يُنسى؟</span>
              </h2>
              <p className="font-body text-white/80 mb-12 max-w-2xl text-lg md:text-xl">
                فريق "فور توب" مستعد دائماً لتقديم الاستشارة وتلبية كافة متطلباتكم بأعلى معايير الجودة والفخامة. دعنا نخطط لفعاليتك القادمة الآن.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button 
                  href={CONTACT_WHATSAPP} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-4 text-lg border-0 shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-white" />
                  <span className="font-bold">تواصل عبر واتساب</span>
                </Button>
                <Button 
                  href={`tel:${CONTACT_PHONE}`}
                  variant="secondary" 
                  className="w-full sm:w-auto bg-white text-primary hover:bg-slate-100 px-10 py-4 text-lg border-0 shadow-lg flex items-center justify-center gap-2 group"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  <span className="font-bold">أو اتصل بنا هاتفياً</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Season Offers Banner */}
      <section className="bg-secondary py-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-white relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
            <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider">عروض حصرية</span>
            <h3 className="font-sans font-bold text-2xl">تخفيضات 20% و 30% على كافة التجهيزات والخيام الأوروبية!</h3>
          </div>
          <p className="font-body text-white/85 text-center lg:text-right max-w-xl text-base leading-relaxed">
            بمناسبة انطلاق الموسم الجديد، استفد من عروضنا المتميزة: خصم 30% على الخيام الأوروبية بجميع مقاساتها، وخصم 20% على الأثاث والتكييف والديكورات.
          </p>
          <Button 
            href={CONTACT_WHATSAPP} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full lg:w-auto shrink-0 bg-white text-primary hover:bg-slate-100 px-8 py-3.5 text-base border-0 shadow-xl flex items-center justify-center gap-2 font-bold"
          >
            <MessageCircle className="w-5 h-5 fill-secondary text-secondary" />
            <span>احصل على العرض الآن</span>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary pt-16 pb-8 border-t border-white/10 text-white/70">
        <div className="container max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-white/10 pb-8">
            <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-right">
              <span className="font-sans font-bold text-3xl text-white">فور توب</span>
              <p className="font-body text-sm">للفعاليات والمعارض والخيام الأوروبية</p>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-end">
               {/* TikTok - Extra Prominent badge with glowing animation/style */}
               <a 
                 href="https://www.tiktok.com/@user7534508559824" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-black hover:bg-slate-900 border-2 border-[#00f2ea] text-white transition-all px-5 py-2.5 rounded-full flex items-center gap-2 font-body text-sm font-bold shadow-[0_0_15px_rgba(0,242,234,0.3)] hover:shadow-[0_0_20px_rgba(0,242,234,0.6)] hover:scale-105 active:scale-95"
               >
                 <svg className="w-4 h-4 fill-current text-[#ff0050] drop-shadow-[0.5px_0.5px_0_#00f2ea]" viewBox="0 0 16 16">
                   <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                 </svg>
                 <span>حسابنا في تيك توك</span>
               </a>
               
               {/* Snapchat */}
               <a 
                 href="https://www.snapchat.com/add/walid264401" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-[#FFFC00] hover:bg-[#fffa00] text-black transition-all px-4 py-2.5 rounded-full flex items-center gap-2 font-body text-sm font-semibold shadow-md hover:scale-105 active:scale-95 border border-yellow-300"
               >
                 <svg className="w-4 h-4 fill-current text-black" viewBox="0 0 16 16">
                   <path d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1 1 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.4 3.4 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.3.3 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.4 1.4 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.8 1.8 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.3 4.3 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0s-1.76.216-2.505.641c-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.8 1.8 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.4 1.4 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.4.4 0 0 1 .109.11c.026.053.027.11-.012.217a3.4 3.4 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075q.18.189.409.31a4.4 4.4 0 0 0 1 .4.7.7 0 0 1 .202.09c.118.104.102.26.259.488q.12.178.296.3c.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.6.6 0 0 1 .19-.087 4.5 4.5 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047m-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082s-2.045-.801-2.904-1.084c-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a1 1 0 0 1 0 0"/>
                 </svg>
                 <span>سناب شات</span>
               </a>
            </div>
          </div>
          <div className="text-center font-body text-sm text-white/50">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} فور توب
          </div>
        </div>
      </footer>

      {/* Floating Social Bar - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Float */}
        <a 
          href={CONTACT_WHATSAPP} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:rotate-6 active:scale-95 transition-all duration-300 border border-white/10"
          title="تواصل عبر واتساب"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>
        {/* TikTok Float - Extra visible neon glow styling */}
        <a 
          href="https://www.tiktok.com/@user7534508559824" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-[0_0_15px_rgba(0,242,234,0.6)] hover:scale-110 hover:-rotate-6 active:scale-95 transition-all duration-300 border-2 border-[#00f2ea] hover:border-[#ff0050]"
          title="تابعنا على تيك توك"
        >
          <svg className="w-5 h-5 fill-current text-[#00f2ea]" viewBox="0 0 16 16">
            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
          </svg>
        </a>
        {/* Snapchat Float */}
        <a 
          href="https://www.snapchat.com/add/walid264401" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#FFFC00] text-black flex items-center justify-center shadow-2xl hover:scale-110 hover:rotate-6 active:scale-95 transition-all duration-300 border border-black/10 shadow-yellow-400/5"
          title="تابعنا على سناب شات"
        >
          <svg className="w-5 h-5 fill-current text-black" viewBox="0 0 16 16">
            <path d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1 1 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.4 3.4 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.3.3 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.4 1.4 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.8 1.8 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.3 4.3 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0s-1.76.216-2.505.641c-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.8 1.8 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.4 1.4 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.4.4 0 0 1 .109.11c.026.053.027.11-.012.217a3.4 3.4 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075q.18.189.409.31a4.4 4.4 0 0 0 1 .4.7.7 0 0 1 .202.09c.118.104.102.26.259.488q.12.178.296.3c.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.6.6 0 0 1 .19-.087 4.5 4.5 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047m-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082s-2.045-.801-2.904-1.084c-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a1 1 0 0 1 0 0"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
