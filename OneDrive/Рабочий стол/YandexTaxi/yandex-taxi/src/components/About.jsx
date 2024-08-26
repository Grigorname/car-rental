import React from 'react';
import '../css/about.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="home_container" id="quizSection">
      <p id="warning" className="warning_text">{t('warningText')}</p>
      <div className="question" id="question_text">
        <h3>{t('questionText')}</h3>
      </div>
      <div className="container" id="about-content">
        <div className="list">
          <ul className="advantages">
            <li id="one">{t('one_text')}</li>
            <li id="tree">{t('tree_text')}</li>
            <li id="five">{t('five_text')}</li>
            <li id="four">{t('four_text')}</li>
            <li id="six">{t('six_text')}</li>
          </ul>
        </div>
        <div className="list">
          <ul className="disadvantages">
            <li id="seven">{t('seven_text')}</li>
            <li id="eight">{t('eight_text')}</li>
            <li id="nine">{t('nine_text')}</li>
            <li id="ten">{t('ten_text')}</li>
            <li id="twoo">{t('twoo_text')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
