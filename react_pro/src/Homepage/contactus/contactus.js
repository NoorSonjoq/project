import React from "react";
import { Link } from "react-router-dom"; 
import '../contactus/contactus.css'

export function Contactus() {
  const switchLanguage = (lang) => {
    document.documentElement.setAttribute("lang", lang);
    const langTexts = document.querySelectorAll('.lang-text');
    langTexts.forEach((element) => {
      const key = element.getAttribute('data-lang');
      element.textContent = translations[lang][key] || element.textContent;
    });
  };

  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Services",
      destinations: "Destinations",
      reviews: "Reviews",
      gallery: "Gallery",
      contact: "Contact Us",
      booking: "Booking",
      login: "Login",
      contact_title: "Contact Us",
      contact_description: "We'd love to hear from you! Please reach out with any questions or comments.",
      get_in_touch: "Get In Touch",
      full_name_placeholder: "Full Name",
      email_placeholder: "Email",
      message_label: "Message",
      submit_button: "Send Message",
      our_address: "Our Address",
      address: "Amman, Jordan",
      follow_us: "Follow Us",
      footer: "© 2025 DiscoverJordan | All rights reserved."
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      destinations: "الوجهات",
      reviews: "التقييمات",
      gallery: "المعرض",
      contact: "اتصل بنا",
      booking: "الحجز",
      login: "تسجيل الدخول",
      contact_title: "اتصل بنا",
      contact_description: "نود أن نسمع منك! يرجى التواصل معنا لأي أسئلة أو تعليقات.",
      get_in_touch: "ابقى على تواصل",
      full_name_placeholder: "الاسم الكامل",
      email_placeholder: "البريد الإلكتروني",
      message_label: "الرسالة",
      submit_button: "إرسال الرسالة",
      our_address: "عنواننا",
      address: "عمان، الأردن",
      follow_us: "تابعنا",
      footer: "© 2025 DiscoverJordan | جميع الحقوق محفوظة."
    }
  };

  return (
    <>
      <nav className="nav">
        <h1 className="logo">DiscoverJordan</h1>
        <button className="toggle-btn">&#9776;</button>
        <ul className="menu">
          <li><Link to="/"><i className="fas fa-home"></i> <span className="lang-text" data-lang="home">Home</span></Link></li>
          <li><Link to="/aboutus"><i className="fas fa-info-circle"></i> <span className="lang-text" data-lang="about">About Us</span></Link></li>
          <li><Link to="/services"><i className="fas fa-cogs"></i> <span className="lang-text" data-lang="services">Services</span></Link></li>
          <li><Link to="/destinations"><i className="fas fa-map-marker-alt"></i> <span className="lang-text" data-lang="destinations">Destinations</span></Link></li>
          <li><Link to="/reviews"><i className="fas fa-star"></i> <span className="lang-text" data-lang="reviews">Reviews</span></Link></li>
          <li><Link to="/gallery"><i className="fas fa-images"></i> <span className="lang-text" data-lang="gallery">Gallery</span></Link></li>
          <li><Link to="/contactus"><i className="fas fa-envelope"></i> <span className="lang-text" data-lang="contact">Contact Us</span></Link></li>
          <li><Link to="/booking"><i className="fas fa-calendar-check"></i> <span className="lang-text" data-lang="booking">Booking</span></Link></li>
          <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> <span className="lang-text" data-lang="login">Login</span></Link></li>
        </ul>
        <div className="language-switcher">
          <button onClick={() => switchLanguage('en')}>EN</button>
          <button onClick={() => switchLanguage('ar')}>AR</button>
        </div>
      </nav>
      <header className="header1">
        <div className="intro-content">
          <h1 className="lang-text" data-lang="contact_title">Contact Us</h1>
          <p className="lang-text" data-lang="contact_description">
            We'd love to hear from you! Please reach out with any questions or comments.
          </p>
        </div>
      </header>
      <section className="contact-section">
        <div className="form-container">
          <h2 className="lang-text" data-lang="get_in_touch">Get In Touch</h2>
          <form action="#" method="post">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="lang-text" data-lang="submit_button">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="address">
            <h3 className="lang-text" data-lang="our_address">Our Address</h3>
            <p className="lang-text" data-lang="address">Amman, Jordan</p>
          </div>
          <div className="social">
            <h3 className="lang-text" data-lang="follow_us">Follow Us</h3>
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p className="lang-text" data-lang="footer">© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}