import { images } from '../data/images';
import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__content">
          <span className="eyebrow">About Us</span>

          <h2 className="section-title about__heading">
            AtiSunya Infratech is a real estate company focused on
            creating meaningful opportunities across the rapidly
            developing NCR region.
          </h2>

          <p className="about__text">
            Our approach is built around three fundamental principles
            &mdash; trust, transparency and thoughtful real-estate
            solutions.
          </p>
          <p className="about__text">
            We believe property is more than a transaction. It is a
            decision that influences the way people live, work and
            build their future. That&rsquo;s why we focus on projects
            and opportunities that combine location, connectivity,
            quality, lifestyle and long-term potential.
          </p>
          <p className="about__text">
            With a focus on Noida, Greater Noida, Ghaziabad and
            surrounding growth corridors, AtiSunya Infratech aims to
            make the property journey simpler, clearer and more
            reliable for homeowners, investors and businesses.
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
