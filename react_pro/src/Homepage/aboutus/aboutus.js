import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../aboutus/aboutus.css';

export function Aboutus() {
  const switchLanguage = (lang) => {
    document.documentElement.setAttribute("lang", lang);
    const langTexts = document.querySelectorAll('.lang-text');
    langTexts.forEach((element) => {
      const key = element.getAttribute('data-key');
      element.textContent = translations[lang][key] || element.textContent;
    });
    alert(`Language switched to ${lang === 'en' ? 'English' : 'Arabic'}`);
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
      who_description: "At DiscoverJordan, we specialize in creating unforgettable travel experiences that highlight Jordan’s rich history, breathtaking landscapes, and warm hospitality. From the ancient city of Petra to the serene Dead Sea, every journey with us is designed to be memorable.",
      vision: "Our Vision",
      vision_description: "To be the leading travel platform in Jordan, providing immersive and authentic experiences that connect travelers with our local culture.",
      mission: "Our Mission",
      mission_description: "We are dedicated to curating personalized travel experiences for all types of travelers. Our focus is on sustainability, supporting local communities, and ensuring a seamless travel experience from start to finish.",
      why_choose: "Why Choose DiscoverJordan?",
      why_description: "Choose DiscoverJordan for expert-guided tours, exclusive access to hidden gems, and authentic cultural experiences. With our easy and secure booking, your journey will be smooth from start to finish.",
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
      who_description: "في DiscoverJordan، نتميز بخلق تجارب سفر لا تُنسى تُبرز التاريخ الغني للأردن، والمناظر الطبيعية الخلابة، وكرم الضيافة. من مدينة البتراء القديمة إلى البحر الميت الهادئ، كل رحلة معنا مصممة لتكون مليئة بالذكريات الجميلة.",
      vision: "رؤيتنا",
      vision_description: "أن نكون المنصة الرائدة للسفر في الأردن، ونقدم تجارب غامرة وأصيلة تربط المسافرين بجوهر ثقافتنا المحلية.",
      mission: "مهمتنا",
      mission_description: "نحن ملتزمون بتنظيم تجارب سفر مخصصة لجميع أنواع المسافرين. نركز على الاستدامة، ودعم المجتمعات المحلية، وضمان تجربة سفر سلسة من البداية إلى النهاية.",
      why_choose: "لماذا تختار DiscoverJordan؟",
      why_description: "تتميز DiscoverJordan بجولاتها بإرشاد الخبراء، والوصول الحصري إلى الأماكن المخفية، والتجارب الثقافية الأصيلة. مع عملية الحجز السهلة والآمنة، ستكون رحلتك سلسة وخالية من المتاعب.",
      footer: "© 2025 DiscoverJordan | جميع الحقوق محفوظة."
    }
  };

  // إضافة وإزالة className لـ body
  useEffect(() => {
    document.body.classList.add('aboutus-body');
    return () => {
      document.body.classList.remove('aboutus-body');
    };
  }, []);

  return (
    <>
      <nav className="nav">
        <h1 className="logo">DiscoverJordan</h1>
        <button className="toggle-btn">&#9776;</button>
        <ul className="menu">
          <li><Link to="/Homepage"><i className="fas fa-home"></i> <span className="lang-text" data-key="home">Home</span></Link></li>
          <li><Link to="/aboutus"><i className="fas fa-info-circle"></i> <span className="lang-text" data-key="about">About Us</span></Link></li>
          <li><Link to="/services"><i className="fas fa-cogs"></i> <span className="lang-text" data-key="services">Services</span></Link></li>
          <li><Link to="/destinations"><i className="fas fa-map-marker-alt"></i> <span className="lang-text" data-key="destinations">Destinations</span></Link></li>
          <li><Link to="/reviews"><i className="fas fa-star"></i> <span className="lang-text" data-key="reviews">Reviews</span></Link></li>
          <li><Link to="/gallery"><i className="fas fa-images"></i> <span className="lang-text" data-key="gallery">Gallery</span></Link></li>
          <li><Link to="/contactus"><i className="fas fa-envelope"></i> <span className="lang-text" data-key="contact">Contact Us</span></Link></li>
          <li><Link to="/booking"><i className="fas fa-calendar-check"></i> <span className="lang-text" data-key="booking">Booking</span></Link></li>
          <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> <span className="lang-text" data-key="login">Login</span></Link></li>
        </ul>
        <div className="language-switcher">
          <button onClick={() => switchLanguage('en')}>EN</button>
          <button onClick={() => switchLanguage('ar')}>AR</button>
        </div>
      </nav>

      <header className="header2">
        <section className="content">
          <h1 data-key="who_we_are" className="lang-text fade-in">Who We Are</h1>
          <p data-key="who_description" className="lang-text fade-in">
          At DiscoverJordan, we offer unforgettable travel experiences that
          showcase Jordan’s rich history, stunning landscapes, and warm
          hospitality. From Petra to the Dead Sea, we ensure each journey is
          memorable.          </p>
          <h1 data-key="vision" className="lang-text fade-in">Our Vision</h1>
          <p data-key="vision_description" className="lang-text fade-in">
          To be the leading travel platform in Jordan, providing immersive and
          authentic experiences that connect travelers with our local culture.        </p>
          <h1 data-key="mission" className="lang-text fade-in">Our Mission</h1>
          <p data-key="mission_description" className="lang-text fade-in">
          We curate personalized travel experiences for all types of travelers.
          Our focus is on sustainability, supporting local communities, and
          providing a seamless travel experience.          </p>
          <h1 data-key="why_choose" className="lang-text fade-in">Why Choose DiscoverJordan?</h1>
          <p data-key="why_description" className="lang-text fade-in">
          Choose DiscoverJordan for expert-guided tours, exclusive access to
          hidden gems, and authentic cultural experiences. With our easy and
          secure booking, your journey will be smooth from start to finish.</p>
        </section>
      </header>

      <footer className="footer">
        <p data-key="footer" className="lang-text">© 2025 DiscoverJordan | All rights reserved.</p>
        </footer>
    </>
  );
}