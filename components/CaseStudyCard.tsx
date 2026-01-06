import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  project: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const stickyTop = 80 + (index * 32);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`sticky w-full mb-32 reveal-on-scroll ${isVisible ? 'visible' : ''}`}
      style={{ top: `${stickyTop}px`, zIndex: index + 1 }}
    >
      <div className="bg-[#FFFFFF] border border-black/5 rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.06)] group hover:border-black/10 transition-all duration-700 ease-out">
        <div className="flex flex-col lg:flex-row min-h-[620px]">
          {/* Content Left */}
          <div className="flex-[1.2] p-10 sm:p-16 lg:p-20 flex flex-col justify-center space-y-12 bg-gradient-to-br from-[#FFFFFF] via-[#FAFAFA] to-transparent">
            <div className="space-y-6">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                {project.caption || 'Case Study'}
              </span>
              <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.05]">
                {project.title}
              </h3>
              <p className="text-lg sm:text-xl text-[#4B5563] leading-relaxed max-w-xl font-medium subtitle-font">
                {project.subtitle}
              </p>
              
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-gray-50 border border-black/5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-[#4B5563]">
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="flex gap-16 border-t border-black/5 pt-10">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="space-y-1 group/metric">
                    <p className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tighter transition-transform group-hover/metric:scale-105 duration-500 origin-left">
                      {metric.value}
                    </p>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-6">
              <Link 
                to={`/project/${project.id}`}
                className="group/btn relative inline-flex items-center justify-center px-12 py-5 bg-[#111111] text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 hover:bg-blue-600 transform active:scale-95 shadow-lg"
              >
                <span className="relative z-10">View Case Study</span>
              </Link>
            </div>
          </div>

          {/* Mockup Visual Right */}
          <div className="flex-1 relative bg-gray-100 overflow-hidden group/visual">
             <Link to={`/project/${project.id}`} className="block w-full h-full relative">
               <div className="w-full h-full overflow-hidden">
                 <img 
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-full object-cover mockup-zoom transition-transform duration-1000"
                 />
               </div>
               
               {/* Lighting Overlays */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-40"></div>
               
               {/* Hover Text Reveal */}
               <div className="absolute bottom-10 right-10 flex items-center gap-2 opacity-0 group-hover/visual:opacity-100 transition-all duration-700 translate-y-4 group-hover/visual:translate-y-0">
                  <span className="text-[10px] font-black text-[#111111] uppercase tracking-widest bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-black/5">Explore Project</span>
               </div>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;