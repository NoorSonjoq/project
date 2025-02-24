import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './services.css';

export function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.classList.add('services-body'); // إضافة className عند تحميل الصفحة
    return () => {
      document.body.classList.remove('services-body'); // إزالته عند مغادرة الصفحة
    };
  }, []);

  return (
    <>
      <nav className="nav8">
        <h1 className="logo">DiscoverJordan</h1>
        <button className="toggle-btn8" onClick={toggleMenu}>&#9776;</button>
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/Homepage"><i className="fas fa-home"></i> <span className="lang-text" data-lang="home">Home</span></Link></li>
          <li><Link to="/aboutus"><i className="fas fa-info-circle"></i> <span className="lang-text" data-lang="about">About Us</span></Link></li>
          <li><Link to="/services"><i className="fas fa-cogs"></i> <span className="lang-text" data-lang="services">Services</span></Link></li>
          <li><Link to="/destinations"><i className="fas fa-map-marker-alt"></i> <span className="lang-text" data-lang="destinations">Destinations</span></Link></li>
          <li><Link to="/reviews"><i className="fas fa-star"></i> <span className="lang-text" data-lang="reviews">Reviews</span></Link></li>
          <li><Link to="/gallery"><i className="fas fa-images"></i> <span className="lang-text" data-lang="gallery">Gallery</span></Link></li>
          <li><Link to="/contactus"><i className="fas fa-envelope"></i> <span className="lang-text" data-lang="contact">Contact Us</span></Link></li>
          <li><Link to="/booking"><i className="fas fa-calendar-check"></i> <span className="lang-text" data-lang="booking">Booking</span></Link></li>
          <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> <span className="lang-text" data-lang="login">Login</span></Link></li>
        </ul>
      </nav>

      <header className="header1">
        <div className="intro-content">
          <h1>Our Travel Services</h1>
          <p>Explore the wide range of services we offer for your perfect trip to Jordan.</p>
        </div>
      </header>

      <section className="services">
        <div className="service-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Tourist Tours</h3>
          <p>Discover the main attractions like Petra, Dead Sea, Wadi Rum, and more.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-history"></i>
          <h3>Historical & Cultural Tours</h3>
          <p>Experience the rich history of Jordan with our cultural tours.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-bed"></i>
          <h3>Accommodation Services</h3>
          <p>Find the best hotels or apartments near major attractions.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-car"></i>
          <h3>Transportation Services</h3>
          <p>Rent cars or book private transport to travel between attractions.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-users"></i>
          <h3>Private Tours</h3>
          <p>Custom tours tailored to your interests and preferences.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-utensils"></i>
          <h3>Restaurants</h3>
          <p>Discover Jordan's best dining spots, offering traditional and international cuisines.</p>
        </div>
      </section>

      <footer className="footer8">
        <p>© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}