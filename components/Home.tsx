
import React from 'react';
import SectionWrapper from './SectionWrapper';

const Home: React.FC = () => {
  return (
    <SectionWrapper id="home" title="परिचय" className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 w-full flex-shrink-0">
                <img 
                    src="https://picsum.photos/800/600?image=1074" 
                    alt="राजकीय आश्रम पद्धति विद्यालय" 
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
            </div>
            <div className="md:w-1/2 w-full text-lg text-gray-600 space-y-4 text-center md:text-left">
                <p>
                    राजकीय आश्रम पद्धति विद्यालय जौला डिंडौली नागल सहारनपुर का निर्माण, वर्ष 2008 में प्रारम्भ हुआ तथा वर्ष 2011 में विद्यालय संचालित हुआ।
                </p>
                <p>
                    विद्यालय की कुल छात्र क्षमता 490 है। यह विद्यालय केवल सामाजिक, आर्थिक दृष्टि से कमजोर व शिक्षा से वंचित, ग्रामीण और शहरी क्षेत्रों के बालको को शिक्षा के साथ-साथ निशुल्क यूनिफार्म, आवास, दैनिक प्रयोग की सभी वस्तुए, अध्ययन लेखन सामग्री, गणवेश, खेलकूद व कम्प्यूटर की सुविधा उपलब्ध कराता है।
                </p>
            </div>
        </div>
    </SectionWrapper>
  );
};

export default Home;
