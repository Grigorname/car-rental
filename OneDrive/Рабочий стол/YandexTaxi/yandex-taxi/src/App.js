import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Rental from './components/Rental';
import Services from './components/Services';
import Footer from './components/Footer';
import Home from './components/Home';
import './css/style.css';

function App() {
  const [language, setLanguage] = React.useState('hy');
  const [section, setSection] = React.useState('home');

  return (
    <div className="App">
      <Header setLanguage={setLanguage} currentLanguage={language} setSection={setSection} />
      
      {section === 'home' && (
        <div>
          <Home />
          <About language={language} />
          <Rental language={language} />
          <Services />
        </div>
      )}
      
      {section === 'about' && <About language={language} />}
      {section === 'rental' && <Rental language={language} />}
      {section === 'services' && <Services />}
      
      <Footer />
    </div>
  );
}

export default App;
