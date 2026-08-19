import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiChevronUp } from 'react-icons/fi';
import { whatsappLink } from '../data/social';
import './FloatingButtons.css';

function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        className="floating-btn floating-btn--whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>

      {visible && (
        <button
          className="floating-btn floating-btn--top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <FiChevronUp size={22} />
        </button>
      )}
    </>
  );
}

export default FloatingButtons;
