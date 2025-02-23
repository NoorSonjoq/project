import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../login/login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.classList.add('login-body'); // إضافة className عند تحميل الصفحة
    return () => {
      document.body.classList.remove('login-body'); // إزالته عند مغادرة الصفحة
    };
  }, []);
  // تحميل مكتبة Google API عند تشغيل الصفحة
  useEffect(() => {
    const loadGoogleAPI = () => {
      const script = document.createElement('script');
      script.src = "https://accounts.google.com/gsi/client"; // ✅ الحل البديل
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous"; // ✅ يمنع Script error
      script.onload = () => {
        console.log("Google API Loaded");
      };
      document.body.appendChild(script);
    };
  
    loadGoogleAPI();
  }, []);
  

  // معالجة تسجيل الدخول عبر البريد وكلمة المرور
  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Invalid email or password");

      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/Homepage');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // تفعيل وإلغاء رؤية كلمة المرور
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // تسجيل الدخول عبر Google
  const handleGoogleSignIn = async (googleUser) => {
    try {
      const profile = googleUser.getBasicProfile();
      const idToken = googleUser.getAuthResponse().id_token;

      console.log('Google Profile:', profile);
      console.log('Google ID Token:', idToken);

      const response = await fetch('/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });

      const data = await response.json();
      if (data.success) {
        navigate('/dashboard');
      } else {
        setError('Google sign-in failed');
      }
    } catch (err) {
      console.error('Google Sign-In Error:', err);
      setError('Google sign-in error');
    }
  };

  return (
    <>
      <div className="Login">
        <form onSubmit={login}>
          <h1>Login</h1>

          {/* حقل البريد الإلكتروني */}
          <input
            type="email"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="Enter Your Email"
            required
          />

          {/* حقل كلمة المرور */}
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
            <span onClick={togglePassword}>
              <i className={`toggle-pass fa-regular ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
            </span>
          </div>

          {/* رسالة الخطأ */}
          {error && <div id="errorpass">{error}</div>}

          {/* زر تسجيل الدخول */}
          <button type="submit" className="btnn" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>

        {/* تفعيل خيار "تذكرني" */}
        <div className="check2">
          <input type="checkbox" className="check2" id="rememberMe" required />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        {/* روابط التسجيل واستعادة كلمة المرور */}
        <div className="newaccount">
          Don't have an account? <Link to="/signup">Sign up</Link> |{' '}
          <Link to="/forgetpassword">Forgot Password?</Link>
        </div>

        {/* خط فاصل بين طرق تسجيل الدخول */}
        <div className="or-divider">
          <span>OR</span>
        </div>

        {/* زر تسجيل الدخول عبر Google */}
        <div className="g-signin2" data-onsuccess={handleGoogleSignIn}></div>
      </div>

      {/* الفوتر */}
      <footer className="footer2">
        <p data-lang="footer" className="lang-text">© 2025 DiscoverJordan | All rights reserved.</p>
      </footer>
    </>
  );
}
