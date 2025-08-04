import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Facilities from './components/Facilities';
import Academics from './components/Academics';
import Staff from './components/Staff';
import Results from './components/Results';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-gray-50 text-gray-800 font-sans">
        <Header />
        <main>
          <Home />
          <Facilities />
          <Academics />
          <Staff />
          <Results />
          <Gallery />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
