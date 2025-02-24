import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Notfound/Notfound.css';

export function Notfound() {
  // إضافة وإزالة className لـ body
  useEffect(() => {
    document.body.classList.add('notfound-body'); // إضافة className عند تحميل الصفحة
    return () => {
      document.body.classList.remove('notfound-body'); // إزالته عند مغادرة الصفحة
    };
  }, []);

  return (
    <>
       <div className="notfound" role="main">
      <h1 className="h">404 - Page Not Found</h1>
      <p className="p">The page you are looking for does not exist.</p>
      <p className="btn-home">
        <Link to="/Homepage">Go back to the homepage</Link>
      </p>
    </div>
    <footer class="footer1">
    <p >© 2025 DiscoverJordan | All rights reserved.</p>
</footer>
    </>
  );
}