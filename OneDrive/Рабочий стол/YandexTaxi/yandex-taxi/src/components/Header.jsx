import React, { useState } from 'react';
import '../css/header.css';
import logo from '../assets/image001.png';
import flagArmenia from '../assets/flagArmenia.jpg';
import flagRussia from '../assets/russia-flag.png';
import flagUK from '../assets/America-flag.png';
import { useTranslation } from 'react-i18next';

const Header = ({ setSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getFlag = (language) => {
    switch(language) {
      case 'hy': return flagArmenia;
      case 'ru': return flagRussia;
      case 'en': return flagUK;
      default: return flagArmenia;
    }
  };

  return (
    <header className="header">
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
        <i className={`fas fa-times ${menuOpen ? '' : 'hidden'}`}></i>
      </div>
      <div className="logo" id="logo" onClick={() => setSection('home')}>
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="title">
        <h1 id="titleText">{t('titleText')}</h1>
      </div>
      <div className={`buttons ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><button onClick={() => setSection('about')}>{t('aboutBtn')}</button></li>
          <li><button onClick={() => setSection('rental')}>{t('rentalBtn')}</button></li>
          <li><button onClick={() => setSection('services')}>{t('servicesBtn')}</button></li>
        </ul>
      </div>
      <div className="language-selector">
        <div id="languageSelect" className="dropdown-selector" onClick={toggleDropdown}>
          <div className="selected-lang">
            <span className="flag"><img src={getFlag(i18n.language)} alt="Language flag" /></span>
            <span className="lang-text">{i18n.language}</span>
          </div>
          <div className={`dropdown-content ${dropdownOpen ? '' : 'hidden'}`}>
            <div className="dropdown-item" onClick={() => { changeLanguage('hy'); toggleDropdown(); }}>
              <span className="flag"><img src={flagArmenia} alt="Հայերեն" /></span>
              <span className="lang-text">Հայերեն</span>
            </div>
            <div className="dropdown-item" onClick={() => { changeLanguage('ru'); toggleDropdown(); }}>
              <span className="flag"><img src={flagRussia} alt="Русский" /></span>
              <span className="lang-text">Русский</span>
            </div>
            <div className="dropdown-item" onClick={() => { changeLanguage('en'); toggleDropdown(); }}>
              <span className="flag"><img src={flagUK} alt="English" /></span>
              <span className="lang-text">English</span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <div className="social-icons">
          <a href="https://wa.me/+37477636706" target="_blank" className="whatsapp"><i className="fab fa-whatsapp"></i></a>
          <a href="viber://chat?number=+37494808520" target="_blank" className="viber"><i className="fab fa-viber"></i></a>
          <a href="https://t.me/+79284889349" target="_blank" className="telegram"><i className="fab fa-telegram-plane"></i></a>
        </div>
        <a href="tel:+37477636706" className="phone-number">+37477636706</a>
        <a href="tel:+37494808520" className="phone-number">+37494808520</a>
      </div>
    </header>
  );
};

export default Header;

