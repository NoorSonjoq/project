import React from "react";
import { Link } from "react-router-dom"; 
import '../destinations/destinations.css'

export function Destinations() {
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
      explore1: "Explore the Most Beautiful Destinations in Jordan",
      discover: "Discover breathtaking places and plan your next adventure!",
      topDestinations: "Top Destinations",
      petraDescription: "The ancient city of Petra, one of the Seven Wonders of the World.",
      wadiRumDescription: "Experience the stunning desert landscape and adventure activities.",
      deadSeaDescription: "Float effortlessly in the world's saltiest body of water.",
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
      explore1: "اكتشف أجمل الوجهات في الأردن",
      discover: "اكتشف الأماكن الرائعة وخطط لمغامرتك القادمة!",
      topDestinations: "أفضل الوجهات",
      petraDescription: "مدينة البتراء القديمة، إحدى عجائب الدنيا السبع.",
      wadiRumDescription: "استمتع بالمناظر الصحراوية المذهلة وأنشطة المغامرة.",
      deadSeaDescription: "طفوا بسهولة في أكثر المسطحات المائية ملوحة في العالم.",
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
          <h1><span className="lang-text" data-lang="explore1">Explore the Most Beautiful Destinations in Jordan</span></h1>
          <p><span className="lang-text" data-lang="discover">Discover breathtaking places and plan your next adventure!</span></p>
        </div>
      </header>
      <section className="destinations">
        <h2><span className="lang-text" data-lang="topDestinations">Top Destinations</span></h2>
        <div className="destinations-container">
          <div className="destination-card">
            <img src="../img/petra.jpg" alt="Petra" />
            <a href="https://www.google.com/maps?q=Petra,+Jordan">
              <h3>Petra</h3>
              <p><span className="lang-text" data-lang="petraDescription">The ancient city of Petra, one of the Seven Wonders of the World.</span></p>
            </a>
          </div>
          <div className="destination-card">
            <img src="../img/Wadi Rum.jpg" alt="Wadi Rum" />
            <a href="https://maps.app.goo.gl/p6CEdyTdbZtNaeqE6">
              <h3>Wadi Rum</h3>
              <p><span className="lang-text" data-lang="wadiRumDescription">Experience the stunning desert landscape and adventure activities.</span></p>
            </a>
          </div>
          <div className="destination-card">
            <img src="../img/Dead Sea.jpg" alt="Dead Sea" />
            <a href="https://maps.app.goo.gl/NWBMat5D1ATuhCqaA">
              <h3>Dead Sea</h3>
              <p><span className="lang-text" data-lang="deadSeaDescription">Float effortlessly in the world's saltiest body of water.</span></p>
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p data-lang="footer" className="lang-text">© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}