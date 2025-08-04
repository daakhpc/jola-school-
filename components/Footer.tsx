
import React from 'react';
import { schoolName, schoolAddress } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 md:px-6 text-center">
        <h3 className="text-xl font-bold mb-2">{schoolName}</h3>
        <p className="text-gray-400 mb-4">{schoolAddress}</p>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {schoolName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
