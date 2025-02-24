import React, { useState, useEffect } from 'react';
import '../destinations/destinations.css';

export function Destinations() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive); 
  };
  
  useEffect(() => {
    document.body.classList.add('destinations-body');
    return () => {
      document.body.classList.remove('destinations-body');
    };
  }, []);

   return (
    <>
      <nav className="nav">
        <h1 className="logo">DiscoverJordan</h1>
        <button
          className="toggle-btn"
          onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`menu ${menuActive ? 'active' : ''}`}>
          <li><a href="/Homepage"><i className="fas fa-home"></i> Home</a></li>
          <li><a href="/aboutus"><i className="fas fa-info-circle"></i> About Us</a></li>
          <li><a href="/services"><i className="fas fa-cogs"></i> Services</a></li>
          <li><a href="/destinations"><i className="fas fa-map-marker-alt"></i> Destinations</a></li>
          <li><a href="/reviews"><i className="fas fa-star"></i> Reviews</a></li>
          <li><a href="/gallery"><i className="fas fa-images"></i> Gallery</a></li>
          <li><a href="/contactus"><i className="fas fa-envelope"></i> Contact Us</a></li>
          <li><a href="/booking"><i className="fas fa-calendar-check"></i> Booking</a></li>
          <li><a href="/login"><i className="fas fa-sign-in-alt"></i> Login</a></li>
        </ul>
      </nav>

      <header className="header1">
        <div className="intro-content">
          <h1>Explore the Most Beautiful Destinations in Jordan</h1>
          <p>Discover breathtaking places and plan your next adventure!</p>
        </div>
      </header>

      <section className="destinations">
        <h2>Top Destinations</h2>
        <div className="destinations-container">
          <div className="destination-card">
            <img src="../img/petra.jpg" alt="Petra" />
            <a href="https://www.google.com/maps?q=Petra,+Jordan">
              <h3>Petra</h3>
              <p>The ancient city of Petra, one of the Seven Wonders of the World.</p>
            </a>
          </div>
          <div className="destination-card">
            <img src="../img/Wadi Rum.jpg" alt="Wadi Rum" />
            <a href="https://maps.app.goo.gl/p6CEdyTdbZtNaeqE6">
              <h3>Wadi Rum</h3>
              <p>Experience the stunning desert landscape and adventure activities.</p>
            </a>
          </div>
          <div className="destination-card">
            <img src="../img/Dead Sea.jpg" alt="Dead Sea" />
            <a href="https://maps.app.goo.gl/NWBMat5D1ATuhCqaA">
              <h3>Dead Sea</h3>
              <p>Float effortlessly in the world's saltiest body of water.</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer4">
        <p>© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}