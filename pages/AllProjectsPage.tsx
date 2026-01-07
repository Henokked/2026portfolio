
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import CaseStudyCard from '../components/CaseStudyCard';

const AllProjectsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`max-w-6xl mx-auto px-4 py-12 sm:py-20 md:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <nav className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-[#86868b] hover:text-white transition-colors font-bold text-xs uppercase tracking-widest group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </nav>

      <header className="mb-20 space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-gradient">All Projects</h1>
        <p className="text-xl text-[#86868b] max-w-2xl">
          A collection of case studies focusing on B2B, Fintech, and complex systems design.
        </p>
      </header>

      {/* 2x3 Grid as requested */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mb-24">
        {/* Fix: Added index parameter and passed it as a prop to CaseStudyCard */}
        {CASE_STUDIES.slice(0, 6).map((project, index) => (
           <CaseStudyCard key={project.id} project={project} index={index} />
        ))}
      </section>

      <div className="text-center py-20 border-t border-white/10">
        <p className="text-[#86868b] text-sm">More projects coming soon...</p>
      </div>
    </div>
  );
};

export default AllProjectsPage;
