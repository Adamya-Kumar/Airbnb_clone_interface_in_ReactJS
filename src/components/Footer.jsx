import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Centre</a></li>
            <li><a href="#">AirCover</a></li>
            <li><a href="#">Anti-discrimination</a></li>
            <li><a href="#">Disability support</a></li>
            <li><a href="#">Cancellation options</a></li>
            <li><a href="#">Report neighbourhood concern</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Hosting</h4>
          <ul>
            <li><a href="#">Airbnb your home</a></li>
            <li><a href="#">AirCover for Hosts</a></li>
            <li><a href="#">Hosting resources</a></li>
            <li><a href="#">Community forum</a></li>
            <li><a href="#">Hosting responsibly</a></li>
            <li><a href="#">Join a free Hosting class</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Airbnb</h4>
          <ul>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">New features</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Airbnb.org emergency stays</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Airbnb, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Sitemap</a> · <a href="#">Company details</a></p>
        <div className="footer-icons">
          <span><a href="#">🌐 English (IN)</a></span>
          <span><a href="#">₹ INR</a></span>
          <span><a href="#"><i className="fa fa-facebook"></i></a></span>
          <span><a href="#"><i className="fa fa-twitter"></i></a></span>
          <span><a href="#"><i className="fa fa-instagram"></i></a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
