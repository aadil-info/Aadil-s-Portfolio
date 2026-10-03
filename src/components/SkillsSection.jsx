import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Cloud, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  ExternalLink 
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools' },
  { id: 'cloud', label: 'Cloud & Deploy' },
];

const SKILL_ITEMS = [
  // Frontend
  { name: 'React.js', category: 'frontend', level: 'Expert', desc: 'Hooks, Context API, Redux Toolkit, Virtual DOM optimization', badge: 'Core' },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 'Advanced', desc: 'Async/Await, Closures, Event Loop, Modular patterns', badge: 'Core' },
  { name: 'Next.js', category: 'frontend', level: 'Intermediate', desc: 'Server & Client components, App router, SSR', badge: 'Modern' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Expert', desc: 'Utility-first CSS, Responsive layouts, Custom design tokens', badge: 'Style' },
  { name: 'HTML5', category: 'frontend', level: 'Expert', desc: 'Semantic tags, Accessibility (a11y), SEO-friendly markup', badge: 'Standard' },
  { name: 'CSS3', category: 'frontend', level: 'Advanced', desc: 'Flexbox, CSS Grid, Keyframe animations, Responsive design', badge: 'Standard' },

  // Backend
  { name: 'Node.js', category: 'backend', level: 'Advanced', desc: 'Event-driven runtime, Non-blocking I/O, NPM ecosystem', badge: 'Core' },
  { name: 'Express.js', category: 'backend', level: 'Advanced', desc: 'Middleware pipelines, Routing, Error handling, MVC structure', badge: 'Core' },
  { name: 'REST APIs', category: 'backend', level: 'Advanced', desc: 'RESTful architecture, CRUD operations, Status codes, Pagination', badge: 'Core' },
  { name: 'JWT', category: 'backend', level: 'Advanced', desc: 'JSON Web Tokens, Secure token signing, Refresh token rotation', badge: 'Security' },
  { name: 'Authentication', category: 'backend', level: 'Advanced', desc: 'Bcrypt password hashing, Role-based Access Control (RBAC)', badge: 'Security' },

  // Database
  { name: 'MongoDB', category: 'database', level: 'Advanced', desc: 'NoSQL document schemas, Aggregation pipeline, Indexing', badge: 'Core' },
  { name: 'Mongoose', category: 'database', level: 'Advanced', desc: 'Schema modeling, Validation, Population, Middleware hooks', badge: 'Core' },
  { name: 'MySQL', category: 'database', level: 'Intermediate', desc: 'Relational tables, Primary/Foreign keys, Structured SQL queries', badge: 'Relational' },

  // Tools
  { name: 'Git', category: 'tools', level: 'Advanced', desc: 'Branching strategies, Rebase, Merge conflicts, Version control', badge: 'VCS' },
  { name: 'GitHub', category: 'tools', level: 'Advanced', desc: 'Repository management, Pull requests, Code review workflows', badge: 'Collab' },
  { name: 'Postman', category: 'tools', level: 'Advanced', desc: 'API testing, Collections, Environment variables, Mock servers', badge: 'Testing' },
  { name: 'VS Code', category: 'tools', level: 'Expert', desc: 'Extensions, Debugging, Snippets, Workspace optimization', badge: 'Editor' },
  { name: 'Docker', category: 'tools', level: 'Familiar', desc: 'Containerization, Dockerfile, Container isolation', badge: 'DevOps' },

  // Cloud & Deploy
  { name: 'Vercel', category: 'cloud', level: 'Advanced', desc: 'Zero-config Next.js & React frontend deployments', badge: 'Deployment' },
  { name: 'Render', category: 'cloud', level: 'Advanced', desc: 'Node.js backend webservices & cron jobs hosting', badge: 'Backend Host' },
  { name: 'Netlify', category: 'cloud', level: 'Advanced', desc: 'Static hosting, continuous integration, DNS management', badge: 'Edge Host' },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? SKILL_ITEMS 
    : SKILL_ITEMS.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-white border-t border-[#ECECEC] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8FF] text-[#6D3FEF] text-xs font-bold uppercase tracking-wider mb-3">
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
              Technologies I work with
            </h2>
            <p className="text-sm sm:text-base text-[#666666] mt-2 max-w-xl">
              A comprehensive toolkit for crafting resilient end-to-end full-stack web applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 mt-6 md:mt-0 p-1.5 bg-[#F5F5F7] rounded-2xl border border-[#EAEAEA]">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#6D3FEF] text-white shadow-sm'
                    : 'text-[#555555] hover:text-[#111111] hover:bg-white/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group p-5 rounded-2xl bg-[#FAFAFC] hover:bg-[#F9F7FF] border border-[#EAEAEA] hover:border-[#DDD0FE] shadow-soft-sm hover:shadow-soft transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white border border-[#E5E0F5] flex items-center justify-center text-[#6D3FEF] font-bold text-xs shadow-xs group-hover:bg-[#6D3FEF] group-hover:text-white transition-colors">
                      {skill.name.charAt(0)}
                    </div>
                    <h3 className="text-sm font-bold text-[#111111] group-hover:text-[#6D3FEF] transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white border border-[#E5E5E5] text-[#666666]">
                    {skill.badge}
                  </span>
                </div>

                <p className="text-xs text-[#666666] leading-relaxed mb-3">
                  {skill.desc}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-[#F0F0F0] text-[11px]">
                  <span className="font-semibold text-[#888888]">Proficiency</span>
                  <span className="font-bold text-[#6D3FEF]">{skill.level}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Categories Overview Bar */}
        <div className="mt-12 p-6 rounded-3xl bg-[#F6F4FD] border border-[#E8DEF8] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#6D3FEF]/10 flex items-center justify-center text-[#6D3FEF]">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#111111]">Frontend</div>
              <div className="text-[11px] text-[#777777]">React • Redux • Tailwind</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#6D3FEF]/10 flex items-center justify-center text-[#6D3FEF]">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#111111]">Backend</div>
              <div className="text-[11px] text-[#777777]">Node • Express • JWT</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#6D3FEF]/10 flex items-center justify-center text-[#6D3FEF]">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#111111]">Database</div>
              <div className="text-[11px] text-[#777777]">MongoDB • Mongoose</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#6D3FEF]/10 flex items-center justify-center text-[#6D3FEF]">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#111111]">Tools</div>
              <div className="text-[11px] text-[#777777]">Git • GitHub • Postman</div>
            </div>
          </div>

          <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
            <div className="w-8 h-8 rounded-xl bg-[#6D3FEF]/10 flex items-center justify-center text-[#6D3FEF]">
              <Cloud className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#111111]">Cloud</div>
              <div className="text-[11px] text-[#777777]">Vercel • Render • Netlify</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

