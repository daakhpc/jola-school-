import React from 'react';
import { schoolInfo, footerContent } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 md:px-6 text-center">
        <h3 className="text-xl font-bold mb-2">{schoolInfo.name[language]}</h3>
        <p className="text-gray-400 mb-4">{schoolInfo.address[language]}</p>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {schoolInfo.name[language]}. {footerContent.copyright[language]}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
