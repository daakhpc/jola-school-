
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { staffData } from '../constants';

const Staff: React.FC = () => {
  return (
    <SectionWrapper id="staff" title="शैक्षणिक स्टाफ" className="bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-lg">
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">क्रम सं०</th>
                  <th className="p-4 text-left font-semibold">नाम</th>
                  <th className="p-4 text-left font-semibold">पदनाम</th>
                  <th className="p-4 text-left font-semibold">विषय</th>
                </tr>
              </thead>
              <tbody>
                {staffData.map((member, index) => (
                  <tr key={member.id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-orange-50'}`}>
                    <td className="p-4 font-medium text-gray-800">{String(member.id).padStart(2, '0')}</td>
                    <td className="p-4 font-medium text-gray-900">{member.name}</td>
                    <td className="p-4 text-gray-600">{member.designation}</td>
                    <td className="p-4 text-gray-600">{member.subject}</td>
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
