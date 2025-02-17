import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Notfound/Notfound.css'

export function Notfound() {
  return (
    <div id="notfound" role="main">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
    </div>
  );
}