import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="max-w-4xl mx-auto px-6 py-12 border-t border-black/5 mt-6 space-y-8 scroll-mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-wrap justify-center gap-4">
          {SOCIAL_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-black/5 rounded-full text-xs font-black uppercase tracking-widest text-[#111111] hover:border-blue-600/30 hover:bg-blue-50/50 transition-all group shadow-sm"
            >
              <svg className="w-3.5 h-3.5 rotate-[-45deg] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 text-2xl hover:scale-110 transition-transform cursor-default" title="Hello!">
          👋
        </div>
      </div>

      <div className="text-center space-y-8">
        <div className="space-y-3">
          <p className="text-2xl font-black tracking-tight text-[#111111]">Henok Edmealem</p>
          <p className="text-sm text-[#6B7280] font-bold tracking-widest uppercase">UI.UX • Product Designer • Ethiopia</p>
        </div>
        <p className="text-sm font-medium text-[#4B5563] max-w-sm mx-auto leading-relaxed">
          Crafting intuitive and engaging user interfaces. Dedicated to continuous improvement through user-centric research and engineering-focused design.
        </p>
        <div className="pt-8">
          <p className="text-[10px] text-black/20 uppercase tracking-[0.3em] font-bold">© 2025 Henok Edmealem</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;