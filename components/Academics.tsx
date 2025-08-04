
import React from 'react';
import SectionWrapper from './SectionWrapper';

const artsSubjects = ["हिंदी", "अंग्रेजी", "समाजशास्त्र", "अर्थशास्त्र", "इतिहास", "शारीरिक शिक्षा"];
const scienceSubjects = ["हिंदी", "अंग्रेजी", "भौतिक विज्ञान", "रसायन विज्ञान", "जीव विज्ञान / गणित", "शारीरिक शिक्षा"];

const Academics: React.FC = () => {
  return (
    <SectionWrapper id="academics" title="अकादमिक" className="bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">डिजिटल शिक्षा पहल</h3>
        <p className="text-lg text-gray-600">
          गणित विषय को बेहतर बनाने हेतु निदेशालय समाज कल्याण उत्तर प्रदेश लखनऊ द्वारा खान एकेडेमी द्वारा छात्रों को ऑनलाइन शिक्षा की व्यवस्था भी की गयी है। अन्य विषयों (जैसे विज्ञान, सामाजिक विज्ञान आदि) एमबाइब द्वारा छात्रों को ऑनलाइन शिक्षा प्रदान की जा रही है, अंग्रेजी विषय को सुगम बनाने के लिए इंग्लिश लिट्रेसी प्रोग्राम संचालित किया जा रहा है, फुलवारी प्रोजेक्ट द्वारा छात्रों को शारीरिक एवं मानसिक शोषण से बचने एवं उनके सर्वांगीण विकास के लिए जानकारी दी जाती है।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-orange-50 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-bold text-orange-600 mb-4 text-center">कला संकाय</h3>
          <ul className="space-y-2">
            {artsSubjects.map((subject, index) => (
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
          <h3 className="text-2xl font-bold text-teal-600 mb-4 text-center">विज्ञान संकाय</h3>
          <ul className="space-y-2">
            {scienceSubjects.map((subject, index) => (
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
