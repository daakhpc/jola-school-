
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { resultsData } from '../constants';
import { Result } from '../types';

interface ResultCardProps {
  grade: string;
  data: Result;
}

const ResultCard: React.FC<ResultCardProps> = ({ grade, data }) => {
  const isSuccess = data.passPercentage === "100%";

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex-grow flex flex-col border-t-8 border-orange-500">
        <h3 className="text-2xl font-bold text-center text-orange-600 mb-4">{grade}</h3>
        <div className="grid grid-cols-2 gap-4 text-base mb-4 text-gray-700">
            <p><strong>कुल छात्र:</strong> {data.total}</p>
            <p><strong>उत्तीर्ण छात्र:</strong> {data.passed}</p>
            {data.failed !== undefined && <p><strong>अनुत्तीर्ण छात्र:</strong> {data.failed}</p>}
            {data.compartment !== undefined && <p><strong>कम्पार्टमेंट:</strong> {data.compartment}</p>}
        </div>
        <div className={`text-lg font-bold p-2 text-center rounded-md mb-4 ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
            कुल प्रतिशत: {data.passPercentage}
        </div>
        <div>
            <h4 className="font-bold text-lg mb-2 text-center text-gray-800">टॉप 03 छात्र</h4>
            {data.toppers.length > 0 ? (
                <ul className="space-y-1">
                    {data.toppers.map((topper, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                            <span className="font-semibold text-gray-700">{index + 1}. {topper.name}</span>
                            <span className="font-bold text-orange-600">{topper.score}%</span>
                        </li>
                    ))}
                </ul>
            ) : <p className="text-center text-gray-500">कोई डेटा नहीं</p>}
        </div>
    </div>
  );
};

const Results: React.FC = () => {
  const years = Object.keys(resultsData);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const currentResult = resultsData[selectedYear];

  return (
    <SectionWrapper id="results" title="परीक्षाफल सत्र" className="bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${selectedYear === year ? 'bg-orange-500 text-white shadow-lg' : 'bg-white text-orange-500 hover:bg-orange-100'}`}
            >
              {year}
            </button>
          ))}
        </div>
        <h3 className="text-4xl font-bold text-center text-gray-700 mb-8">{selectedYear}</h3>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <ResultCard grade="कक्षा 10" data={currentResult.class10} />
          </div>
          <div className="w-full md:w-1/2">
            <ResultCard grade="कक्षा 12" data={currentResult.class12} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Results;
