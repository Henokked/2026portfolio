import React from 'react';
import { CaseStudy } from '../types';

interface Props {
  project: CaseStudy;
}

const CaseStudyDetail: React.FC<Props> = ({ project }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<'left' | 'right'>('right');

  const gallery = React.useMemo(
    () => project.gallery ?? ['./images/Detail/bento.png','./images/Detail/footer.jpg','./images/Detail/card.jpg', project.image],
    [project]
  );

  // Reset to first image whenever the project changes
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [project.id]);

  const nextImage = React.useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  }, [gallery.length]);

  const prevImage = React.useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [nextImage, prevImage]);

  // Lock the background page scroll while the full-screen viewer is open
  React.useEffect(() => {
    if (modalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = originalOverflow; };
    }
  }, [modalOpen]);

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





      {/* Project Gallery (carousel with left/right swipe buttons) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-black text-2xl">Project Gallery</h3>
          <span className="text-sm font-bold text-[#9CA3AF]">{currentIndex + 1} / {gallery.length}</span>
        </div>

        <div className="relative max-w-5xl mx-auto group/gal">
          {/* Prev / Prev button */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-[#111111] text-2xl shadow-xl border border-black/10 hover:bg-white hover:scale-110 active:scale-95 transition-transform cursor-pointer focus:outline-none"
          >
            &#8249;
          </button>

          {/* Current large image */}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="block w-full rounded-2xl overflow-hidden bg-gray-50 border border-black/5 focus:outline-none"
          >
            <img
              key={gallery[currentIndex]}
              src={gallery[currentIndex]}
              alt={`gallery ${currentIndex + 1}`}
              className={`w-full h-64 sm:h-96 md:h-[32rem] object-cover transition-transform duration-500 ${direction === 'right' ? 'gallery-slide-right' : 'gallery-slide-left'}`}
            />
          </button>

          {/* Next / swipe button */}
          <button
            type="button"
            aria-label="Next image"
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-[#111111] text-2xl shadow-xl border border-black/10 hover:bg-white hover:scale-110 active:scale-95 transition-transform cursor-pointer focus:outline-none"
          >
            &#8250;
          </button>

          {/* Thumbnail indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-3 rounded-full bg-black/40 backdrop-blur px-4 py-2">
            {gallery.map((src, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setCurrentIndex(i)}
                className={`w-12 h-9 rounded-md overflow-hidden border-2 transition-all cursor-pointer focus:outline-none ${
                  i === currentIndex
                    ? 'border-white scale-110 shadow-lg'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={src} alt={`gallery thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {modalOpen && gallery[currentIndex] && (
          <div
            onClick={() => setModalOpen(false)}
            onWheel={(e) => e.preventDefault()}
            onTouchMove={(e) => e.preventDefault()}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 touch-none overscroll-none select-none"
          >
            <div onClick={(e) => e.stopPropagation()} className="relative w-full h-full flex items-center justify-center">
              {/* Close button */}
              <button onClick={() => setModalOpen(false)} aria-label="Close image" className="absolute top-4 md:top-6 right-4 md:right-6 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#111111] text-3xl leading-none shadow-2xl hover:bg-gray-100 hover:scale-110 active:scale-95 transition-transform cursor-pointer">&times;</button>

              {/* Prev / swipe button */}
              <button type="button" aria-label="Previous image" onClick={prevImage} className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white text-[#111111] text-3xl shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer">&#8249;</button>

              <img
                key={gallery[currentIndex]}
                src={gallery[currentIndex]}
                alt="full-screen"
                className={`max-w-full max-h-full object-contain ${direction === 'right' ? 'gallery-slide-right' : 'gallery-slide-left'}`}
              />

              {/* Next / swipe button */}
              <button type="button" aria-label="Next image" onClick={nextImage} className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white text-[#111111] text-3xl shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer">&#8250;</button>

              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-white text-lg font-bold bg-black/50 px-4 py-2 rounded-full">{currentIndex + 1} / {gallery.length}</p>
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
