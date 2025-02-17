import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router

export function Login() {
  // State for form inputs and error handling
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Save token to localStorage
        window.location.href = '/Homepage.html'; // Redirect to homepage
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      setError(error.message); // Display error message
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    const idToken = googleUser.getAuthResponse().id_token;

    fetch('/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.href = '/dashboard'; // Redirect to dashboard
        } else {
          console.log('Google sign-in failed');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="Login">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        {/* Email Input */}
        <input
          type="email"
          className="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="Enter Your Email"
          required
        />
        {/* Password Input */}
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            className="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Password"
            required
          />
          {/* Toggle Password Visibility */}
          <span onClick={togglePasswordVisibility}>
            <i
              className={`toggle-pass fa-regular ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
            ></i>
          </span>
        </div>
        {/* Error Message */}
        {error && <div id="errorpass" style={{ color: 'red' }}>{error}</div>}
        {/* Submit Button */}
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      {/* Remember Me Checkbox */}
      <div className="check">
        <input type="checkbox" className="check" id="rememberMe" required />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      {/* Sign Up and Forgot Password Links */}
      <div className="newaccount">
        Don't have an account?{' '}
        <Link to="/signup">Sign up</Link> |{' '}
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      {/* OR Divider */}
      <div className="or-divider">
        <span>OR</span>
      </div>
      {/* Google Sign-In Button */}
      <div
        className="g-signin2"
        data-onsuccess={handleGoogleSignIn}
        data-clientid="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"
      ></div>
    </div>
  );
}