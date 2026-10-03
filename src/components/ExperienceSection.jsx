import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight, Award } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Full Stack Developer Intern',
    company: 'ThinkNext Pvt. Ltd.',
    location: 'Mohali, Chandigarh',
    period: 'June 2026 – August 2026',
    mode: 'On-site',
    type: 'Recent',
    highlight: 'Built & Deployed "IntervAi" AI Mock Interview Platform',
    responsibilities: [
      'Developed an AI Interview Preparation Platform using React.js, Node.js, Express.js, and MongoDB.',
      'Integrated OpenAI APIs to implement AI-powered mock interviews, feedback, and resume analysis features.',
      'Implemented JWT authentication, RESTful APIs, dashboards, and responsive user interfaces.',
      'Engineered reusable, high-performance React component libraries and handled secure candidate session workflows.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'JWT', 'RESTful APIs']
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Trounsoul Technologies',
    location: 'Jaipur, Rajasthan',
    period: 'Oct. 2025 – Mar. 2026',
    mode: 'Remote',
    type: 'Foundational',
    highlight: 'Job Portal Website & Responsive UI Development',
    responsibilities: [
      'Developed and maintained responsive web applications using HTML, CSS, JavaScript, and Bootstrap, focusing on user-friendly interfaces.',
      'Worked on the development and maintenance of a Job Portal website, implementing frontend features and handling dynamic data using JSON.',
      'Integrated Fetch API and third-party APIs for seamless client-server data exchange.',
      'Utilized Git & GitHub for version control, collaborative workflows, and structured project development.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'Fetch API', 'JSON', 'Git', 'GitHub']
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8FF] text-[#6D3FEF] text-xs font-bold uppercase tracking-wider mb-3">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#666666] mt-2">
            1+ year of dedicated production development across 2 specialized software engineering internships.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#6D3FEF] via-[#C4B5FD] to-[#E5E0F5]" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline node icon */}
                <div className="absolute left-2 sm:left-6 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#6D3FEF] flex items-center justify-center shadow-soft">
                  <div className="w-2 h-2 rounded-full bg-[#6D3FEF]" />
                </div>

                {/* Experience Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAEAEA] shadow-soft hover:shadow-soft-lg hover:border-[#D6C7FE] transition-all duration-300">
                  
                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#F0F0F0]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EEE8FF] text-[#6D3FEF]">
                          {exp.type}
                        </span>
                        <span className="text-xs font-medium text-[#777777] flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight">
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-[#555555] mt-1">
                        <span className="text-[#6D3FEF]">{exp.company}</span>
                        <span className="text-[#BBBBBB]">•</span>
                        <span className="flex items-center gap-1 text-[#666666]">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                        <span className="text-[#BBBBBB]">•</span>
                        <span className="text-[#777777] font-normal">{exp.mode}</span>
                      </div>
                    </div>

                    <div className="self-start lg:self-center px-3 py-1.5 rounded-xl bg-[#FAF8FF] border border-[#E8DEF8] text-xs font-bold text-[#6D3FEF] flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>{exp.highlight}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#888888] mb-3">
                      Key Responsibilities & Contributions:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#444444] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#6D3FEF] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#F5F5F5]">
                    <span className="text-xs font-semibold text-[#888888] mr-1">Stack:</span>
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#F5F3FF] text-[#5527D6] border border-[#E5DBFD]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
