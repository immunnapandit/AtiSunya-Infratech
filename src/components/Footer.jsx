import { useState } from 'react';
import Logo from './Logo';
import './Footer.css';

const quickLinks = ['Home', 'About', 'Services', 'Project', 'Property'];
const supportLinks = ['Customer Service', 'Help Center', 'Contact', 'Blog', 'Faq'];
const socialLinks = ['Facebook', 'Instagram', 'X Twitter', 'Linkedin', 'Whatsapp'];

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">Stay updated with our latest news and insights.</p>
          <form className="footer__subscribe" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Add email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-dark footer__subscribe-btn">Subscribe</button>
          </form>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Link</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l}><a href="#home">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Support</h4>
          <ul>
            {supportLinks.map((l) => (
              <li key={l}><a href="#contact">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Follow Us</h4>
          <ul>
            {socialLinks.map((l) => (
              <li key={l}><a href="#home">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>2026 Copyright &copy; AtiSunya Infratech</p>
        <div className="footer__legal">
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms &amp; Services</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
