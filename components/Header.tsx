import React, { useState } from 'react';
import { schoolInfo, navLinks } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const UPGovLogo: React.FC = () => (
    <svg className="w-16 h-16 text-gray-700" fill="none" viewBox="0 0 100 100" stroke="currentColor">
        <circle cx="50" cy="50" r="45" strokeWidth="5" />
        <path d="M50 15 V85 M15 50 H85" strokeWidth="3" />
        <text x="50" y="55" textAnchor="middle" fontSize="12" fill="currentColor">GOVT OF UP</text>
    </svg>
);

const SchoolLogo: React.FC = () => (
    <svg className="w-16 h-16 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 21.052a11.952 11.952 0 01-6.824-4.012 12.083 12.083 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14V4.5" />
    </svg>
);

const LanguageSwitcher: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();
    
    return (
        <div className="flex items-center space-x-2">
             <span className={`font-semibold text-sm ${language === 'en' ? 'text-orange-500' : 'text-gray-500'}`}>EN</span>
            <button
                onClick={toggleLanguage}
                className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-300 focus:outline-none"
                aria-label="Toggle Language"
            >
                <span
                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                    language === 'hi' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
            </button>
            <span className={`font-semibold text-sm ${language === 'hi' ? 'text-orange-500' : 'text-gray-500'}`}>HI</span>
        </div>
    );
};


const Header: React.FC = () => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
        });
        setIsOpen(false);
    };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-2 md:space-x-4">
                <UPGovLogo />
                <div className="text-center">
                    <h1 className="text-sm md:text-xl font-bold text-orange-600">{schoolInfo.name[language]}</h1>
                    <p className="text-xs md:text-base text-gray-600">{schoolInfo.address[language]}</p>
                    <p className="text-xs md:text-sm text-gray-500">{schoolInfo.managedBy[language]}</p>
                </div>
                <SchoolLogo />
            </div>

            <div className="flex items-center space-x-4">
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-gray-600 hover:text-orange-500 font-semibold transition-colors duration-300">
                            {link.label[language]}
                        </a>
                    ))}
                </nav>
                <LanguageSwitcher />
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path></svg>
                    </button>
                </div>
            </div>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white pb-4">
            <ul>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} onClick={(e) => handleScroll(e, link.href)} className="block text-center py-2 px-4 text-gray-600 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                            {link.label[language]}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
