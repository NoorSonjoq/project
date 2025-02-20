import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../ForgetPassword/ForgetPassword.css';

export function ForgetPassword() {
  useEffect(() => {
    document.body.classList.add('forget-password-body');

    return () => {
      document.body.classList.remove('forget-password-body');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    console.log("Email submitted:", email);
    alert("A password reset link has been sent to your email.");
  };

  return (
    <div className="ForgetPassword">
      <form onSubmit={handleSubmit}>
        <h1>Forget Password</h1>

        <input 
          type="email" 
          name="email" 
          className="email1" 
          autoComplete="email" 
          placeholder="Enter Your Email" 
          required />

        <div className="check1">
          <input type="checkbox" className="check" id="rememberMe" required />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        <input type="submit" className="btn" value="Send Email" autoComplete="off" />
      </form>

      <div className="account">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}