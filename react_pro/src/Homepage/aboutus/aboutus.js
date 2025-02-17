import React from "react";
import { Link } from "react-router-dom"; 
import '../aboutus/aboutus.css';

export function Aboutus(){
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
      who_we_are: "Who We Are",
      who_description: "At DiscoverJordan, we offer unforgettable travel experiences...",
      vision: "Our Vision",
      vision_description: "To be the leading travel platform in Jordan...",
      mission: "Our Mission",
      mission_description: "We curate personalized travel experiences...",
      why_choose: "Why Choose DiscoverJordan?",
      why_description: "Choose DiscoverJordan for expert-guided tours...",
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
      who_we_are: "من نحن",
      who_description: "في DiscoverJordan، نقدم تجارب سفر لا تُنسى...",
      vision: "رؤيتنا",
      vision_description: "أن نكون المنصة الرائدة في الأردن...",
      mission: "مهمتنا",
      mission_description: "نصمم تجارب سفر شخصية...",
      why_choose: "لماذا تختار DiscoverJordan؟",
      why_description: "اختر DiscoverJordan لجولات بإرشاد خبراء...",
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
      <header className="header2">
        <section className="content">
          <h1 data-lang="who_we_are" className="lang-text">Who We Are</h1>
          <p data-lang="who_description" className="lang-text">
            At DiscoverJordan, we offer unforgettable travel experiences that
            showcase Jordan’s rich history, stunning landscapes, and warm
            hospitality. From Petra to the Dead Sea, we ensure each journey is
            memorable.
          </p>
        </section>
        <section className="vision-mission">
          <h1 data-lang="vision" className="lang-text">Our Vision</h1>
          <p data-lang="vision_description" className="lang-text">
            To be the leading travel platform in Jordan, providing immersive and
            authentic experiences that connect travelers with our local culture.
          </p>
          <h1 data-lang="mission" className="lang-text">Our Mission</h1>
          <p data-lang="mission_description" className="lang-text">
            We curate personalized travel experiences for all types of travelers.
            Our focus is on sustainability, supporting local communities, and
            providing a seamless travel experience.
          </p>
        </section>
        <section className="why-choose-us">
          <h1 data-lang="why_choose" className="lang-text">Why Choose DiscoverJordan?</h1>
          <p data-lang="why_description" className="lang-text">
            Choose DiscoverJordan for expert-guided tours, exclusive access to
            hidden gems, and authentic cultural experiences. With our easy and
            secure booking, your journey will be smooth from start to finish.
          </p>
        </section>
      </header>
      <footer className="footer">
        <p data-lang="footer" className="lang-text">© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}