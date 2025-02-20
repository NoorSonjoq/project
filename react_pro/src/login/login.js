import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../login/login.css';

export function Login() {
  // State for form inputs and error handling
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Add class to body on component mount and remove on unmount
  useEffect(() => {
    document.body.classList.add('login-body');
    return () => {
      document.body.classList.remove('login-body');
    };
  }, []);

  // Handle login form submission
  const login = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("https://reqres.in/api/login", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Invalid email or password");
      }
    })
    .then((data) => {
      localStorage.setItem('token', data.token);
      window.location.href = '/Homepage';
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle Google Sign-In (optional)
  const handleGoogleSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    const idToken = googleUser.getAuthResponse().id_token;

    console.log('Google Profile:', profile);
    console.log('Google ID Token:', idToken);

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
        window.location.href = '/dashboard';
      } else {
        console.log('Google sign-in failed');
      }
    })
    .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="Login">
      <form onSubmit={login}>
        <h1>Login</h1>

        {/* Email Input */}
        <input
          type="email"
          className="email"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Password"
            required
          />
          {/* Toggle Password Visibility */}
          <span onClick={togglePassword}>
            <i
              className={`toggle-pass fa-regular ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
            ></i>
          </span>
        </div>

        {/* Error Message */}
        {error && <div id="errorpass">{error}</div>}

        {/* Submit Button */}
        <button type="submit" className="btn" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>

      {/* Remember Me Checkbox */}
      <div className="check2">
        <input type="checkbox" className="check" id="rememberMe" required />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>

      {/* Sign Up and Forgot Password Links */}
      <div className="newaccount">
        Don't have an account? <Link to="/signup">Sign up</Link> |{' '}
        <Link to="/forgetpassword">Forgot Password?</Link>
      </div>

      {/* OR Divider */}
      <div className="or-divider">
        <span>OR</span>
      </div>

      {/* Google Sign-In Button (optional) */}
      <div
        className="g-signin2"
        data-onsuccess={handleGoogleSignIn}
        data-clientid="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"
      ></div>
    </div>
  );
}