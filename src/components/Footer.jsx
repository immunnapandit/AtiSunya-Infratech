import { useState } from 'react';
import Logo from './Logo';
import { socialLinks, whatsappLink } from '../data/social';
import { useReveal } from '../hooks/useReveal';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
];

const companyLinks = [
  { label: 'Contact Us', href: '/#contact' },
  { label: 'Chat on WhatsApp', href: whatsappLink, external: true },
];

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [gridRef, gridVisible] = useReveal({ threshold: 0.05 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div
        ref={gridRef}
        className={`container footer__grid reveal ${gridVisible ? 'reveal--visible' : ''}`}
      >
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">Stay updated with our latest news and insights.</p>

          {subscribed ? (
            <p className="footer__subscribe-success" role="status">
              Thanks — you&rsquo;re on the list.
            </p>
          ) : (
            <form className="footer__subscribe" onSubmit={handleSubmit}>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Add email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-dark footer__subscribe-btn">Subscribe</button>
            </form>
          )}
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Get In Touch</h3>
          <ul>
            {companyLinks.map((l) => (
              <li key={l.label}>
                {l.external ? (
                  <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                ) : (
                  <a href={l.href}>{l.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Follow Us</h3>
          <ul>
            {socialLinks.filter((s) => s.href).map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>{new Date().getFullYear()} Copyright &copy; AtiSunya Infratech</p>
        <div className="footer__legal">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          <a href="/refund-and-cancellation-policy">Refund Policy</a>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/cookie-policy">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
