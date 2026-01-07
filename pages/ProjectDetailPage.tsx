import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import CaseStudyDetail from '../components/CaseStudyDetail';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams();
  const project = CASE_STUDIES.find(p => p.id === id) || CASE_STUDIES[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:py-24 md:py-32 space-y-24">
      {/* Header Navigation */}
      <nav>
        <Link to="/" className="inline-flex items-center gap-3 text-[#6B7280] hover:text-[#111111] transition-colors font-black text-[10px] uppercase tracking-[0.2em] group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Work
        </Link>
      </nav>

      {/* Project Title & Hero */}
      <section className="space-y-16">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-gray-50 border border-black/5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#6B7280]">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-[#111111] leading-none text-gradient">{project.title}</h1>
          <p className="text-lg sm:text-2xl text-[#4B5563] leading-snug font-medium max-w-3xl">
            {project.subtitle}
          </p>
        </div>

        <div className="rounded-[3.5rem] overflow-hidden bg-gray-100 border border-black/5 aspect-[16/9] shadow-2xl">
           <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
        </div>
      </section>

      <CaseStudyDetail project={project} />

      {/* Related Projects */}
      <section className="space-y-16 pb-20">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-black/30">Continue Exploring</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {CASE_STUDIES.filter(p => p.id !== id).slice(0, 2).map(p => (
            <Link key={p.id} to={`/project/${p.id}`} className="group premium-card p-12 rounded-[3.5rem] block bg-white border-none shadow-sm hover:shadow-2xl transition-all duration-700">
              <div className="space-y-8">
                 <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gray-50 border border-black/5">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                 </div>
                 <div className="space-y-3">
                    <h3 className="text-3xl font-black text-[#111111] group-hover:text-blue-600 transition-colors tracking-tight">{p.title}</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6B7280]">{p.caption}</p>
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;