import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import FeaturedProjects from './components/FeaturedProjects';
import FreelanceSection from './components/FreelanceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import Toast from './components/Toast';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    triggerToast(`Selected "${service.title}"! Scroll down to send inquiry.`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans antialiased selection:bg-[#EEE8FF] selection:text-[#6D3FEF] flex flex-col relative">
      {/* Floating Sticky Navigation Bar */}
      <Navbar onOpenContact={() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenResume={() => setResumeModalOpen(true)} />

        {/* Stats Section */}
        <StatsSection />

        {/* About Section */}
        <AboutSection />

        {/* Featured Projects Section */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Skills Section */}
        <SkillsSection />

        {/* Work Experience Timeline */}
        <ExperienceSection />

        {/* Freelance Services Section */}
        <FreelanceSection onSelectService={handleSelectService} />

        {/* Contact Section */}
        <ContactSection 
          onOpenResume={() => setResumeModalOpen(true)} 
          onShowToast={triggerToast} 
          preselectedService={selectedService}
          onClearService={() => setSelectedService(null)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />

      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Toast Notification */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage('')} 
      />
    </div>
  );
}
