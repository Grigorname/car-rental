import React from 'react';
import '../css/rental.css';
import { useTranslation } from 'react-i18next';
import fusionImage from '../assets/fusion.jpg';
import kiaImage from '../assets/Kia-Forte2017.jpg'; 
import elantraImga from '../assets/elantra.jpg'
const Rental = () => {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="card-container">
        <div className="card">
          <img src={fusionImage} alt="Ford-fusion" className="car-image" />
          <div className="card-content">
            <h2 className="taxiBusiness">{t('Business')}</h2>
            <h1>FORD-FUSION</h1>
            <hr />
            <div className="car-details">
              <div className="car_year">
                <span id="yearTitle">{t('yearTitle')}</span>
                <span id="year-info">2016-2018</span>
              </div>
              <div className="car_akpp">
                <span id="akpp_title">AKPP:</span>
                <span id="akpp_info">{t('akpp_info')}</span>
              </div>
              <div className="car_motor">
                <span id="motor_title">{t('motor_title')}</span>
                <span id="motor_info">2.5</span>
              </div>
              <div className="car_fuel">
                <span id="fuel_title">{t('fuel_title')}</span>
                <span id="fuel_info">{t('fuel_info')}</span>
              </div>
              <div className="car_minimum">
                <span id="minimum_title">{t('minimum_title')}</span>
                <span id="minimum_info">{t('minimum_info')}</span>
              </div>
              <div className="car_deposite">
                <span id="deposite_title">{t('deposite_title')}</span>
                <span id="deposite_info">60000</span>
              </div>
              <div className="car_conditioner">
                <span id="conditioner_title">{t('conditioner_title')}</span>
                <span id="conditioner_info">{t('conditioner_info')}</span>
              </div>
              <div className="car_camera">
                <span id="camera_title">{t('camera_title')}</span>
                <span id="camera_info">{t('camera_info')}</span>
              </div>
              <div className="car_control">
                <span id="control_title">{t('control_title')}</span>
                <span id="control_info">{t('control_info')}</span>
              </div>
            </div>
            <hr />
            <div className="price">
              <span id="price_title">{t('price_title')}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={kiaImage} alt="Kia-Forte2017" className="car-image" />
          <div className="card-content">
            <h2 className="taxiBusiness" id="comfortPlus">Տարիֆ/Comfort+</h2>
            <h1>Kia-Forte</h1>
            <hr />
            <div className="car-details">
              <div className="car_year">
                <span id="yearTitleKia">{t('yearTitleKia')}:</span>
                <span id="year-info">2016-2019</span>
              </div>
              <div className="car_akpp">
                <span id="akpp_title">AKPP:</span>
                <span id="akpp_infoKia">{t('akpp_infoKia')}</span>
              </div>
              <div className="car_motor">
                <span id="motor_titleKia">{t('motor_titleKia')}</span>
                <span id="motor_info">2</span>
              </div>
              <div className="car_fuel">
                <span id="fuel_titleKia">{t('fuel_titleKia')}</span>
                <span id="fuel_infoKia">{t('fuel_infoKia')}</span>
              </div>
              <div className="car_minimum">
                <span id="minimum_titleKia">{t('minimum_titleKia')}</span>
                <span id="minimum_infoKia">{t('minimum_infoKia')}</span>
              </div>
              <div className="car_deposite">
                <span id="deposite_titleKia">{t('deposite_titleKia')}</span>
                <span id="deposite_info">55000</span>
              </div>
              <div className="car_conditioner">
                <span id="conditioner_titleKia">{t('conditioner_titleKia')}</span>
                <span id="conditioner_infoKia">{t('conditioner_infoKia')}</span>
              </div>
              <div className="car_camera">
                <span id="camera_titleKia">{t('camera_titleKia')}</span>
                <span id="camera_infoKia">{t('camera_infoKia')}</span>
              </div>
              <div className="car_control">
                <span id="control_titleKia">{t('control_titleKia')}</span>
                <span id="control_infoKia">{t('control_infoKia')}</span>
              </div>
            </div>
            <hr />
            <div className="price">
              <span id="price_titleKia">{t('price_titleKia')}</span>
            </div>
          </div>
        </div>
      </div>
       <div class="card-container">
    <div class="card">
      <img src = {elantraImga} alt="Volkswagen Polo VI" class="car-image" />
      <div class="card-content">
        <h2 class="taxiBusiness" id="Business">Տարիֆ/Comfort+</h2>
        <h1>Hyundai-Elantra</h1>
        <hr />
        <div class="car-details">
          <div class="car_year">
            <span id="yearTitleElantra">{t('yearTitleElantra')}</span>
            <span id="year-info">2016-2019</span>
          </div>
          <div class="car_akpp">
            <span id="akpp_title">AKPP:</span>
            <span id="akpp_infoElantra">{t('akpp_infoElantra')}</span>
          </div>
          <div class="car_motor">
            <span id="motor_titleElantra">{t('motor_titleElantra')}</span>
            <span id="motor_info">2</span>
          </div>
          <div class="car_fuel">
            <span id="fuel_titleElantra">{t('fuel_titleElantra')}</span>
            <span id="fuel_infoElantra">{t('fuel_infoElantra')}</span>
          </div>
          <div class="car_minimum">
            <span id="minimum_titleElantra">{t('minimum_titleElantra')}</span>
            <span id="minimum_infoElantra">{t('minimum_infoElantra')}</span>
          </div>
          <div class="car_deposite">
            <span id="deposite_titleElantra">{t('deposite_titleElantra')}</span>
            <span id="deposite_info">55000</span>
          </div>
          <div class="car_conditioner">
            <span id="conditioner_titleElantra">{t('conditioner_titleElantra')}</span>
            <span id="conditioner_infoElantra">{t('conditioner_infoElantra')}</span>
          </div>
          <div class="car_camera">
            <span id="camera_titleElantra">{t('camera_titleElantra')}</span>
            <span id="camera_infoElantra">{t('camera_infoElantra')}</span>
          </div>
          <div class="car_control">
            <span id="control_titleElantra">{t('control_titleElantra')}</span>
            <span id="control_infoElantra">{t('control_infoElantra')}</span>
          </div>
        </div>
        <hr />
        <div class="price">
          <span id="price_titleElantra">{t('price_titleElantra')}</span>
        </div>
      </div>
    </div>
  </div>
    </section>
  );
};

export default Rental;
