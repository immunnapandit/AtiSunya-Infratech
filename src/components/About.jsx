import { images } from '../data/images';
import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__label-col">
          <span className="eyebrow">About Us</span>
        </div>

        <div className="about__heading-col">
          <h2 className="section-title about__heading">
            AtiSunya Infratech is more than a real estate brand
            it&rsquo;s a commitment to trusted, transparent property
            deals.
          </h2>
        </div>

        <div className="about__text-col">
          <p className="about__text">
            With years of on-ground experience across India&rsquo;s
            leading residential markets, AtiSunya Infratech connects
            buyers, sellers and investors with verified properties and
            end-to-end support from search to registration. Our team
            handles the paperwork, negotiation and site visits so you
            can focus on finding the right home.
          </p>
          <a href="#projects" className="btn btn-dark about__cta">More About Us</a>
        </div>

        <div className="about__images-col">
          <div className="about__image about__image--large">
            <img src={images.aboutLarge} alt="The AtiSunya Infratech team reviewing a property plan" loading="lazy" />
          </div>
          <div className="about__image about__image--small">
            <img src={images.aboutSmall} alt="Hands framing a city skyline of residential buildings" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
