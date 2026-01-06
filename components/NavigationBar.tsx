import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GeneratedProfileImage from './GeneratedProfileImage';

const NavigationBar: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<'case-studies' | 'experience' | null>('case-studies');

  useEffect(() => {
    if (pathname.startsWith('/project/')) {
      setActiveSection('case-studies');
      return;
    }

    if (pathname !== '/') {
      setActiveSection(null);
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as any);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = ['case-studies', 'experience'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleScroll = (id: string) => {
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isCaseStudyActive = activeSection === 'case-studies' || pathname.startsWith('/project/');

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/70 backdrop-blur-2xl border border-black/5 p-1.5 rounded-full shadow-2xl flex items-center gap-1">
        <button 
          onClick={() => handleScroll('case-studies')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
            isCaseStudyActive 
              ? 'bg-[#111111] text-white shadow-lg' 
              : 'text-[#6B7280] hover:text-[#111111]'
          }`}
        >
          <GeneratedProfileImage className="w-5 h-5 rounded-full ring-1 ring-black/10" />
          Work
        </button>
        <button 
          onClick={() => handleScroll('experience')}
          className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
            pathname === '/' && activeSection === 'experience' 
              ? 'bg-[#111111] text-white shadow-lg' 
              : 'text-[#6B7280] hover:text-[#111111]'
          }`}
        >
          About
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;