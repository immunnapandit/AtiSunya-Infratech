import { useState } from 'react';
import { images } from '../data/images';
import './ContactForm.css';

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__image">
        <img src={images.contact} alt="" loading="lazy" />
      </div>

      <div className="container contact__container">
        <div className="contact__card">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="contact__title">Still Confused?</h2>
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
              placeholder="Enter 10-digit phone number"
              value={form.phone}
              onChange={handleChange}
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
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
