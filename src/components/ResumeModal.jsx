import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

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
          {/* Modal Header */}
          <div className="px-6 py-4 bg-[#F8F7FD] border-b border-[#ECE8F7] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6D3FEF]" />
              <h2 className="text-sm font-bold text-[#111111]">Curriculum Vitae Preview • Mohammad Aadil Mansuri</h2>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#DDD] hover:border-[#6D3FEF] text-xs font-semibold text-[#333333] hover:text-[#6D3FEF] transition-all shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-xl hover:bg-[#EAE5F8] text-[#555555] hover:text-[#111111] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto print:p-0 space-y-8 text-[#111111] font-sans selection:bg-[#EEE8FF]">
            
            {/* Header info */}
            <div className="border-b border-[#EAEAEA] pb-6 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] mb-1">
                Mohammad Aadil Mansuri
              </h1>
              <div className="text-sm font-bold text-[#6D3FEF] mb-3">
                Full Stack Developer
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-[#555555]">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#6D3FEF]" />
                  +91-8955191317
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#6D3FEF]" />
                  aadilmansuri848@gmail.com
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#6D3FEF]" />
                  Bhilwara, Rajasthan
                </span>
                <a 
                  href="https://www.linkedin.com/in/aadil-mansuri/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-[#6D3FEF] hover:underline"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  linkedin.com/in/aadil-mansuri
                </a>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6D3FEF] border-b border-[#EEE8FF] pb-1 mb-2.5">
                Summary
              </h3>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                Full Stack Developer with hands-on experience building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in developing RESTful APIs, JWT authentication, database integration, responsive UI development, and Git-based workflows. Experienced in working on real-world projects, solving technical problems, and delivering scalable, user-focused web solutions.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6D3FEF] border-b border-[#EEE8FF] pb-1 mb-2.5">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <strong className="text-[#111111]">Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), BootStrap, React.js, Redux Toolkit, Tailwind CSS, Responsive Web Design
                </div>
                <div>
                  <strong className="text-[#111111]">Backend:</strong> Node.js, Express.js, RESTful APIs, JWT Authentication, RBAC, MVC
                </div>
                <div>
                  <strong className="text-[#111111]">Databases:</strong> MongoDB, Mongoose
                </div>
                <div>
                  <strong className="text-[#111111]">DevOps & Tools:</strong> Git, GitHub, CI/CD, Nginx, Linux, Postman, VS Code, npm, Vercel, Render, Netlify
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6D3FEF] border-b border-[#EEE8FF] pb-1 mb-3">
                Experience
              </h3>

              <div className="space-y-5">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold mb-1">
                    <span className="text-[#111111] text-sm font-extrabold">Frontend Developer Intern — Trounsoul Technologies</span>
                    <span className="text-[#6D3FEF]">Oct. 2025 – Mar. 2026 | Jaipur, Rajasthan — Remote</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#555555] space-y-1">
                    <li>Developed and maintained responsive web applications using HTML, CSS, JavaScript, and Bootstrap, focusing on user-friendly interfaces.</li>
                    <li>Worked on the development and maintenance of a Job Portal website, implementing frontend features and handling dynamic data using JSON.</li>
                    <li>Integrated Fetch API and third-party APIs and used Git & GitHub for version control and project development.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold mb-1">
                    <span className="text-[#111111] text-sm font-extrabold">Full Stack Developer Intern — ThinkNext Pvt. Ltd.</span>
                    <span className="text-[#6D3FEF]">June 2026 – August 2026 | Mohali, Chandigarh — On-site</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#555555] space-y-1">
                    <li>Developed an AI Interview Preparation Platform using React.js, Node.js, Express.js, and MongoDB.</li>
                    <li>Integrated OpenAI APIs to implement AI-powered mock interviews, feedback, and resume analysis features.</li>
                    <li>Implemented JWT authentication, RESTful APIs, dashboards, and responsive user interfaces.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6D3FEF] border-b border-[#EEE8FF] pb-1 mb-3">
                Projects
              </h3>
              
              <div className="space-y-4 text-xs">
                <div>
                  <span className="font-extrabold text-[#111111]">DriveEasy — Car Rental & Booking Platform</span>{' '}
                  <span className="text-[#6D3FEF] font-mono">(React.js, Node.js, Express.js, MongoDB, JWT, ImageKit, Tailwind CSS)</span>
                  <ul className="list-disc list-inside text-xs text-[#555555] mt-1 space-y-0.5">
                    <li>Developed a full-stack car rental platform using React.js, Node.js, Express.js, and MongoDB, enabling users to browse, search, filter, and book cars based on rental dates.</li>
                    <li>Implemented JWT-based authentication, role-based access, booking management, and date-overlap availability validation to prevent double bookings and ensure secure reservations.</li>
                    <li>Integrated ImageKit for optimized car image uploads and management, with a responsive React + Tailwind CSS interface and dedicated Admin Dashboard for managing cars and bookings.</li>
                  </ul>
                </div>

                <div>
                  <span className="font-extrabold text-[#111111]">IntervAi — AI Interview Preparation Platform</span>{' '}
                  <span className="text-[#6D3FEF] font-mono">(React.js, Node.js, Express.js, MongoDB, JWT, OpenAI API)</span>
                  <ul className="list-disc list-inside text-xs text-[#555555] mt-1 space-y-0.5">
                    <li>Developed a full-stack AI-powered mock interview platform using React.js, Node.js, Express.js, MongoDB, JWT, and OpenAI API.</li>
                    <li>Integrated OpenAI API to generate role-specific interview questions and provide AI-powered feedback based on candidate responses.</li>
                    <li>Implemented JWT authentication, RESTful APIs, user sessions, dashboard functionality, and an AI-powered resume analysis module.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6D3FEF] border-b border-[#EEE8FF] pb-1 mb-2.5">
                Education
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-bold text-[#111111]">Bachelor of Computer Applications (BCA) – Pursuing</span>
                  <span className="text-[#6D3FEF] font-semibold">2024 – 2027 | MDS University, Ajmer, Rajasthan</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[#555555]">
                  <span className="font-medium text-[#222222]">12th / Senior Secondary</span>
                  <span className="text-[#777777]">2023 – 2024 | Mahatma Gandhi School, Police Line, Bhilwara, Rajasthan</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer of modal */}
          <div className="p-4 bg-[#FAFAFA] border-t border-[#ECECEC] flex items-center justify-between text-xs">
            <span className="text-[#888888]">Direct contact: aadilmansuri848@gmail.com</span>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#6D3FEF] hover:bg-[#592BD9] text-white font-bold transition-all shadow-sm"
            >
              Download PDF / Print
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
