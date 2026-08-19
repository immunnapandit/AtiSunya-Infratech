import { useEffect, useRef, useState } from 'react';
import { heroSlides, clientAvatars } from '../data/images';
import './Hero.css';

const SLIDE_DURATION = 6000;

const stats = [
  { value: '12+', label: 'Years in real estate' },
  { value: '5,000+', label: 'Families settled' },
  { value: '40+', label: 'Projects delivered' },
];

function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideCount = heroSlides.length;
  const timerRef = useRef(null);

  useEffect(() => {
    if (slideCount < 2 || paused) return undefined;

    // Honour the OS "reduce motion" setting by not auto-advancing.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    timerRef.current = setInterval(
      () => setActive((i) => (i + 1) % slideCount),
      SLIDE_DURATION,
    );
    return () => clearInterval(timerRef.current);
  }, [slideCount, paused]);

  return (
    <section id="home" className="hero">
      <div
        className="hero__slides"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.image}
            className={`hero__slide ${i === active ? 'hero__slide--active' : ''}`}
            aria-hidden={i !== active}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              fetchPriority={i === 0 ? 'high' : 'low'}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <div className="hero__intro">
          <span className="eyebrow eyebrow-light">AtiSunya Infratech</span>
          <h1 className="hero__title">
            Discover Your Perfect
            <br />
            Property with AtiSunya
          </h1>
          <p className="hero__text">
            From premium apartments to plotted developments, we help you
            buy, sell and rent property across India with trusted guidance
            at every step.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-cream">Browse Properties</a>
            <a href="#contact" className="btn btn-outline">Talk to an Advisor</a>
          </div>
        </div>

        <div className="hero__bar">
          <dl className="hero__stats">
            {stats.map(({ value, label }) => (
              <div className="hero__stat" key={label}>
                <dt className="hero__stat-value">{value}</dt>
                <dd className="hero__stat-label">{label}</dd>
              </div>
            ))}
          </dl>

          <div className="hero__trust">
            <div className="hero__avatars">
              {clientAvatars.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
            </div>
            <p>
              Trusted by more than
              <br />
              <strong>5000+ satisfied clients</strong>
            </p>
          </div>
        </div>

        {slideCount > 1 && (
          <div className="hero__dots" role="tablist" aria-label="Hero slides">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.image}
                role="tab"
                aria-selected={i === active}
                aria-label={`Show slide ${i + 1}`}
                className={`hero__dot ${i === active ? 'hero__dot--active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
