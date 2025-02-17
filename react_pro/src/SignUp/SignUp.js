import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../SignUp/SignUp.css'
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


    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }


    console.log('Form Data:', formData);
    alert('Sign up successful!');
  };

  return (
    <div className="rejist">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
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
          className="Lastname"
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
          className="Email"
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
          className="Confirm Password"
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
        {/* Error Message */}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {/* Submit Button */}
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
      {/* Terms & Conditions */}
      <div className="check">
        <input type="checkbox" className="check" id="terms" required />
        <label htmlFor="terms">
          I agree to these <a href="#">Terms & Conditions</a>
        </label>
      </div>
      {/* Login Link */}
      <div className="member">
        Already a member? <Link to="/login">Login here</Link>
      </div>
    </div>
  );
}