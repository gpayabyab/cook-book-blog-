import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">  
        <p>&copy; {currentYear} Recipe Blog. All rights reserved.</p>
        {/* Add additional footer links or social media links here */}
    </footer>
  );
}
export default Footer;