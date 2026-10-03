import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, ShieldAlert, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Understand',
    tagline: 'Deconstruct before designing',
    description: 'Deeply dissect user requirements, edge cases, data structures and system constraints before typing the first line of code.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Build',
    tagline: 'Clean, modular & typed architecture',
    description: 'Engineer responsive React user interfaces paired with secure, performant Express/Node.js REST APIs and normalized database schemas.',
    icon: Code2,
  },
  {
    step: '03',
    title: 'Test',
    tagline: 'Resilience & security verification',
    description: 'Validate authentication flows, sanitize payload inputs, test API contracts with Postman, and eliminate UI regressions.',
    icon: ShieldAlert,
  },
  {
    step: '04',
    title: 'Deploy',
    tagline: 'Production-ready scaling & monitoring',
    description: 'Ship to cloud infrastructure with automated CI/CD pipelines, responsive viewport validation, and performance audits.',
    icon: Rocket,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8FF] text-[#6D3FEF] text-xs font-bold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Turning ideas into <br className="hidden sm:inline" />
            <span className="text-[#6D3FEF]">reliable products.</span>
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Professional Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            <p className="text-lg text-[#222222] font-medium leading-relaxed">
              I am a Full Stack Developer driven by the satisfaction of turning complex business requirements into intuitive, blazing-fast web applications.
            </p>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              With 1+ year of hands-on internship experience across <strong className="text-[#111111] font-semibold">Trounsoul Technologies</strong> and <strong className="text-[#111111] font-semibold">ThinkNext Pvt. Ltd.</strong>, I have designed and delivered production-grade MERN stack systems. My work spans AI-assisted interview simulators, high-traffic rental portals, and real-time kanban boards.
            </p>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              I place equal weight on both sides of the stack: on the frontend, crafting pixel-perfect, accessible React experiences; on the backend, designing resilient RESTful endpoints, robust JWT token lifecycles, and optimized MongoDB/MySQL queries.
            </p>

            {/* Core Values / Focus highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-[#EAEAEA] shadow-soft-sm">
                <span className="text-xs font-bold text-[#6D3FEF] uppercase tracking-wider block mb-1">
                  Architecture Focus
                </span>
                <span className="text-sm font-semibold text-[#111111]">
                  Scalable MERN Patterns & Clean Code
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EAEAEA] shadow-soft-sm">
                <span className="text-xs font-bold text-[#6D3FEF] uppercase tracking-wider block mb-1">
                  Security Mindset
                </span>
                <span className="text-sm font-semibold text-[#111111]">
                  JWT Auth, Bcrypt & Sanitized APIs
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#6D3FEF] hover:text-[#592BD9] uppercase tracking-wider group"
              >
                <span>Read my internship journey</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Development Approach Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6E6E6] shadow-soft relative overflow-hidden">
              {/* Subtle top decorative accent */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#6D3FEF] via-[#9069FF] to-[#D6C7FE]" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F0F0F0]">
                <div>
                  <h3 className="text-lg font-bold text-[#111111]">Development Approach</h3>
                  <p className="text-xs text-[#777777]">How I take an idea from whiteboard to production</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#F5F3FF] text-[#6D3FEF] text-xs font-bold font-mono">
                  MERN Engine
                </div>
              </div>

              {/* 4 Process Steps */}
              <div className="space-y-4">
                {STEPS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-4 rounded-2xl bg-[#FAFAFC] hover:bg-[#F8F6FF] border border-[#EEEEEE] hover:border-[#DDD0FE] transition-all duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E0F5] flex items-center justify-center font-mono font-bold text-xs text-[#6D3FEF] shadow-sm shrink-0 group-hover:bg-[#6D3FEF] group-hover:text-white transition-colors">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-bold text-[#111111] group-hover:text-[#6D3FEF] transition-colors">
                              {item.title}
                            </h4>
                            <span className="text-[11px] font-medium text-[#888888] hidden sm:inline">
                              {item.tagline}
                            </span>
                          </div>
                          <p className="text-xs text-[#666666] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


