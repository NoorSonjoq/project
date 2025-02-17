import React from 'react';
import './reviews.css';
export function Reviews() {
  const switchLanguage = (lang) => {
  
    console.log(`Switching to ${lang}`);
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
          <h1 className="lang-text" data-lang="what_visitors_say">What Our Visitors Say</h1>
          <p className="lang-text" data-lang="read_experiences">Read the experiences of travelers who explored Jordan with us.</p>
        </div>
      </header>

      <section className="reviews-container">
        <div className="review-card">
          <p className="review-text lang-text" data-lang="review_1">
            "Amazing experience! Petra and Wadi Rum were breathtaking. Highly recommend!"
          </p>
          <h3>Sara Ahmad</h3>
        </div>
        <div className="review-card">
          <p className="review-text lang-text" data-lang="review_2">
            "Great guides, smooth booking, and unforgettable adventures. Thank you!"
          </p>
          <h3>Mohammad Ali</h3>
        </div>
        <div className="review-card">
          <p className="review-text lang-text" data-lang="review_3">
            "Loved the local hospitality and beautiful landscapes. Will visit again!"
          </p>
          <h3>Noor Sonjoq</h3>
        </div>
      </section>

      <section className="add-review">
        <h2 className="lang-text" data-lang="leave_review">Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <textarea name="review" placeholder="Write your review here..." required></textarea>
          <button type="submit" className="lang-text" data-lang="submit_review">Submit</button>
        </form>
      </section>

      <footer className="footer">
        <p data-lang="footer" className="lang-text">© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}