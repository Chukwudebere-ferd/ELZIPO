import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css'; // optional external styling

export default function Contact() {
  const [state, handleSubmit] = useForm("xyznjygd");

  if (state.succeeded) {
    return (
      <div className="thank-you">
        <h2>Thanks for reaching out!</h2>
        <p>I’ll get back to you as soon as possible 🚀</p>
      </div>
    );
  }

  return (
    <div className="page contact-minimal main-container">
      <header className="contact-header-minimal fade-in-up">
        <p className="label">Get In Touch</p>
        <h1 className="contact-title-serif">Let's work <br /> together.</h1>
      </header>

      <section className="contact-content-minimal fade-in-up" style={{ animationDelay: '0.1s' }}>
        <form onSubmit={handleSubmit} className="contact-form-minimal">
          <div className="form-group-minimal">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-group-minimal">
            <textarea
              id="message"
              name="message"
              placeholder="YOUR MESSAGE"
              rows="4"
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" className="submit-btn-minimal" disabled={state.submitting}>
            {state.submitting ? "SENDING..." : "SEND MESSAGE →"}
          </button>
        </form>
      </section>

      <footer className="contact-footer-minimal fade-in-up" style={{ animationDelay: '0.2s' }}>
        <p className="muted">ELZIPO106@GMAIL.COM</p>
        <div className="social-links-minimal">
          <a href="https://github.com/Chukwudebere-ferd" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a href="https://x.com/elzipoferd" target="_blank" rel="noopener noreferrer">TWITTER</a>
          <a href="https://wa.me/2349047594112" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
        </div>
      </footer>
    </div>
  );
}
