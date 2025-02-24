import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Homepage/Homepage.css';

export function Home() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    document.body.classList.add('home-body'); // إضافة className عند تحميل الصفحة
    return () => {
      document.body.classList.remove('home-body'); // إزالته عند مغادرة الصفحة
    };
  }, []);

  return (
    <div>
      <nav className="nav6">
        <h1 className="logo">DiscoverJordan</h1>
        <button className="toggle-btn" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`menu ${menuActive ? 'active' : ''}`}>
          <li><Link to="/Homepage"><i className="fas fa-home"></i> Home</Link></li>
          <li><Link to="/aboutus"><i className="fas fa-info-circle"></i> About Us</Link></li>
          <li><Link to="/services"><i className="fas fa-cogs"></i> Services</Link></li>
          <li><Link to="/destinations"><i className="fas fa-map-marker-alt"></i> Destinations</Link></li>
          <li><Link to="/reviews"><i className="fas fa-star"></i> Reviews</Link></li>
          <li><Link to="/gallery"><i className="fas fa-images"></i> Gallery</Link></li>
          <li><Link to="/contactus"><i className="fas fa-envelope"></i> Contact Us</Link></li>
          <li><Link to="/booking"><i className="fas fa-calendar-check"></i> Booking</Link></li>
          <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
        </ul>
      </nav>

      <header className="headers">
        <div className="intro-content">
          <h1>Discover the most beautiful destinations in Jordan with our unique travel services!</h1>
          <p>We help you design your perfect trip with ease.</p>
          <div className="cta-buttons">
            <Link to="/destinations" className="cta-btn">Explore Destinations Now</Link>
            <Link to="/services" className="cta-btn">Request Our Services</Link>
          </div>
        </div>
      </header>

      </div>
  );
}