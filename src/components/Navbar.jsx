import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape, and stop the page scrolling behind it
  // while it's open.
  useEffect(() => {
    if (!mobileOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo />

        <nav
          id="primary-navigation"
          className={`navbar__nav ${mobileOpen ? 'navbar__nav--open' : ''}`}
        >
          {navLinks.map((link) => (
            <div key={link.label} className="navbar__item">
              <a href={link.href} className="navbar__link" onClick={closeMobileMenu}>
                {link.label.toUpperCase()}
              </a>
            </div>
          ))}

          <a href="#contact" className="btn btn-dark navbar__cta navbar__cta--mobile" onClick={closeMobileMenu}>
            Get In Touch
          </a>
        </nav>

        <a href="#contact" className="btn btn-cream navbar__cta">
          Get In Touch
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <button
          className="navbar__scrim"
          aria-hidden="true"
          tabIndex={-1}
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
}

export default Navbar;
