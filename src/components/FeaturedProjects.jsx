import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Database, 
  ShieldCheck, 
  Eye, 
  Check,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import intervAiImg from '../assets/IntervAi.png';
import driveEasyImg from '../assets/DriveEasy.png';
import tmsPreviewImg from '../assets/tms-preview.jpg';

const PROJECTS = [
  {
    id: 'intervai',
    title: 'IntervAI — Preparation Platform',
    badge: 'Flagship MERN Project',
    subtitle: 'IntervAI — Intelligent Mock Interview & Assessment System',
    description: 'A production-deployed full-stack AI interview platform. Simulate technical & behavioral rounds, get instant AI feedback, ATS resume scoring, and aptitude test analytics — all in one unified platform.',
    image: intervAiImg,
    domain: 'interview-backend-y74c.onrender.com',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'JWT', 'Render'],
    features: [
      'AI-powered mock interviews with dynamic role-specific questioning',
      'Real-time AI feedback with keyword scoring and delivery pacing (WPM)',
      'ATS Resume Analyzer: match score, keyword gaps and formatting suggestions',
      'Timed aptitude test suite with automated scoring and session history',
      'Secure JWT authentication with role-based access control',
      'Candidate performance dashboard with progress tracking across sessions',
      'Admin panel for managing question banks and user oversight',
      'Deployed on Render with production-ready Express.js + MongoDB backend'
    ],
    demoUrl: 'https://interview-backend-y74c.onrender.com/',
    githubUrl: 'https://github.com/aadil-info',
    databaseInfo: 'MongoDB Atlas (Collections: Users, Interviews, Resumes, AptitudeTests, Results, AdminLogs)',
  },
  {
    id: 'driveeasy',
    title: 'DriveEasy — Car Rental Platform',
    badge: 'Production Web App',
    subtitle: 'Modern Vehicle Reservation & Fleet Management Engine',
    description: 'An end-to-end car rental platform featuring real-time vehicle catalogs, date-based booking reservation management, image asset optimization via ImageKit, and an administrative fleet management portal.',
    image: driveEasyImg,
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'ImageKit'],
    features: [
      'Dynamic car listing catalog with multi-attribute filters',
      'Interactive date-range booking and reservation system',
      'Customer authentication and trip history dashboard',
      'High-speed image upload & optimization with ImageKit',
      'Fleet inventory management and rental status tracking',
      'Mobile-first responsive interface with intuitive UX'
    ],
    demoUrl: 'https://driveeasy-rentals.vercel.app',
    githubUrl: 'https://github.com/aadil-info',
    databaseInfo: 'MongoDB (Collections: Users, Vehicles, Bookings, Reviews, Payments)',
  },
  {
    id: 'tms',
    title: 'Task Management System',
    badge: 'Enterprise Productivity',
    subtitle: 'Interactive Kanban Board & Team Collaboration System',
    description: 'A robust task management suite with drag-and-drop Kanban workflow, granular task CRUD operations, team assignments, deadline trackers, and a structured relational MySQL schema for enterprise consistency.',
    image: tmsPreviewImg,
    tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
    features: [
      'Fluid drag-and-drop Kanban board (To-Do, In-Progress, Done)',
      'Granular Task CRUD with priorities, tags, and deadlines',
      'Secure user registration & login via JWT authorization',
      'Team workspace collaboration and task assignment',
      'Normalized relational MySQL schema with foreign key constraints',
      'Responsive design with light/dark workspace styling'
    ],
    demoUrl: 'https://flowsync-tms.vercel.app',
    githubUrl: 'https://github.com/aadil-info',
    databaseInfo: 'MySQL (Relational Tables: users, tasks, columns, sprints, audit_logs)',
  },
];

export default function FeaturedProjects({ onSelectProject }) {
  return (
    <section id="projects" className="py-24 bg-white border-t border-[#ECECEC] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8FF] text-[#6D3FEF] text-xs font-bold uppercase tracking-wider mb-3">
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
              Things I've built.
            </h2>
            <p className="text-sm sm:text-base text-[#666666] mt-2">
              Production-ready web applications engineered with clean component architecture, scalable APIs, and real-world database design.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-semibold text-[#888888]">
            3 Featured Case Studies
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-[#FAFAFC] hover:bg-white rounded-3xl sm:rounded-[2.5rem] border border-[#EAEAEA] hover:border-[#D6C7FE] shadow-soft hover:shadow-soft-lg p-6 sm:p-8 lg:p-10 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Visual Preview Side (Large image container with hover zoom) */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#E8E8E8] shadow-sm group-hover:shadow-soft transition-all duration-300">
                    
                    {/* Browser-style address mock topbar */}
                    <div className="px-4 py-2.5 bg-[#F6F6F9] border-b border-[#EAEAEA] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <div className="text-[11px] font-mono text-[#777777] bg-white px-3 py-0.5 rounded-md border border-[#E5E5E5] truncate max-w-[220px]">
                        {project.domain || project.title.toLowerCase().replace(/\s+/g, '-') + '.app'}
                      </div>
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-xs text-[#6D3FEF] hover:text-[#592BD9] font-medium flex items-center gap-1 cursor-pointer"
                        title="Expand Preview"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Image Preview with gentle hover zoom */}
                    <div 
                      className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                      onClick={() => onSelectProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      
                      {/* Subtle hover overlay button */}
                      <div className="absolute inset-0 bg-[#6D3FEF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <span className="px-4 py-2 rounded-full bg-white/95 text-[#6D3FEF] text-xs font-bold shadow-soft flex items-center gap-1.5">
                          <Eye className="w-4 h-4" />
                          <span>View Architecture & Specs</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details Side */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEE8FF] text-[#6D3FEF]">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#6D3FEF] mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Features Bullet List */}
                  <div className="mb-6 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#888888] mb-1">
                      Key Capabilities:
                    </div>
                    {project.features.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[#333333]">
                        <Check className="w-3.5 h-3.5 text-[#6D3FEF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-[#E4E4E4] text-[#444444]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#6D3FEF] hover:bg-[#592BD9] text-white text-xs font-bold shadow-soft hover:shadow-soft-lg active:scale-95 transition-all group/btn"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>

                    <a
                      href={project.githubUrl || 'https://github.com/aadil-info'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F9F8FD] text-[#111111] hover:text-[#6D3FEF] text-xs font-bold border border-[#E0E0E0] hover:border-[#D6C7FE] shadow-sm active:scale-95 transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 text-[#888888]" />
                    </a>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center text-xs font-bold text-[#6D3FEF] hover:text-[#592BD9] px-2 py-1"
                    >
                      <span>Details & DB</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

