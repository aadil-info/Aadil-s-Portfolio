import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import Logo from './Logo';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Freelance', href: '#freelance' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'freelance', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-md shadow-soft border border-[#E8E8E8] py-2.5 px-4 sm:px-6'
              : 'bg-white/80 backdrop-blur-sm border border-[#EAEAEA]/80 py-3.5 px-5 sm:px-7 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleScrollTo(e, '#hero')}
              className="flex items-center gap-2 group cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <Logo />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 bg-[#F5F5F7]/80 rounded-full p-1 border border-[#EBEBEB]">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-[#6D3FEF] shadow-sm'
                        : 'text-[#555555] hover:text-[#111111] hover:bg-white/70'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Right Action: Let's Talk */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="relative inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#6D3FEF] hover:bg-[#592BD9] rounded-full transition-all duration-200 shadow-sm hover:shadow-soft active:scale-95 group"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#333333] hover:text-[#111111] hover:bg-[#F2F2F5] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 bg-white/95 backdrop-blur-xl border border-[#E8E8E8] rounded-3xl shadow-soft-lg p-6 md:hidden"
          >
            <div className="flex flex-col space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#888888] px-3 pb-1 border-b border-[#F0F0F0]">
                Navigation
              </div>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="px-3 py-2.5 rounded-xl text-sm font-semibold text-[#222222] hover:bg-[#F5F3FF] hover:text-[#6D3FEF] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#888888]" />
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#6D3FEF] text-white text-sm font-semibold shadow-sm hover:bg-[#592BD9] transition-all"
                >
                  <span>Let's Talk</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


