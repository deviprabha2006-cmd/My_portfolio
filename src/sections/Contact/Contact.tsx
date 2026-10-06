import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // No backend: opens the visitor's mail client with the message pre-filled.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const update = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Let's work together" subtitle="Have an opportunity or an idea? I'd love to hear from you." />
        <div className="contact__grid">
          <Reveal className="contact__info">
            <a className="card contact__item" href={`mailto:${profile.email}`}>
              <Icon name="mail" /> <span>{profile.email}</span>
            </a>
            <a className="card contact__item" href={`tel:${profile.phone}`}>
              <Icon name="phone" /> <span>{profile.phone}</span>
            </a>
            <div className="card contact__item">
              <Icon name="pin" /> <span>{profile.location}</span>
            </div>
            <div className="contact__socials">
              {profile.socials.filter((s) => s.icon !== "mail").map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="btn btn--outline">
                  <Icon name={s.icon} size={18} /> {s.label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form className="card contact__form" onSubmit={handleSubmit}>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" required value={form.name} onChange={update("name")} placeholder="Your name" />
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" required value={form.email} onChange={update("email")} placeholder="you@example.com" />
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" required rows={5} value={form.message} onChange={update("message")} placeholder="How can I help?" />
              <button id="contact-submit" type="submit" className="btn btn--primary">
                Send Message <Icon name="arrow" size={18} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
