
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          {title}
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
