import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../aboutus/aboutus.css';

export function Aboutus() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.classList.add('aboutus-body');
    return () => {
      document.body.classList.remove('aboutus-body');
    };
  }, []);

  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle-btnn");
    const menu = document.querySelector(".menu");
  
    toggleBtn.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  });

  return (
    <>
      <nav className="navv">
        <h1 className="logo">DiscoverJordan</h1>
        <button className="toggle-btnn" onClick={toggleMenu}>&#9776;</button>
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/Homepage"><i className="fas fa-home"></i>Home</Link></li>
          <li><Link to="/aboutus"><i className="fas fa-info-circle"></i> About Us</Link></li>
          <li><Link to="/services"><i className="fas fa-cogs"></i> Services</Link></li>
          <li><Link to="/destinations"><i className="fas fa-map-marker-alt"></i>Destinations</Link></li>
          <li><Link to="/reviews"><i className="fas fa-star"></i> Reviews</Link></li>
          <li><Link to="/gallery"><i className="fas fa-images"></i> Gallery</Link></li>
          <li><Link to="/contactus"><i className="fas fa-envelope"></i> Contact Us</Link></li>
          <li><Link to="/booking"><i className="fas fa-calendar-check"></i> Booking</Link></li>
          <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
        </ul>
      </nav>
      <header className="header2">
        <section className="content">
          <h1 >Who We Are</h1>
          <p>
            At DiscoverJordan, we offer unforgettable travel experiences that
            showcase Jordan’s rich history, stunning landscapes, and warm
            hospitality. From Petra to the Dead Sea, we ensure each journey is
            memorable.
          </p>
          <h1>Our Vision</h1>
          <p >
            To be the leading travel platform in Jordan, providing immersive and
            authentic experiences that connect travelers with our local culture.
          </p>
          <h1 >Our Mission</h1>
          <p >
            We curate personalized travel experiences for all types of travelers.
            Our focus is on sustainability, supporting local communities, and
            providing a seamless travel experience.
          </p>
          <h1 >Why Choose DiscoverJordan?</h1>
          <p >
            Choose DiscoverJordan for expert-guided tours, exclusive access to
            hidden gems, and authentic cultural experiences. With our easy and
            secure booking, your journey will be smooth from start to finish.
          </p>
        </section>
      </header>

      <footer className="footerr">
        <p >© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
};