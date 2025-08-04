import React from 'react';
import SectionWrapper from './SectionWrapper';
import { useLanguage } from '../contexts/LanguageContext';
import { homeContent } from '../constants';

const Home: React.FC = () => {
  const { language } = useLanguage();

  return (
    <SectionWrapper id="home" title={homeContent.title[language]} className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 w-full flex-shrink-0">
                <img 
                    src={homeContent.imageUrl}
                    alt={homeContent.title[language]} 
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
            </div>
            <div className="md:w-1/2 w-full text-lg text-gray-600 space-y-4 text-center md:text-left">
                <p>
                    {homeContent.p1[language]}
                </p>
                <p>
                    {homeContent.p2[language]}
                </p>
            </div>
        </div>
    </SectionWrapper>
  );
};

export default Home;
