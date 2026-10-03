import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Database, CheckCircle2, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectDetailModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
        
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-soft-lg border border-[#E5E5E5] z-10 my-auto overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="px-6 py-4 bg-[#F8F7FD] border-b border-[#ECE8F7] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6D3FEF]" />
              <h2 className="text-sm font-bold text-[#111111]">
                {project.title}
              </h2>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-[#EAE5F8] text-[#555555] hover:text-[#111111] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subheader Navigation Tabs */}
          <div className="px-6 pt-3 pb-2 bg-white border-b border-[#F0F0F0] flex gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'overview'
                  ? 'bg-[#6D3FEF] text-white shadow-xs'
                  : 'text-[#666666] hover:bg-[#F5F5F7]'
              }`}
            >
              Overview & Image
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'architecture'
                  ? 'bg-[#6D3FEF] text-white shadow-xs'
                  : 'text-[#666666] hover:bg-[#F5F5F7]'
              }`}
            >
              Database & Architecture
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'features'
                  ? 'bg-[#6D3FEF] text-white shadow-xs'
                  : 'text-[#666666] hover:bg-[#F5F5F7]'
              }`}
            >
              All Features ({project.features.length})
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden border border-[#E8E8E8] shadow-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{project.subtitle}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#F5F3FF] text-[#6D3FEF] text-xs font-semibold border border-[#E5DBFD]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-[#FAFAFC] border border-[#EAEAEA]">
                  <div className="flex items-center gap-2 mb-2 text-[#6D3FEF]">
                    <Database className="w-5 h-5" />
                    <h3 className="text-sm font-bold text-[#111111]">Database Design & Storage</h3>
                  </div>
                  <p className="text-xs text-[#555555] mb-4">
                    {project.databaseInfo}
                  </p>

                  <div className="p-3 bg-white rounded-xl border border-[#EDEDED] font-mono text-xs text-[#333333]">
                    <div className="text-[#6D3FEF] font-bold mb-1">// Schema Highlights</div>
                    <div>• Normalized structure with indexed foreign/reference keys</div>
                    <div>• Role-based authentication tokens with expiration & refresh rotation</div>
                    <div>• High-efficiency queries with pagination and search indices</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAFC] border border-[#EAEAEA]">
                  <div className="flex items-center gap-2 mb-2 text-[#6D3FEF]">
                    <Cpu className="w-5 h-5" />
                    <h3 className="text-sm font-bold text-[#111111]">System Architecture</h3>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Designed as a decoupled MERN application. The frontend React single-page application interacts via asynchronous axios instances with centralized error handling. The Express.js backend employs modular controllers, validation middlewares, and service layers connected directly to {project.id === 'tms' ? 'MySQL connection pool' : 'MongoDB Atlas cluster'}.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-[#111111] mb-2">Complete Feature Specifications:</h3>
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAFAFC] border border-[#EDEDED] text-xs text-[#333333]">
                    <CheckCircle2 className="w-4 h-4 text-[#6D3FEF] shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-[#FAFAFA] border-t border-[#ECECEC] flex items-center justify-between text-xs">
            <a
              href={project.githubUrl || 'https://github.com/aadil-info'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#555555] hover:text-[#6D3FEF] font-semibold"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Source on GitHub</span>
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white border border-[#DDD] hover:bg-[#F5F5F7] font-semibold text-[#444444]"
              >
                Close
              </button>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#6D3FEF] hover:bg-[#592BD9] text-white font-bold transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>Live Project Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}