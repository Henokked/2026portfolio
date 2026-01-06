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

  return (
    <div className="relative overflow-hidden py-12">
      <div className="animate-infinite-slider">
        {duplicatedImages.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-[450px] px-4">
            <div className="aspect-[16/10] rounded-[2rem] overflow-hidden bg-transparent border-0 group cursor-grab active:cursor-grabbing shadow-none transition-shadow duration-300">
              <img 
                src={src} 
                alt={`UI Mockup ${idx}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100"
              />
            </div>
          </div>
        ))}
      </div>
      {/* Gradients to fade edges */}
      <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default InfiniteSlider;