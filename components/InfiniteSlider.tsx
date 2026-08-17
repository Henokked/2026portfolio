import React from 'react';

const SLIDER_IMAGES = [
  '/images/carousel/money.jpg',
  '/images/carousel/sass.jpg',
   '/images/carousel/finance.jpg',
 '/images/carousel/dashboard.jpg',
 '/images/carousel/mobile.png',
  
];

const InfiniteSlider: React.FC = () => {
  const duplicatedImages = [...SLIDER_IMAGES, ...SLIDER_IMAGES];
  const [selectedSrc, setSelectedSrc] = React.useState<string | null>(null);

  // Lock the background page scroll while the full-screen preview is open
  React.useEffect(() => {
    if (selectedSrc) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = originalOverflow; };
    }
  }, [selectedSrc]);

  // Close the preview with the Escape key
  React.useEffect(() => {
    if (!selectedSrc) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedSrc(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedSrc]);

  return (
    <div className="relative overflow-hidden py-4 sm:py-6">
      <div className="animate-infinite-slider">
        {duplicatedImages.map((src, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedSrc(src)}
            className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[450px] px-4 group focus:outline-none"
            aria-label={`Open preview of UI Mockup ${idx + 1}`}
          >
            <div className="aspect-[16/10] rounded-[2rem] overflow-hidden bg-transparent border-0 cursor-pointer shadow-none transition-shadow duration-300 group-hover:shadow-2xl">
              <img 
                src={src} 
                alt={`UI Mockup ${idx}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Full-screen preview */}
      {selectedSrc && (
        <div
          onClick={() => setSelectedSrc(null)}
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 touch-none overscroll-none select-none"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative w-full h-full flex items-center justify-center">
            <button onClick={() => setSelectedSrc(null)} aria-label="Close image" className="absolute top-4 md:top-6 right-4 md:right-6 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#111111] text-3xl leading-none shadow-2xl hover:bg-gray-100 hover:scale-110 active:scale-95 transition-transform cursor-pointer">&times;</button>
            <img src={selectedSrc} alt="Full screen preview" className="max-w-full max-h-full object-contain" />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-white text-lg font-bold bg-black/50 px-4 py-2 rounded-full">Sample work</p>
          </div>
        </div>
      )}

      {/* Gradients to fade edges */}
      <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default InfiniteSlider;