import React, { useEffect } from 'react';
import '../Homepage/Homepage.css';

export function Home() {
  // إضافة وإزالة className لـ body
  useEffect(() => {
    document.body.classList.add('home-body'); // إضافة className عند تحميل الصفحة
    return () => {
      document.body.classList.remove('home-body'); // إزالته عند مغادرة الصفحة
    };
  }, []);

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
      explore: "Discover the most beautiful destinations in Jordan with our unique travel services! We help you design your perfect trip with ease",
      explore_now: "Explore Destinations Now",
      request_services: "Request Our Services",
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
      explore: "اكتشف أجمل الوجهات في الأردن مع خدماتنا السياحية الفريدة! نساعدك في تصميم رحلتك المثالية بكل سهولة.",
      explore_now: "استكشف الوجهات الآن",
      request_services: "طلب خدماتنا",
      footer: "© 2025 DiscoverJordan | جميع الحقوق محفوظة."
    }
  };

  // إضافة الأحداث باستخدام useEffect
  useEffect(() => {
    const toggleBtn = document.querySelector(".toggle-btn");
    const menu = document.querySelector(".menu");

    if (toggleBtn && menu) {
      toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    }

    const introText = document.querySelector(".intro-content h1");
    if (introText) {
      introText.classList.add("fade-in");
    }

    // تنظيف الأحداث عند إلغاء التثبيت
    return () => {
      if (toggleBtn && menu) {
        toggleBtn.removeEventListener("click", () => {
          menu.classList.toggle("active");
        });
      }
    };
  }, []);

  return (
    <div>
      <nav className="nav">
        <h1 className="logo">DiscoverJordan</h1>
        <button className="toggle-btn">&#9776;</button>
        <ul className="menu">
          <li><a href="/Homepage"><i className="fas fa-home"></i> <span className="lang-text" data-lang="home">Home</span></a></li>
          <li><a href="/aboutus"><i className="fas fa-info-circle"></i> <span className="lang-text" data-lang="about">About Us</span></a></li>
          <li><a href="/services"><i className="fas fa-cogs"></i> <span className="lang-text" data-lang="services">Services</span></a></li>
          <li><a href="/destinations"><i className="fas fa-map-marker-alt"></i> <span className="lang-text" data-lang="destinations">Destinations</span></a></li>
          <li><a href="/reviews"><i className="fas fa-star"></i> <span className="lang-text" data-lang="reviews">Reviews</span></a></li>
          <li><a href="/gallery"><i className="fas fa-images"></i> <span className="lang-text" data-lang="gallery">Gallery</span></a></li>
          <li><a href="/contactus"><i className="fas fa-envelope"></i> <span className="lang-text" data-lang="contact">Contact Us</span></a></li>
          <li><a href="/booking"><i className="fas fa-calendar-check"></i> <span className="lang-text" data-lang="booking">Booking</span></a></li>
          <li><a href="/login"><i className="fas fa-sign-in-alt"></i> <span className="lang-text" data-lang="login">Login</span></a></li>
        </ul>
        <div className="language-switcher">
          <button onClick={() => switchLanguage('en')}>EN</button>
          <button onClick={() => switchLanguage('ar')}>AR</button>
        </div>
      </nav>
      <header className='headers'>
        <div className="intro-content">
          <h1 className="lang-text" data-lang="explore">Discover the most beautiful destinations in Jordan with our unique travel services! We help you design your perfect trip with ease</h1>
          <div className="cta-buttons">
            <a href="/destinations" className="cta-btn lang-text" data-lang="explore_now">Explore Destinations Now</a>
            <a href="/services" className="cta-btn lang-text" data-lang="request_services">Request Our Services</a>
          </div>
        </div>
      </header>
      <footer className="footer">
        <p data-lang="footer" className="lang-text1">© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </div>
  );
}