import React from 'react';
import SectionWrapper from './SectionWrapper';
import { staffData, staffContent } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Staff: React.FC = () => {
  const { language } = useLanguage();

  return (
    <SectionWrapper id="staff" title={staffContent.title[language]} className="bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-lg">
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">{staffContent.headers.srNo[language]}</th>
                  <th className="p-4 text-left font-semibold">{staffContent.headers.name[language]}</th>
                  <th className="p-4 text-left font-semibold">{staffContent.headers.designation[language]}</th>
                  <th className="p-4 text-left font-semibold">{staffContent.headers.subject[language]}</th>
                </tr>
              </thead>
              <tbody>
                {staffData.map((member, index) => (
                  <tr key={member.id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-orange-50'}`}>
                    <td className="p-4 font-medium text-gray-800">{String(member.id).padStart(2, '0')}</td>
                    <td className="p-4 font-medium text-gray-900">{member.name}</td>
                    <td className="p-4 text-gray-600">{member.designation[language]}</td>
                    <td className="p-4 text-gray-600">{member.subject[language]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Staff;
