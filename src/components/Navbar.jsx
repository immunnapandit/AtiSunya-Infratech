import { useState, useEffect } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Property', href: '#projects', dropdown: ['Buy Property', 'Rent Property', 'Sell Property'] },
  { label: 'Pages', href: '#', dropdown: ['Home', 'About', 'Services', 'Contact'] },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo light={!scrolled} />

        <nav className={`navbar__nav ${mobileOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="navbar__item"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
            >
              <a href={link.href} className="navbar__link">
                {link.label.toUpperCase()}
                {link.dropdown && <FiChevronDown size={14} />}
              </a>
              {link.dropdown && openDropdown === link.label && (
                <div className="navbar__dropdown">
                  {link.dropdown.map((item) => (
                    <a key={item} href="#" className="navbar__dropdown-link">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <a href="#contact" className="btn btn-cream navbar__cta">
          Get In Touch
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
