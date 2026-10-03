import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#ECECEC] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#F0F0F0]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#6D3FEF] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                AM
              </div>
              <span className="text-lg font-extrabold text-[#111111] tracking-tight">
          
              </span>
            </div>
            <p className="text-xs font-semibold text-[#6D3FEF] uppercase tracking-wider">
              Full Stack Developer
            </p>
            <p className="text-xs text-[#777777] mt-1 max-w-sm">
              Building scalable, high-performance web applications with clean architecture and modern user experience.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-[#444444]">
            <a href="#hero" className="hover:text-[#6D3FEF] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#6D3FEF] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#6D3FEF] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#6D3FEF] transition-colors">Skills</a>
            <a href="#experience" className="hover:text-[#6D3FEF] transition-colors">Experience</a>
            <a href="#freelance" className="hover:text-[#6D3FEF] transition-colors">Freelance</a>
            <a href="#contact" className="hover:text-[#6D3FEF] transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/aadil-info"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-[#F5F5F7] hover:bg-[#6D3FEF] text-[#444444] hover:text-white transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammad-aadil-mansuri/?isSelfProfile=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-[#F5F5F7] hover:bg-[#6D3FEF] text-[#444444] hover:text-white transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:aadilmansuri848@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xl bg-[#F5F5F7] hover:bg-[#6D3FEF] text-[#444444] hover:text-white transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#EEE8FF] hover:bg-[#6D3FEF] text-[#6D3FEF] hover:text-white transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#888888] gap-4">
          <p>© 2026 Aadil  All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Designed & engineered with precision</span>
            <span className="text-[#6D3FEF] font-mono"></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
