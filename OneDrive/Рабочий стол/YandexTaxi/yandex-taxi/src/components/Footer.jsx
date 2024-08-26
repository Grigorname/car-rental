import React from 'react';
import '../css/footer.css'; // исправляем путь

const Footer = () => (
  <footer className="footer">
    <div className="social-icons">
      <a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
      <a href="https://www.facebook.com/profile.php?id=61552254445189&mibextid=ZbWKwL" target="_blank"><i className="fab fa-facebook-f"></i></a>
      <a href="https://wa.me/+37477636706" target="_blank"><i className="fab fa-whatsapp"></i></a>
      <a href="viber://chat?number=+37494808520" target="_blank"><i className="fab fa-viber"></i></a>
      <a href="https://t.me/+79284889349" target="_blank"><i className="fab fa-telegram-plane"></i></a>
    </div>
    <div className="contact-info">
      <p>+37477636706</p>
      <p>Banantstaxi@yandex.ru</p>
    </div>
  </footer>
);

export default Footer;
