import React from 'react';
import '../gallary/gallary.css'
export function Gallery() {
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

      <section id="gallery" className="gallery">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Gallery</h2>
          </div>
          <div className="row g-0">
            <div className="gallery">
              <a href="../img/img2.jpg" data-lightbox="my-gallery" data-index="1">
                <img src="../img/img2.jpg" alt="Image 2" />
              </a>
              <a href="../img/img3.jpg" data-lightbox="my-gallery" data-index="2">
                <img src="../img/img3.jpg" alt="Image 3" />
              </a>
              <a href="../img/img4.jpg" data-lightbox="my-gallery" data-index="3">
                <img src="../img/img4.jpg" alt="Image 4" />
              </a>
              <a href="../img/Dead Sea.jpg" data-lightbox="my-gallery" data-index="4">
                <img src="../img/Dead Sea.jpg" alt="Dead Sea" />
              </a>
              <a href="../img/petra.jpg" data-lightbox="my-gallery" data-index="5">
                <img src="../img/petra.jpg" alt="Petra" />
              </a>
              <a href="../img/Wadi Rum.jpg" data-lightbox="my-gallery" data-index="6">
                <img src="../img/Wadi Rum.jpg" alt="Wadi Rum" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}