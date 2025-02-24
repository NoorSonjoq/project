import React, { useState, useEffect } from 'react';
import '../contactus/contactus.css';

export function Contactus() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    document.body.classList.add('contactus-body');
    return () => {
      document.body.classList.remove('contactus-body');
    };
  }, []);

  return (
    <>
      <nav className="nav3">
        <h1 className="logo">DiscoverJordan</h1>
        <button className="toggle-btn3" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`menu ${menuActive ? 'active' : ''}`}>
          <li>
            <a href="/Homepage">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li>
            <a href="/aboutus">
              <i className="fas fa-info-circle"></i> About Us
            </a>
          </li>
          <li>
            <a href="/services">
              <i className="fas fa-cogs"></i> Services
            </a>
          </li>
          <li>
            <a href="/destinations">
              <i className="fas fa-map-marker-alt"></i> Destinations
            </a>
          </li>
          <li>
            <a href="/reviews">
              <i className="fas fa-star"></i> Reviews
            </a>
          </li>
          <li>
            <a href="/gallery">
              <i className="fas fa-images"></i> Gallery
            </a>
          </li>
          <li>
            <a href="/contactus">
              <i className="fas fa-envelope"></i> Contact Us
            </a>
          </li>
          <li>
            <a href="/booking">
              <i className="fas fa-calendar-check"></i> Booking
            </a>
          </li>
          <li>
            <a href="/login">
              <i className="fas fa-sign-in-alt"></i> Login
            </a>
          </li>
        </ul>
      </nav>

      <header className="header1">
        <div className="intro-content3">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Please reach out with any questions or comments.</p>
        </div>
      </header>

      <section className="contact-section3">
        <div className="form-container3">
          <h2>Get In Touch</h2>
          <form action="#" method="post">
            <input className="Name" type="text" name="name" placeholder="Full Name" required />
            <input className="Email" type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info3">
          <div className="address">
            <h3>Our Address</h3>
            <p>Amman, Jordan</p>
          </div>
          <div className="social">
            <h3>Follow Us</h3>
            <a href="#" className="social-icon3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon3">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer3">
        <p>© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}