import { cld } from '../lib/cloudinary';
import './Logo.css';

const logoSrc = cld('atisunya/logo/atisunya-logo', { width: 400 });

function Logo() {
  return (
    <a href="/" className="logo">
      <img
        src={logoSrc}
        alt="AtiSunya Infratech"
        className="logo__image"
      />
    </a>
  );
}

export default Logo;
