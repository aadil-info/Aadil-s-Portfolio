import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Palette, 
  Smartphone, 
  Film, 
  Camera, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Layers,
  MessageSquare
} from 'lucide-react';

const SERVICES = [
  {
    id: 'website-dev',
    title: 'Website Development',
    category: 'development',
    tagline: 'High-Performance & Conversion-Focused',
    description: 'Custom, modern, and ultra-fast web applications built from scratch using React.js, Next.js, and the MERN stack. Designed with responsive layouts, accessible semantic code, robust backend APIs, and search engine optimization.',
    icon: Globe,
    badge: 'Most Popular',
    deliverables: [
      'Single Page Apps (SPA) & SaaS MVPs',
      'Landing pages with high conversion rates',
      'Custom RESTful APIs & database design',
      'Full mobile responsiveness & SEO readiness',
      'CMS integration & payment gateways'
    ],
    timeline: '1 – 3 Weeks',
    pricingNote: 'Custom quote based on scope'
  },
  {
    id: 'ux-ui-design',
    title: 'UX/UI Design',
    category: 'design',
    tagline: 'Clean, Modern & Intuitive Experiences',
    description: 'Transforming ideas into visually stunning, user-centered digital interfaces. From wireframing and user journey mapping to high-fidelity clickable Figma prototypes and comprehensive design systems.',
    icon: Palette,
    badge: 'Design Systems',
    deliverables: [
      'Interactive Figma prototypes & wireframes',
      'Complete component libraries & style guides',
      'Mobile-first & desktop responsive UX',
      'Micro-interactions & UX motion specifications',
      'Design handoff ready for developers'
    ],
    timeline: '4 – 10 Days',
    pricingNote: 'Per-project or milestone pricing'
  },
  {
    id: 'app-dev',
    title: 'App Development',
    category: 'development',
    tagline: 'Cross-Platform Mobile Experiences',
    description: 'Building smooth, responsive cross-platform mobile applications for iOS and Android. Leveraging React Native and Progressive Web Apps (PWA) with native device features, offline caching, and real-time backend synchronization.',
    icon: Smartphone,
    badge: 'Cross-Platform',
    deliverables: [
      'React Native / PWA cross-platform apps',
      'Real-time data sync & push notifications',
      'Secure user authentication & local storage',
      'Native camera, location & device APIs',
      'App Store & Play Store deployment support'
    ],
    timeline: '2 – 5 Weeks',
    pricingNote: 'Milestone-based delivery'
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    category: 'creative',
    tagline: 'High-Retention Visual Storytelling',
    description: 'Professional post-production video editing tailored for tech products, YouTube creators, SaaS walk-throughs, and social media. Dynamic pacing, seamless transitions, sound design, and animated typography captions.',
    icon: Film,
    badge: 'High Engagement',
    deliverables: [
      'Short-form reels, TikToks & YouTube Shorts',
      'Long-form YouTube video & course editing',
      'Product demo videos & SaaS feature reveals',
      'Sound design, Foley & background score mastering',
      'Color grading & kinetic typography captions'
    ],
    timeline: '24 – 72 Hours',
    pricingNote: 'Per video or monthly retainer'
  },
  {
    id: 'photo-editing',
    title: 'Photo Editing',
    category: 'creative',
    tagline: 'Editorial Retouching & Asset Polishing',
    description: 'High-end digital image retouching, color enhancement, and graphic asset styling. Perfect for professional headshots, e-commerce product listings, YouTube thumbnails, and marketing banners.',
    icon: Camera,
    badge: 'Pixel Precision',
    deliverables: [
      'Commercial product photo retouching',
      'High-conversion YouTube thumbnail designs',
      'Skin retouching, lighting & color grading',
      'Background removal & clean studio isolation',
      'Social media graphics & marketing banners'
    ],
    timeline: '24 – 48 Hours',
    pricingNote: 'Per photo or batch packages'
  },
];

const GUARANTEES = [
  { icon: Clock, title: 'On-Time Delivery', desc: 'Strict milestone commitments with zero guesswork.' },
  { icon: ShieldCheck, title: 'Code & File Ownership', desc: '100% intellectual property and full source files handed to you.' },
  { icon: Zap, title: 'Rapid Revisions', desc: 'Iterative feedback loops until you are completely satisfied.' },
  { icon: MessageSquare, title: 'Transparent Communication', desc: 'Daily async updates via Slack, WhatsApp, or Email.' },
];

export default function FreelanceSection({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeFilter);

  return (
    <section id="freelance" className="py-24 bg-[#FAF9FE] border-t border-[#ECECEC] relative overflow-hidden">
      {/* Background soft lavender glow */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#6D3FEF]/10 via-[#EEE8FF]/40 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#DDD0FE]/15 blur-2xl pointer-events-none rounded-full"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8FF] text-[#6D3FEF] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#6D3FEF]" />
              <span>Freelance Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
              Let's bring your project to life.
            </h2>
            <p className="text-sm sm:text-base text-[#666666] mt-2">
              Available for freelance contracts, MVP builds, design overhauls, and creative digital production.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-1.5 mt-6 md:mt-0 p-1.5 bg-white rounded-2xl border border-[#EAEAEA] shadow-soft-sm">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'development', label: 'Development' },
              { id: 'design', label: 'UX/UI' },
              { id: 'creative', label: 'Media & Creative' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-[#6D3FEF] text-white shadow-sm'
                    : 'text-[#666666] hover:text-[#111111] hover:bg-[#F5F5F7]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border border-[#EAEAEA] hover:border-[#D6C7FE] shadow-soft hover:shadow-soft-lg transition-all duration-300 relative"
                >
                  {/* Top content */}
                  <div>
                    {/* Header badge & icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] border border-[#E8DEF8] flex items-center justify-center text-[#6D3FEF] group-hover:bg-[#6D3FEF] group-hover:text-white transition-colors shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF8FF] border border-[#E8DEF8] text-[#6D3FEF]">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl font-extrabold text-[#111111] tracking-tight group-hover:text-[#6D3FEF] transition-colors mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#6D3FEF] mb-3">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mb-6 pt-4 border-t border-[#F0F0F0] space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#888888] mb-2">
                        What's Included:
                      </div>
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-[#333333]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6D3FEF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer Action */}
                  <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-semibold text-[#888888] uppercase">Est. Turnaround</span>
                      <span className="text-xs font-bold text-[#111111]">{service.timeline}</span>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#6D3FEF] hover:bg-[#592BD9] text-white text-xs font-bold shadow-soft hover:shadow-soft-lg active:scale-95 transition-all group/btn"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Guarantees / Why Work With Me */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-[#EAEAEA] shadow-soft">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#111111]">
              Why Clients Trust My Services
            </h3>
            <p className="text-xs text-[#666666] mt-1">
              Direct, transparent collaboration from day one with guaranteed quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUARANTEES.map((item, idx) => {
              const GIcon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#FAFAFC] border border-[#EEEEEE]">
                  <div className="w-10 h-10 rounded-xl bg-[#EEE8FF] text-[#6D3FEF] flex items-center justify-center mb-3">
                    <GIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#111111] mb-1">{item.title}</h4>
                  <p className="text-xs text-[#666666] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
