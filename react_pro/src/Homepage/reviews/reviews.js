import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './reviews.css';

export function Reviews() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const review = {
      name: formData.get('name'),
      text: formData.get('review'),
    };
    console.log('Review Submitted:', review);
    alert('Thank you for your review!');
    e.target.reset();
  };

  // إضافة وإزالة className لـ body
  useEffect(() => {
    document.body.classList.add('Reviews-body'); // إضافة className عند تحميل الصفحة
    return () => {
      document.body.classList.remove('Reviews-body'); // إزالته عند مغادرة الصفحة
    };
  }, []);

  return (
    <>
      <nav className="nav7">
        <h1 className="logo">DiscoverJordan</h1>
        <button className="toggle-btn7" onClick={toggleMenu}>&#9776;</button>
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
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

      <header className="header1">
        <div className="intro-content">
          <h1>What Our Visitors Say</h1>
          <p>Read the experiences of travelers who explored Jordan with us.</p>
        </div>
      </header>

      <section className="reviews-container">
        <div className="review-card">
          <p>"Amazing experience! Petra and Wadi Rum were breathtaking. Highly recommend!"</p>
          <h3>Sara Ahmad</h3>
        </div>
        <div className="review-card">
          <p>"Great guides, smooth booking, and unforgettable adventures. Thank you!"</p>
          <h3>Mohammad Ali</h3>
        </div>
        <div className="review-card">
          <p>"Loved the local hospitality and beautiful landscapes. Will visit again!"</p>
          <h3>Noor Sonjoq</h3>
        </div>
      </section>

      <section className="add-review">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <textarea name="review" placeholder="Write your review here..." required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer className="footer7">
        <p>© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}