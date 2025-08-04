import React from 'react';
import SectionWrapper from './SectionWrapper';
import { useLanguage } from '../contexts/LanguageContext';
import { academicsContent } from '../constants';

const Academics: React.FC = () => {
  const { language } = useLanguage();

  return (
    <SectionWrapper id="academics" title={academicsContent.title[language]} className="bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">{academicsContent.digitalEducation.title[language]}</h3>
        <p className="text-lg text-gray-600">
          {academicsContent.digitalEducation.description[language]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-orange-50 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-bold text-orange-600 mb-4 text-center">{academicsContent.faculties.arts.title[language]}</h3>
          <ul className="space-y-2">
            {academicsContent.faculties.arts.subjects[language].map((subject, index) => (
              <li key={index} className="flex items-center text-lg text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {subject}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-teal-50 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-bold text-teal-600 mb-4 text-center">{academicsContent.faculties.science.title[language]}</h3>
          <ul className="space-y-2">
            {academicsContent.faculties.science.subjects[language].map((subject, index) => (
              <li key={index} className="flex items-center text-lg text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {subject}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Academics;
