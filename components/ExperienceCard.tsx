import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="premium-card bg-[#F4F4F7] p-10 rounded-[2.5rem] space-y-10 border-none shadow-sm">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-2xl font-black text-[#111111]">{experience.company}</h3>
          <p className="text-sm text-[#6B7280] font-bold tracking-wider">{experience.period}</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-[11px] text-[#9CA3AF] uppercase tracking-[0.1em] font-bold mb-3">Role</p>
          <div className="space-y-1">
            <p className="text-lg font-black text-[#111111]">{experience.role}</p>
            <p className="text-sm font-medium text-[#4B5563]">{experience.type}</p>
          </div>
        </div>

        <div>
          <p className="text-[11px] text-[#9CA3AF] uppercase tracking-[0.1em] font-bold mb-3">Key Impact</p>
          <div className="flex flex-wrap gap-x-4 text-sm font-semibold text-[#4B5563]">
            {experience.projects.map((p, i) => (
              <span key={i} className="flex items-center gap-2">
                {p}
                {i < experience.projects.length - 1 && <span className="text-black/10">•</span>}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] text-[#9CA3AF] uppercase tracking-[0.1em] font-bold mb-3">Discipline</p>
          <div className="flex flex-wrap gap-2">
            {experience.scope.map((s, i) => (
              <span key={i} className="text-[10px] bg-white border border-black/5 px-3 py-1.5 rounded-lg text-[#111111] font-bold uppercase tracking-wider shadow-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;