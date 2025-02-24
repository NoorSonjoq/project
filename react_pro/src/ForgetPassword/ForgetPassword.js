import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../ForgetPassword/ForgetPassword.css";

export function ForgetPassword() {
  useEffect(() => {
    document.body.classList.add("forget-password-body");

    return () => {
      document.body.classList.remove("forget-password-body");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    if (!email) return;
    console.log("Email submitted:", email);
    alert("A password reset link has been sent to your email.");
  };
  return (
    <>
     <div className="ForgetPassword">
      <form onSubmit={handleSubmit}>
        <h1 className="H1">Forget Password</h1>
        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            name="email"
            className="email1"
            autoComplete="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <button type="submit" className="btn">
          submit
        </button>
      </form>
      <div className="options">
        <div className="check1">
          <input type="checkbox" className="check1" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        <div className="account">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
      </div>

      <footer className="footer1">
        <p >
          © 2025 DiscoverJordan | All rights reserved.
        </p>
      </footer>
    </>
  );
}
