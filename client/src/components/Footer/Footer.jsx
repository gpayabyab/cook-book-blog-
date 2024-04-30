import React from 'react';
import './Footer.css'
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Recipe Blog. All rights reserved.</p>
        {/* Add additional footer links or social media links here */}
      </div>
    </footer>
  );
}
export default Footer;