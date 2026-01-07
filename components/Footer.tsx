import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNav = (id: string) => {
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="max-w-4xl mx-auto px-4 py-8 sm:py-12 border-t border-black/5 mt-6 space-y-8 scroll-mt-24 pb-24 sm:pb-12">
      <div className="flex justify-center">
        <div role="navigation" aria-label="Footer social links" className="flex flex-wrap items-center gap-3 justify-center">
          {SOCIAL_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-white border border-black/5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#111111] hover:border-blue-600/30 hover:bg-blue-50/50 transition-all group shadow-sm"
            >
              <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                <svg className="w-3.5 h-3.5 rotate-[-45deg] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="flex flex-col items-center sm:items-start leading-tight">
                  <span className="text-[11px] font-black uppercase tracking-widest">{link.name}</span>
                  {link.name === 'Phone' && (
                    <span className="text-[10px] text-[#6B7280] normal-case">+251 920 958 682</span>
                  )}
                  {link.name === 'Email' && (
                    <span className="text-[10px] text-[#6B7280] normal-case">henok0ed@gmail.com</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center space-y-6">
        <div className="space-y-2">
          <p className="text-xl sm:text-2xl font-black tracking-tight text-[#111111]">Henok Edmealem</p>
          <p className="text-[10px] sm:text-sm text-[#6B7280] font-bold tracking-widest uppercase">UI.UX • Product Designer • Ethiopia</p>
        </div>
        <p className="text-sm sm:text-sm font-medium text-[#4B5563] max-w-full sm:max-w-sm mx-auto leading-relaxed">
          Crafting intuitive and engaging user interfaces. Dedicated to continuous improvement through user-centric research and engineering-focused design.
        </p>

        {/* Mobile quick nav for Work/About */}
        <div className="flex items-center gap-3 justify-center mt-4 sm:hidden">
          <button onClick={() => handleNav('case-studies')} className="px-4 py-2 bg-[#111111] text-white rounded-full text-sm font-black">Work</button>
          <button onClick={() => handleNav('experience')} className="px-4 py-2 border border-black/5 rounded-full text-sm font-black">About</button>
        </div>

        <div className="pt-6">
          <p className="text-[10px] text-black/20 uppercase tracking-[0.3em] font-bold">© 2025 Henok Edmealem</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;