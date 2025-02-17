import React from 'react';
import "../../src/ForgetPassword/ForgetPassword.css";

export function ForgetPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    console.log('Email submitted:', email);
    alert('A password reset link has been sent to your email.');
  };

  return (
    <div className="ForgetPassword">
      <form onSubmit={handleSubmit}>
        <h1>Forget Password</h1>
        <input
          type="email"
          name="email"
          className="email"
          autoComplete="email"
          placeholder="Enter Your Email"
          required
        />
        <input
          type="submit"
          className="btn"
          value="Send Email"
          autoComplete="off"
          required
        />
      </form>
      <div className="check">
        <input
          type="checkbox"
          id="rememberMe"
          className="check"
          required
        />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <div className="account">
        Don't have an account? <a href="../SignUp/SignUp.html">Sign up</a>
      </div>
    </div>
  );
}