import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiMapPin } from 'react-icons/fi';
import { projects } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import { mergeRefs } from '../hooks/mergeRefs';
import './Projects.css';

function Projects() {
  const trackRef = useRef(null);
  const [headerRef, headerVisible] = useReveal();
  const [trackRevealRef, trackVisible] = useReveal({ threshold: 0.05 });

  const scroll = (dir) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.firstChild?.offsetWidth || 300;
    trackRef.current.scrollBy({ left: dir * (cardWidth + 28), behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header projects__header reveal ${headerVisible ? 'reveal--visible' : ''}`}
        >
          <div>
            <span className="eyebrow">Our Projects</span>
            <h2 className="section-title">Featured Developments</h2>
            <p className="section-subtitle">
              Residential projects across Noida, Greater Noida and Ghaziabad
            </p>
          </div>

          <div className="projects__nav">
            <button onClick={() => scroll(-1)} aria-label="Previous projects">
              <FiChevronLeft size={20} />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next projects">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          className={`projects__track ${trackVisible ? 'projects__track--visible' : ''}`}
          ref={mergeRefs(trackRef, trackRevealRef)}
        >
          {projects.map((p, i) => (
            <article
              className={`project-card ${trackVisible ? 'project-card--visible' : ''}`}
              key={p.name}
              style={{ '--reveal-i': Math.min(i, 4) }}
            >
              <div className="project-card__image">
                <img
                  src={p.image}
                  alt={`${p.name}${p.location ? ` — ${p.location}` : ''}${p.developer ? `, by ${p.developer}` : ''}`}
                  loading="lazy"
                />
                {p.status && <span className="project-card__status">{p.status}</span>}
              </div>

              <div className="project-card__body">
                <h3 className="project-card__name">{p.name}</h3>
                {/* Always rendered so cards with and without a developer
                    keep their following rows aligned across the carousel. */}
                <p className="project-card__developer">
                  {p.developer ? `By ${p.developer}` : ''}
                </p>
                <p className="project-card__location">
                  {p.location ? (
                    <>
                      <FiMapPin size={14} aria-hidden="true" />
                      {p.location}
                    </>
                  ) : (
                    'Location to be confirmed'
                  )}
                </p>

                {(p.size || p.config) && (
                  <dl className="project-card__meta">
                    {p.size && (
                      <div>
                        <dt>Size</dt>
                        <dd>{p.size}</dd>
                      </div>
                    )}
                    {p.config && (
                      <div>
                        <dt>Config</dt>
                        <dd>{p.config}</dd>
                      </div>
                    )}
                  </dl>
                )}

                <div className="project-card__footer">
                  {p.price ? (
                    <p className="project-card__price">
                      Starts from
                      <strong>&#8377; {p.price}</strong>
                    </p>
                  ) : (
                    <p className="project-card__price">
                      <strong className="project-card__price--ask">
                        Price on request
                      </strong>
                    </p>
                  )}
                  <a
                    href="#contact"
                    className="btn btn-dark project-card__btn"
                    aria-label={`Enquire about ${p.name}`}
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
