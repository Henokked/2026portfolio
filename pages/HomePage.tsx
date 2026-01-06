import React, { useEffect, useState } from 'react';
import { CASE_STUDIES, EXPERIENCES, EDUCATION } from '../constants';
import CaseStudyCard from '../components/CaseStudyCard';
import ExperienceCard from '../components/ExperienceCard';
import InfiniteSlider from '../components/InfiniteSlider';
import GeneratedProfileImage from '../components/GeneratedProfileImage';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`max-w-[1400px] mx-auto px-6 py-20 sm:py-32 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="mb-48 space-y-16 stagger-in max-w-5xl px-2">
        <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-12">
          <div className="space-y-8 flex-1" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-[#111111] leading-[0.9] text-gradient">Henok Edmealem</h1>
            <p className="text-xl sm:text-3xl text-[#6B7280] font-semibold tracking-tight">Product Designer & UI/UX Designer </p>
          </div>
          <div className="relative group" style={{ animationDelay: '0s' }}>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[3rem] opacity-10 group-hover:opacity-20 transition duration-700 blur-xl"></div>
            <GeneratedProfileImage 
              className="relative w-40 h-40 rounded-[2.8rem] shadow-xl ring-1 ring-black/5 transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center" style={{ animationDelay: '0.2s' }}>
          <Badge icon="UI" text="Interface Design" />
          <Badge icon="UX" text="User Experience" />
          <Badge icon="✨" text="Design Systems" />
          <Badge icon="⚡" text="Product design" />
        </div>

        <div className="max-w-3xl space-y-8" style={{ animationDelay: '0.3s' }}>
          <p className="text-3xl sm:text-4xl leading-snug font-regular text-[#111111]/90 tracking-tight">
            I craft digital products that feel as good as they look. Specializing in high-performance SaaS, Fintech, and complex systems design.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-6" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3 px-6 py-3 bg-white border border-black/5 shadow-sm rounded-full text-sm font-bold text-[#111111]/80">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.3)]"></span>
            Available for selected projects
          </div>
        </div>
      </section>

      {/* Case Studies - Stacking Effect */}
      <section id="case-studies" className="space-y-8 mb-80 scroll-mt-32 px-2">
        <div className="border-b border-black/5 pb-8 mb-20 flex items-baseline justify-between">
           <h2 className="text-xs font-black uppercase tracking-[0.4em] text-black/30">Selected Product Work</h2>
           <span className="text-[10px] font-black text-black/20 tracking-[0.3em] uppercase">Scroll down</span>
        </div>

        <div className="relative space-y-8">
          {CASE_STUDIES.map((project, index) => (
             <CaseStudyCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-24 scroll-mt-32 max-w-6xl mx-auto px-2">
        <div className="flex items-center gap-6 mb-8">
          <div className="p-5 bg-white border border-black/5 rounded-3xl shadow-sm">
             <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
             </svg>
          </div>
          <h2 className="text-5xl font-black text-[#111111] tracking-tighter">Career Path</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="premium-card p-14 rounded-[3rem] space-y-12 flex flex-col justify-between hover:bg-gray-50/50 transition-colors">
              <div className="space-y-10">
                <h3 className="text-3xl font-black text-[#111111] tracking-tight">Education</h3>
                <div className="space-y-8">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="space-y-2 group/edu">
                      <p className="text-lg font-black text-[#111111]/95 group-hover/edu:text-blue-600 transition-colors">{edu.degree}</p>
                      <p className="text-[11px] text-[#6B7280] uppercase tracking-[0.2em] font-bold">{edu.school}{edu.year ? ` • ${edu.year}` : ''}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white border border-black/5 p-14 rounded-[3rem] shadow-sm text-[#111111] flex flex-col justify-center space-y-10 relative overflow-hidden group">
               <p className="text-4xl font-black leading-[1.1] relative z-10 text-gradient tracking-tighter">"Design is not just what it looks like. Design is how it works."</p>
               <p className="text-[#6B7280] font-black tracking-[0.4em] uppercase text-xs relative z-10 opacity-60">— Steve Jobs</p>
               <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-blue-500/5 blur-[100px] rounded-full transition-transform duration-1000 group-hover:scale-150"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Slider */}
      <section className="full-width -mx-[calc((100vw-100%)/2)] w-screen overflow-hidden mb-20 opacity-90 hover:opacity-100 transition-opacity duration-1000">
        <div className="border-t border-black/5 pt-12 mb-6 flex justify-center">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/10">Sample works</span>
        </div>
        <InfiniteSlider />
      </section>
    </div>
  );
};

const Badge: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-3 px-6 py-3 bg-white border border-black/5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-[#111111]/80 hover:bg-gray-50 hover:border-blue-500/20 transition-all cursor-default shadow-sm">
    <span className="w-7 h-7 bg-gray-50 text-[#111111] text-[10px] font-black rounded-xl flex items-center justify-center border border-black/5">{icon}</span>
    {text}
  </div>
);

export default HomePage;