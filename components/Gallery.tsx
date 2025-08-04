
import React from 'react';
import SectionWrapper from './SectionWrapper';

const galleryImages = [
    { src: 'https://picsum.photos/id/1015/600/400', alt: 'प्रात:कालीन योगा' },
    { src: 'https://picsum.photos/id/1016/600/800', alt: 'प्रार्थना स्थल' },
    { src: 'https://picsum.photos/id/1018/600/400', alt: 'सांस्कृतिक कार्यक्रम' },
    { src: 'https://picsum.photos/id/1019/600/400', alt: 'खेलों का आयोजन' },
    { src: 'https://picsum.photos/id/1025/600/400', alt: 'वृक्षारोपण' },
    { src: 'https://picsum.photos/id/103/600/800', alt: 'स्वागत समारोह' },
    { src: 'https://picsum.photos/id/1040/600/400', alt: 'स्वच्छता अभियान' },
    { src: 'https://picsum.photos/id/1043/600/400', alt: 'CBSE कार्यक्रम' },
    { src: 'https://picsum.photos/id/1047/600/400', alt: 'स्काउट' },
    { src: 'https://picsum.photos/id/1050/600/800', alt: 'स्वास्थ्य परीक्षण' },
    { src: 'https://picsum.photos/id/106/600/400', alt: 'जयंतिया समारोह' },
    { src: 'https://picsum.photos/id/1060/600/400', alt: 'शीतकालीन वस्त्रों का वितरण' },
];

const Gallery: React.FC = () => {
  return (
    <SectionWrapper id="gallery" title="गैलरी" className="bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer" 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
