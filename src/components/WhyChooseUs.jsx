import { FiUser, FiHome, FiHeadphones } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import { images } from '../data/images';
import './WhyChooseUs.css';

const features = [
  {
    icon: FiUser,
    title: 'Trusted Property Experts',
    text: 'Our advisors bring years of local market knowledge, helping you avoid costly mistakes and find genuine value.',
  },
  {
    icon: FiHome,
    title: 'Verified Listings',
    text: 'Every listing on AtiSunya Infratech is site-verified with clear ownership and documentation before it reaches you.',
  },
  {
    icon: FaHandshake,
    title: 'Seamless Buying Process',
    text: 'From shortlisting to registration, we coordinate site visits, paperwork and negotiations so the process stays simple.',
  },
  {
    icon: FiHeadphones,
    title: 'Dedicated Client Support',
    text: 'Our team stays with you after the deal closes too, ready to help with move-in, management or resale questions.',
  },
];

function WhyChooseUs() {
  return (
    <section className="section why">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title">
            Discover The Advantage Of Working With Us
          </h2>
        </div>

        <div className="why__grid">
          <div className="why__image">
            <img
              src={images.whyChooseUs}
              alt="AtiSunya Infratech advisors reviewing a property plan"
              loading="lazy"
            />
          </div>

          <div className="why__features">
            {features.map(({ icon: Icon, title, text }) => (
              <div className="why-card" key={title}>
                <div className="why-card__icon">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="why-card__title">{title}</h3>
                  <p className="why-card__text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
