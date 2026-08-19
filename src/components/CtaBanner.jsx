import { images } from '../data/images';
import { useReveal } from '../hooks/useReveal';
import './CtaBanner.css';

function CtaBanner() {
  const [leftRef, leftVisible] = useReveal();
  const [rightRef, rightVisible] = useReveal();

  return (
    <section className="cta-banner">
      <div className="cta-banner__bg">
        <img src={images.ctaBanner} alt="" loading="lazy" />
        <div className="cta-banner__overlay" />
      </div>

      <div className="container cta-banner__content">
        <div
          ref={leftRef}
          className={`cta-banner__left reveal ${leftVisible ? 'reveal--visible' : ''}`}
        >
          <span className="eyebrow eyebrow-light">AtiSunya Infratech</span>
          <h2 className="section-title cta-banner__title">
            Start Your Journey To
            <br />
            Your New Home Today
          </h2>
        </div>

        <div
          ref={rightRef}
          className={`cta-banner__right reveal ${rightVisible ? 'reveal--visible' : ''}`}
          style={{ '--reveal-i': 1 }}
        >
          <p className="cta-banner__text">
            Talk to an AtiSunya Infratech advisor today and take the
            first step toward a property that fits your life and budget.
          </p>
          <div className="cta-banner__actions">
            <a href="#projects" className="btn btn-cream">Browse Properties</a>
            <a href="#contact" className="btn btn-outline">Meet Our Agent</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
