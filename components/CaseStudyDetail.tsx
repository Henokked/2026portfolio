import React from 'react';
import { CaseStudy } from '../types';

interface Props {
  project: CaseStudy;
}

const CaseStudyDetail: React.FC<Props> = ({ project }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="space-y-12">


      {/* Metadata grid and Project Overview + Problem/Solution columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="premium-card p-8 rounded-[2rem]">
          <div className="space-y-4">
            <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest font-black">Industry</p>
            <p className="font-black text-[#111111]">{project.industry ?? 'Lifestyle'}</p>

            <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest font-black">Date</p>
            <p className="font-black text-[#111111]">{project.date ?? 'Aug 2025'}</p>

            <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest font-black">Tools</p>
            <p className="font-black text-[#111111]">{(project.tools ?? ['Figma', 'Photoshop', 'Illustrator']).join(', ')}</p>

            <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest font-black">Services</p>
            <p className="font-black text-[#111111]">{(project.services ?? ['Strategy Planning', 'Dashboard', 'Tracking']).join(', ')}</p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="premium-card p-10 rounded-[2rem]">
            <h3 className="text-2xl font-black">Project Overview</h3>
            <p className="text-base text-[#4B5563] mt-4">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="premium-card p-8 rounded-[2rem]">
              <h4 className="font-black">Problem Statement</h4>
              <p className="text-sm text-[#4B5563] mt-3"> In the modern fast-paced tech landscape, product teams are often hindered by "tool fatigue." Most teams rely on a fragmented ecosystem of disconnected apps one for design, another for task tracking, and a third for communication.</p>
            </div>
            <div className="premium-card p-8 rounded-[2rem]">
              <h4 className="font-black">Solution</h4>
              <p className="text-sm text-[#4B5563] mt-3">ProTask was designed as a unified, high-visibility hub that centralizes the entire product lifecycle into one intuitive interface. By acting as the "operational glue" for agile teams, ProTask eliminates the need for constant tool-switching.</p>
            </div>
          </div>
        </div>
      </div>





      {/* Project Gallery (2x2, large, opens in same tab) */}
      <div className="space-y-4">
        <h3 className="font-black text-2xl">Project Gallery</h3>
        <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
          {(() => {
            const gallery = project.gallery ?? ['./images/Detail/bento.png','./images/Detail/footer.jpg','./images/Detail/card.jpg', project.image];
            return gallery.map((src, i) => (
              <button key={i} type="button" onClick={() => { setCurrentImage(src); setModalOpen(true); }} className="block rounded-lg overflow-hidden bg-gray-50 border border-black/5 hover:scale-105 transition-transform cursor-pointer h-96 focus:outline-none">
                <img src={src} alt={`gallery ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ));
          })()}
        </div>

        {modalOpen && currentImage && (
          <div onClick={() => setModalOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full">
              <button onClick={() => setModalOpen(false)} className="absolute right-0 top-0 m-2 text-white text-3xl leading-none">&times;</button>
              <img src={currentImage} alt="full-size" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
            </div>
          </div>
        )}

        {/* Dashboard caption (if provided) */}
        {project.dashboardCaption && (
          <div className="mt-6 max-w-5xl mx-auto">
            <div className="premium-card p-6 rounded-[1rem]">
              <h4 className="font-black">Project Overview</h4>
              <p className="text-sm text-[#4B5563] mt-3">{project.dashboardCaption}</p>
            </div>
          </div>
        )}
      </div>

      {/* Key features & Impact */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white border border-black/5 rounded-xl">
          <h4 className="font-black">Key Features</h4>
          <ul className="mt-4 list-disc list-inside text-sm text-[#4B5563] space-y-2">
            {(project.features ?? [
              'Daily reminders & personalized content',
              'Community-driven sharing and bookmarks',
              'Cross-platform accessible UI'
            ]).map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
        <div className="p-6 bg-white border border-black/5 rounded-xl">
          <h4 className="font-black">Impact</h4>
          <ul className="mt-4 list-disc list-inside text-sm text-[#4B5563] space-y-2">
            {(project.impact ?? [
              '4.6+ rating across app stores',
              'Increased daily active use by 3x',
              'Higher retention via personalized hooks'
            ]).map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <div className="premium-card p-8 rounded-[2rem]">
        <h4 className="font-black">Conclusion</h4>
        <p className="text-sm text-[#4B5563] mt-3">{project.conclusion ?? 'The project demonstrates how focused research and design can transform a simple utility into a meaningful daily habit. Emphasis on personalization and community features were key to adoption.'}</p>
      </div>
    </section>
  );
};

export default CaseStudyDetail;
