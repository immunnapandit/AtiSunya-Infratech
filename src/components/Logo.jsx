import './Logo.css';

const logoSrc = '/images/Logo/AtiSunyaInfratechLogo.png';

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
