import React from 'react';
import './services.css';
export function Services() {
  const switchLanguage = (lang) => {
    console.log(`Switching to ${lang}`);
  };

  return (
    <>
      <nav className="nav">
        <h1 className="logo">DiscoverJordan</h1>
        <button className="toggle-btn">&#9776;</button>
        <ul className="menu">
          <li><a href="./Homepage.html"><i className="fas fa-home"></i> <span className="lang-text" data-lang="home">Home</span></a></li>
          <li><a href="./aboutus.html"><i className="fas fa-info-circle"></i> <span className="lang-text" data-lang="about">About Us</span></a></li>
          <li><a href="./services.html"><i className="fas fa-cogs"></i> <span className="lang-text" data-lang="services">Services</span></a></li>
          <li><a href="./destinations.html"><i className="fas fa-map-marker-alt"></i> <span className="lang-text" data-lang="destinations">Destinations</span></a></li>
          <li><a href="./reviews.html"><i className="fas fa-star"></i> <span className="lang-text" data-lang="reviews">Reviews</span></a></li>
          <li><a href="./gallary.html"><i className="fas fa-images"></i> <span className="lang-text" data-lang="gallery">Gallery</span></a></li>
          <li><a href="./contactus.html"><i className="fas fa-envelope"></i> <span className="lang-text" data-lang="contact">Contact Us</span></a></li>
          <li><a href="../Homepage/Booking.html"><i className="fas fa-calendar-check"></i> <span className="lang-text" data-lang="booking">Booking</span></a></li>
          <li><a href="../login/login.html"><i className="fas fa-sign-in-alt"></i> <span className="lang-text" data-lang="login">Login</span></a></li>
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

      <footer className="footer">
        <p data-lang="footer">© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}