import { FiHome, FiTag, FiKey, FiGrid, FiTrendingUp, FiMessageCircle, FiArrowRight } from 'react-icons/fi';
import { useReveal } from '../hooks/useReveal';
import './Services.css';

const services = [
  {
    icon: FiHome,
    title: 'Buy Property',
    text: 'Browse verified apartments, villas and plots across Noida and Greater Noida, with expert help finding a home that fits your budget and lifestyle.',
  },
  {
    icon: FiTag,
    title: 'Sell Property',
    text: 'List your property with us for accurate pricing, wide buyer reach and support through every step of the sale.',
  },
  {
    icon: FiKey,
    title: 'Rent Property',
    text: 'Find move-in ready homes or reliable tenants with background-checked listings and simple, transparent agreements.',
  },
  {
    icon: FiGrid,
    title: 'Property Management',
    text: 'From maintenance to tenant relations, we manage your property so it stays well-kept and generates steady returns.',
  },
  {
    icon: FiTrendingUp,
    title: 'Property Investment',
    text: 'Get data-backed guidance on high-growth corridors like Noida Extension and Greater Noida West to make confident investment decisions.',
  },
  {
    icon: FiMessageCircle,
    title: 'Property Consultation',
    text: 'Talk to our advisors about loans, legal documentation and market trends before you make your next move.',
  },
];

function Services() {
  const [headerRef, headerVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal({ threshold: 0.05 });

  return (
    <section id="services" className="section services">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header section-header--center reveal ${headerVisible ? 'reveal--visible' : ''}`}
        >
          <span className="eyebrow eyebrow-light">Services</span>
          <h2 className="section-title services__title">
            Discover Our Professional Real Estate Services
          </h2>
        </div>

        <div
          ref={gridRef}
          className={`services__grid ${gridVisible ? 'services__grid--visible' : ''}`}
        >
          {services.map(({ icon: Icon, title, text }, i) => (
            <div
              className="service-card"
              key={title}
              style={{ '--reveal-i': i }}
            >
              <div className="service-card__icon">
                <Icon size={22} />
              </div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__text">{text}</p>
              <a
                href="#contact"
                className="service-card__link"
                aria-label={`Enquire about ${title}`}
              >
                More Details <FiArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
