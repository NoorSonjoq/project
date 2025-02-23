import React, { useEffect } from 'react';
import './services.css';

export function Services() {
  const switchLanguage = (lang) => {
    document.documentElement.setAttribute("lang", lang);
    const langTexts = document.querySelectorAll('[data-lang]');
    langTexts.forEach((element) => {
      const key = element.getAttribute('data-lang');
      element.textContent = translations[lang][key] || element.textContent;
    });
  };
  useEffect(() => {
      document.body.classList.add('services-body'); // إضافة className عند تحميل الصفحة
      return () => {
        document.body.classList.remove('services-body'); // إزالته عند مغادرة الصفحة
      };
    }, []);

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
      footer: "© 2025 DiscoverJordan | All rights reserved.",
      services_title: "Our Travel Services",
      services_intro: "Explore the wide range of services we offer for your perfect trip to Jordan.",
      tourist_tours: "Tourist Tours",
      tourist_tours_desc: "Discover the main attractions like Petra, Dead Sea, Wadi Rum, and more.",
      historical_tours: "Historical & Cultural Tours",
      historical_tours_desc: "Experience the rich history of Jordan with our cultural tours.",
      accommodation: "Accommodation Services",
      accommodation_desc: "Find the best hotels or apartments near major attractions.",
      private_tours: "Private Tours",
      private_tours_desc: "Custom tours tailored to your interests and preferences.",
      restaurants: "Restaurants",
      restaurants_desc: "Discover Jordan's best dining spots, offering traditional and international cuisines.",
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
      footer: "© 2025 DiscoverJordan | جميع الحقوق محفوظة.",
      services_title: "خدماتنا السياحية",
      services_intro: "اكتشف مجموعة واسعة من الخدمات التي نقدمها لرحلتك المثالية في الأردن.",
      tourist_tours: "الجولات السياحية",
      tourist_tours_desc: "اكتشف المعالم الرئيسية مثل البتراء، البحر الميت، وادي رم والمزيد.",
      historical_tours: "الجولات التاريخية والثقافية",
      historical_tours_desc: "استمتع بتاريخ الأردن العريق من خلال جولاتنا الثقافية.",
      accommodation: "خدمات الإقامة",
      accommodation_desc: "ابحث عن أفضل الفنادق أو الشقق القريبة من المعالم الرئيسية.",
      transportation: "خدمات النقل",
      transportation_desc: "استأجر سيارة أو احجز وسيلة نقل خاصة بين المعالم.",
      private_tours: "الجولات الخاصة",
      private_tours_desc: "جولات مخصصة وفقًا لاهتماماتك وتفضيلاتك.",
      restaurants: "المطاعم",
      restaurants_desc: "اكتشف أفضل أماكن تناول الطعام في الأردن، من الأطباق التقليدية إلى العالمية.",
    }
  };

  return (
    <>
      <nav className="nav8">
        <h1 className="logo">DiscoverJordan</h1>
        <button className="toggle-btn8">&#9776;</button>
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

      <header className="header1">
        <div className="intro-content">
          <h1 data-lang="services_title">Our Travel Services</h1>
          <p data-lang="services_intro">
            Explore the wide range of services we offer for your perfect trip to Jordan.
          </p>
        </div>
      </header>

      <section className="services">
        <div className="service-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3 data-lang="tourist_tours">Tourist Tours</h3>
          <p data-lang="tourist_tours_desc">
            Discover the main attractions like Petra, Dead Sea, Wadi Rum, and more.
          </p>
        </div>
        <div className="service-card">
          <i className="fas fa-history"></i>
          <h3 data-lang="historical_tours">Historical & Cultural Tours</h3>
          <p data-lang="historical_tours_desc">
            Experience the rich history of Jordan with our cultural tours.
          </p>
        </div>
        <div className="service-card">
          <i className="fas fa-bed"></i>
          <h3 data-lang="accommodation">Accommodation Services</h3>
          <p data-lang="accommodation_desc">
            Find the best hotels or apartments near major attractions.
          </p>
        </div>
        <div className="service-card">
          <i className="fas fa-car"></i>
          <h3 data-lang="transportation">Transportation Services</h3>
          <p data-lang="transportation_desc">
            Rent cars or book private transport to travel between attractions.
          </p>
        </div>
        <div className="service-card">
          <i className="fas fa-users"></i>
          <h3 data-lang="private_tours">Private Tours</h3>
          <p data-lang="private_tours_desc">
            Custom tours tailored to your interests and preferences.
          </p>
        </div>
        <div className="service-card">
          <i className="fas fa-utensils"></i>
          <h3 data-lang="restaurants">Restaurants</h3>
          <p data-lang="restaurants_desc">
            Discover Jordan's best dining spots, offering traditional and international cuisines.
          </p>
        </div>
      </section>

      <footer className="footer8">
        <p data-lang="footer">© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}