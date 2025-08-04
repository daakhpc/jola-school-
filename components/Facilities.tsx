import React from 'react';
import SectionWrapper from './SectionWrapper';
import { useLanguage } from '../contexts/LanguageContext';
import { facilitiesContent, navLinks } from '../constants';
import { Facility } from '../types';

interface FacilityCardProps {
  facility: Facility;
  lang: 'en' | 'hi';
}

const FacilityIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
    switch (iconName) {
        case 'smartClass':
            return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
        case 'classrooms':
        case 'library':
             return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
        case 'laboratory':
            return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
        case 'residential':
            return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
        case 'mess':
            return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0c-.454-.303-.977-.454-1.5-.454V5.73c0-1.242.986-2.23 2.227-2.23h11.546c1.24 0 2.227.988 2.227 2.23v9.816z" /></svg>;
        default:
            return null;
    }
};

const FacilityCard: React.FC<FacilityCardProps> = ({ facility, lang }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <img src={facility.imageUrl} alt={facility.title[lang]} className="w-full h-48 object-cover" />
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex items-center mb-3">
        <div className="text-orange-500 mr-3"><FacilityIcon iconName={facility.icon} /></div>
        <h3 className="text-xl font-bold text-gray-800">{facility.title[lang]}</h3>
      </div>
      <p className="text-gray-600 flex-grow">{facility.description[lang]}</p>
    </div>
  </div>
);


const Facilities: React.FC = () => {
  const { language } = useLanguage();
  const sectionTitle = navLinks.find(link => link.href ==='#facilities')?.label[language] || 'Facilities';

  return (
    <SectionWrapper id="facilities" title={sectionTitle} className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilitiesContent.map((facility, index) => (
          <FacilityCard key={index} facility={facility} lang={language} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Facilities;