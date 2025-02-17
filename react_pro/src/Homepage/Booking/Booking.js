import React from "react";
import { Link } from "react-router-dom";
import '../Booking/Booking.css'
export function Booking() {
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
      page_title_home: "Book Now",
      full_name: "Full Name",
      email: "Email",
      phone: "Phone Number",
      booking_date: "Booking Date",
      submit_booking: "Submit Booking",
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
      page_title_home: "احجز الآن",
      full_name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      booking_date: "تاريخ الحجز",
      submit_booking: "إرسال الحجز",
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
          <h1 className="lang-text" data-lang="page_title_home">Book Now</h1>
        </div>
      </header>
      <section className="form-section">
        <div className="form-container">
          <form action="/submit-booking" method="POST">
            <label htmlFor="name" className="lang-text" data-lang="full_name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />

            <label htmlFor="email" className="lang-text" data-lang="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="phone" className="lang-text" data-lang="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />

            <label htmlFor="date" className="lang-text" data-lang="booking_date">Booking Date:</label>
            <input type="date" id="date" name="date" required />

            <button type="submit" className="submit-button lang-text" data-lang="submit_booking">Submit Booking</button>
          </form>
        </div>
      </section>
      <footer className="footer">
        <p className="lang-text" data-lang="footer">© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}