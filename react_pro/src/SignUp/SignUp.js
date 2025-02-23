import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../SignUp/SignUp.css';

export function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    midName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birthday: '',
  });

  const [error, setError] = useState('');

  // إضافة وإزالة className لـ body
  useEffect(() => {
    document.body.classList.add('signup-body'); // إضافة className عند تحميل الصفحة
    return () => {
      document.body.classList.remove('signup-body'); // إزالته عند مغادرة الصفحة
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // التحقق من تطابق كلمات المرور
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // إرسال البيانات (يمكن استبدال هذا الجزء بالاتصال بالخادم)
    console.log('Form Data:', formData);
    alert('Sign up successful!');
  };

  return (
    <>
       <div className="rejist">
      <form onSubmit={handleSubmit}>
        <h1 className='H'>Sign Up</h1>

        {/* First Name */}
        <input
          type="text"
          className="Firstname"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          autoComplete="given-name"
          placeholder="First Name"
          required
        />

        {/* Mid Name */}
        <input
          type="text"
          className="Midname"
          name="midName"
          value={formData.midName}
          onChange={handleInputChange}
          autoComplete="additional-name"
          placeholder="Mid Name"
          required
        />

        {/* Last Name */}
        <input
          type="text"
          className="Lastname"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          autoComplete="family-name"
          placeholder="Last Name"
          required
        />

        {/* Email */}
        <input
          type="email"
          className="Email1"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          autoComplete="email"
          placeholder="Email"
          required
        />

        {/* Password */}
        <input
          type="password"
          className="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          autoComplete="new-password"
          placeholder="Password"
          required
        />

        {/* Confirm Password */}
        <input
          type="password"
          className="ConfirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          autoComplete="new-password"
          placeholder="Confirm Password"
          required
        />

        {/* Phone Number */}
        <input
          type="tel"
          className="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          autoComplete="tel"
          placeholder="Phone Number"
          required
        />

        {/* Birthday */}
        <input
          type="date"
          className="Birthday"
          name="birthday"
          value={formData.birthday}
          onChange={handleInputChange}
          autoComplete="bday"
          placeholder="Birthday"
          required
        />

        {/* Submit Button */}
        <button type="submit" className="btn1">
          Submit
        </button>
      </form>

      {/* Terms & Conditions */}
      <div className="check1">
        <input type="checkbox" className="check1" id="terms" required />
        <label htmlFor="terms">
          I agree to these <a href="#">Terms & Conditions</a>
        </label>
      </div>

      {/* Login Link */}
      <div className="member1">
        Already a member? <Link to="/login">Login here</Link>
      </div>
    </div>
    <footer className="footer1">
        <p data-lang="footer" className="lang-text">© 2025 DiscoverJordan | All rights reserved.</p>
    </footer>
    </>
  );
}