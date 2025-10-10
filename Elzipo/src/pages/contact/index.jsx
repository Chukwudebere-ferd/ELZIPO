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
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations, projects, or just a friendly chat.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@email.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
