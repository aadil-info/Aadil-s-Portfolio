import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Briefcase, 
  Sparkles, 
  Code2, 
  Terminal,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import aadilCutoutImg from '../assets/aadil-cutout.png';

export default function HeroSection({ onOpenResume }) {
  const credibilityPoints = [
    { icon: Code2, label: 'Clean Code' },
    { icon: Briefcase, label: '1+ Year Experience' },
    { icon: Layers, label: 'Real-World Project' },
  ];

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8FF] via-[#FAFAFA] to-[#FAFAFA]"
    >
      {/* Background ambient decorative glow */}
      <div 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#6D3FEF]/10 via-[#EEE8FF]/40 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div 
        className="absolute top-40 right-10 w-72 h-72 bg-[#D8B4FE]/10 blur-2xl pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >


            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.12] mb-4">
              Hi, I'm Aadil <br />
              <span className="text-[#6D3FEF] bg-gradient-to-r from-[#6D3FEF] via-[#7C4DFF] to-[#8E63FF] bg-clip-text text-transparent">
                Full Stack Developer.
              </span>
            </h1>

            {/* Supporting Tagline */}
            <p className="text-lg sm:text-xl font-medium text-[#2A2A2A] mb-4 leading-relaxed">
              I build modern, scalable web applications that solve real-world problems.
            </p>

            {/* Detailed Description */}
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-xl mb-8 font-normal">
              I'm a Full Stack Developer focused on building production-ready web applications with clean UI, robust APIs, secure authentication and scalable backend systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#6D3FEF] hover:bg-[#592BD9] text-white text-sm font-semibold shadow-soft hover:shadow-soft-lg active:scale-95 transition-all duration-200 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#F8F7FC] text-[#111111] hover:text-[#6D3FEF] text-sm font-semibold border border-[#E0E0E0] hover:border-[#D6C7FE] shadow-sm active:scale-95 transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-[#EAEAEA] w-full max-w-lg">
              <a
                href="https://github.com/aadil-info"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white border border-[#E8E8E8] text-[#333333] hover:text-[#6D3FEF] hover:border-[#D6C7FE] hover:bg-[#F9F7FF] shadow-sm transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammad-aadil-mansuri/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white border border-[#E8E8E8] text-[#333333] hover:text-[#6D3FEF] hover:border-[#D6C7FE] hover:bg-[#F9F7FF] shadow-sm transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/heyy__aadil.__?igsh=ZTNoZG9wb3BpbjA3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2.5 rounded-xl bg-white border border-[#E8E8E8] text-[#333333] hover:text-[#6D3FEF] hover:border-[#D6C7FE] hover:bg-[#F9F7FF] shadow-sm transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Credibility Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg">
              {credibilityPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#EDEDED] shadow-soft-sm text-[#333333]"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#F5F3FF] flex items-center justify-center text-[#6D3FEF] shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-[#222222] whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Seamless Editorial Portrait Integration (Enlarged) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center items-end pt-8 lg:pt-0"
          >
            {/* Subtle Abstract Lavender/Purple Brush Shapes Behind the Person */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] lg:w-[540px] h-[380px] sm:h-[480px] lg:h-[540px] rounded-full bg-gradient-to-tr from-[#6D3FEF]/18 via-[#DDD0FE]/35 to-[#F3EEFE]/30 blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />
            <div 
              className="absolute top-1/4 right-6 w-52 h-52 rounded-full bg-[#8E63FF]/15 blur-2xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Subject Wrapper with overlay tags positioned directly ON the photo */}
            <div className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[550px] flex justify-center">
              
              {/* Circular Badge: 1+ Year Exp. positioned directly ON the photo */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-20 sm:top-24 right-4 sm:right-6 z-30 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#E6DEF8] hover:border-[#6D3FEF] shadow-soft-lg flex flex-col items-center justify-center text-center p-2 transition-colors select-none"
              >
                <span className="text-sm sm:text-base font-extrabold text-[#6D3FEF] tracking-tight leading-none">
                  1+ Year
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#222222] uppercase tracking-wider mt-1">
                  Exp.
                </span>
              </motion.div>

              {/* Circular Badge: MERN Specialist positioned directly ON the photo */}
              <motion.div 
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute bottom-20 sm:bottom-28 left-4 sm:left-6 z-30 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#E6DEF8] hover:border-[#6D3FEF] shadow-soft-lg flex flex-col items-center justify-center text-center p-2 transition-colors select-none"
              >
                <span className="text-sm sm:text-base font-extrabold text-[#111111] tracking-tight leading-none">
                  MERN
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#6D3FEF] uppercase tracking-wider mt-1">
                  Specialist
                </span>
              </motion.div>

              {/* Portrait Image with soft bottom fade */}
              <div className="w-full flex justify-center [mask-image:linear-gradient(to_bottom,black_78%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_78%,transparent_98%)]">
                <img
                  src={aadilCutoutImg}
                  alt="Mohammad Aadil Mansuri - Full Stack MERN Developer"
                  loading="eager"
                  className="w-full h-auto max-h-[640px] sm:max-h-[700px] lg:max-h-[760px] object-contain object-bottom select-none filter contrast-[1.02] brightness-[1.01]"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



