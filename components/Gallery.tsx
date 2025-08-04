import React from 'react';
import SectionWrapper from './SectionWrapper';
import { galleryImages, galleryContent } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';


const Gallery: React.FC = () => {
  const { language } = useLanguage();

  return (
    <SectionWrapper id="gallery" title={galleryContent.title[language]} className="bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
            <img 
              src={image.src} 
              alt={image.alt[language]} 
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
