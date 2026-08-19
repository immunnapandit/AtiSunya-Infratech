import { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { images } from '../data/images';
import { useReveal } from '../hooks/useReveal';
import './ContactForm.css';

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [cardRef, cardVisible] = useReveal();

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is wired up yet — this at least confirms receipt to the
    // visitor instead of submitting silently. Replace with a real API/email
    // call before launch.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__image">
        <img src={images.contact} alt="" loading="lazy" />
      </div>

      <div className="container contact__container">
        <div
          ref={cardRef}
          className={`contact__card reveal reveal--scale ${cardVisible ? 'reveal--visible' : ''}`}
        >
          <span className="eyebrow">Get In Touch</span>

          {submitted ? (
            <div className="contact__success" role="status">
              <FiCheckCircle size={40} aria-hidden="true" />
              <h2 className="contact__title">Thank you, {form.name.split(' ')[0] || 'there'}!</h2>
              <p className="contact__subtitle">
                We&rsquo;ve received your enquiry and an AtiSunya advisor
                will call you back shortly.
              </p>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', phone: '', message: '' });
                }}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <h2 className="contact__title">Ready to Take the Next Step?</h2>
              <p className="contact__subtitle">
                Share your requirement and an AtiSunya advisor will call you back.
              </p>

              <form className="contact__form" onSubmit={handleSubmit}>
                <label className="contact__label" htmlFor="name">
                  Name <span className="contact__required">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <label className="contact__label" htmlFor="phone">
                  Phone Number <span className="contact__required">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="numeric"
                  placeholder="Enter 10-digit phone number"
                  value={form.phone}
                  onChange={handleChange}
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  title="Enter a valid 10-digit Indian mobile number"
                  required
                />

                <label className="contact__label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                />

                <button type="submit" className="btn btn-dark contact__submit">
                  Submit Enquiry
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
