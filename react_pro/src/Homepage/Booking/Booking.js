import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Booking/Booking.css';

export function Booking() {
  useEffect(() => {
    document.body.classList.add('booking-body'); 
    return () => {
      document.body.classList.remove('booking-body'); 
    };
  }, []);

  useEffect(() => {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", handleFormSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleFormSubmit);
      }
    };
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();
    const isBookingSuccessful = Math.random() > 0.5;
    if (isBookingSuccessful) {
      showNotification("تم الحجز بنجاح!", true);
    } else {
      showNotification("حدث خطأ أثناء الحجز. يرجى المحاولة مرة أخرى.", false);
    }
  }

  function showNotification(message, isSuccess) {
    const notification = document.getElementById("notification");
    const notificationMessage = document.getElementById("notification-message");

    if (!notification || !notificationMessage) return;

    notificationMessage.textContent = message;
    if (isSuccess) {
      notification.classList.remove("error");
      notification.classList.add("success");
    } else {
      notification.classList.remove("success");
      notification.classList.add("error");
    }

    notification.style.display = "block";

    setTimeout(() => {
      notification.style.display = "none";
    }, 5000);
  }

  function closeNotification() {
    const notification = document.getElementById("notification");
    if (notification) {
      notification.style.display = "none";
    }
  }

  useEffect(() => {
    const toggleBtn = document.querySelector(".toggle-btn2");
    const menu = document.querySelector(".menu");
  
    function handleToggle() {
      menu.classList.toggle("active");
    }
  
    if (toggleBtn && menu) {
      toggleBtn.addEventListener("click", handleToggle);
    }
  
    return () => {
      if (toggleBtn) {
        toggleBtn.removeEventListener("click", handleToggle);
      }
    };
  }, []);

  return (
    <>
      <nav className="nav2">
        <h1 className="logo">DiscoverJordan</h1>
        <button className="toggle-btn2"><i className="fas fa-bars"></i></button>
        <ul className="menu">
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
          <h1>Book Now</h1>
        </div>
      </header>

      <section className="form-section">
        <div className="form-container">
          <form action="/submit-booking" method="POST">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />

            <label htmlFor="date">Booking Date:</label>
            <input type="date" id="date" name="date" required />

            <fieldset>
              <legend>Select Your Services:</legend>
              <label className="check"><input type="checkbox" name="services[]" defaultValue="Tourist Tours" /> Tourist Tours</label><br />
              <label className="check"><input type="checkbox" name="services[]" defaultValue="Historical & Cultural Tours" /> Historical & Cultural Tours</label><br />
              <label className="check"><input type="checkbox" name="services[]" defaultValue="Accommodation Services" /> Accommodation Services</label><br />
              <label className="check"><input type="checkbox" name="services[]" defaultValue="Transportation Services" /> Transportation Services</label><br />
              <label className="check"><input type="checkbox" name="services[]" defaultValue="Private Tours" /> Private Tours</label><br />
              <label className="check"><input type="checkbox" name="services[]" defaultValue="Restaurants" /> Restaurants</label>
            </fieldset>

            <button type="submit" className="submitbutton ">Submit Booking</button>
          </form>
        </div>
      </section>

      <div id="notification" className="notification">
        <p id="notification-message"></p>
        <button onClick={closeNotification}>X</button>
      </div>

      <footer className="footer2">
        <p>© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}
