import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Briefcase, Code, Sparkles } from 'lucide-react';

const STATS = [
  {
    number: '1+',
    label: 'Year Experience',
    subtext: 'Trounsoul & ThinkNext',
    icon: Clock,
  },
  {
    number: '2',
    label: 'Internships',
    subtext: 'Production Roles',
    icon: Briefcase,
  },
  {
    number: '15+',
    label: 'Projects Built',
    subtext: 'Full Stack & APIs',
    icon: Code,
  },
  {
    number: 'MERN',
    label: 'Primary Stack',
    subtext: 'MongoDB • Express • React • Node',
    icon: Sparkles,
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-10 border-y border-[#ECECEC] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#F0F0F0]"
        >
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx !== 0 ? 'sm:pl-8 pt-4 sm:pt-0' : ''
                } group cursor-default`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#111111] group-hover:text-[#6D3FEF] transition-colors tracking-tight font-sans">
                    {stat.number}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#F5F3FF] flex items-center justify-center text-[#6D3FEF] group-hover:scale-110 transition-transform">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#222222] tracking-tight">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#777777] font-medium mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
