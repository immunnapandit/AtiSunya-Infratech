import { policies } from '../data/policies';
import './PolicyPage.css';

function PolicyPage({ path }) {
  const policy = policies[path];

  if (!policy) return null;

  return (
    <section className="policy-page">
      <div className="container policy-page__container">
        <p className="eyebrow">Policy</p>
        <h1>{policy.title}</h1>
        <p className="policy-page__updated">Last updated: 21 August 2026</p>
        <p className="policy-page__intro">{policy.description}</p>

        <div className="policy-page__content">
          {policy.sections.map((section) => (
            <section key={section.heading} className="policy-page__section">
              <h2>{section.heading}</h2>
              {section.body && <p>{section.body}</p>}
              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="policy-page__contact">
          Questions about this policy? Please reach us through <a href="/#contact">our contact form</a>.
        </div>
      </div>
    </section>
  );
}

export default PolicyPage;
