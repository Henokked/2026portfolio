import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';

interface CaseStudyGridCardProps {
  project: CaseStudy;
  /** One-based position in the list (1 = first project). */
  index: number;
}

const CaseStudyGridCard: React.FC<CaseStudyGridCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <Link
      to={`/project/${project.id}`}
      className="group block w-full h-full"
      aria-label={`Open ${project.title} case study`}
    >
      <div
        ref={cardRef}
        className={`reveal-on-scroll ${isVisible ? 'visible' : ''}`}
      >
        <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#F4F4F7] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out flex flex-col group-hover:-translate-y-1 group-hover:border-black/20 group-hover:shadow-2xl">
          {/* Thumbnail - visible, dominant portion of the card */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#E9E9EE]">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover will-change-transform transition-transform duration-700 ease-out group-hover:scale-[1.08]"
            />
            {/* Gradient scrim for legibility on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Index badge */}
            <div className="absolute top-4 left-4 flex items-center justify-center w-11 h-11 rounded-full border border-black/15 bg-white/80 backdrop-blur-sm text-[11px] font-black text-[#111111]/70 transition-colors duration-500 group-hover:bg-black group-hover:text-white">
              {String(index).padStart(2, '0')}
            </div>

            {/* Hover arrow */}
            <div className="absolute bottom-4 right-4 flex items-center justify-center w-11 h-11 rounded-full border border-black/15 bg-white/80 backdrop-blur-sm text-[#111111]/60 transition-all duration-500 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-black group-hover:text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14M5 12l7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Card body - fills remaining height, greyish background */}
          <div className="flex-1 min-h-0 p-6 sm:p-7 bg-gradient-to-b from-[#F4F4F7] to-[#ECECF1] border-t border-black/5 flex flex-col justify-center space-y-3.5">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#111111] leading-[1.05] transition-colors duration-500 group-hover:text-blue-600 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm text-[#6B7280] font-medium leading-relaxed line-clamp-2">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white/70 border border-black/5 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] text-[#4B5563]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyGridCard;