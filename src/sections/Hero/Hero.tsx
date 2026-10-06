import { profile } from "@/data/profile";
import Icon from "@/components/ui/Icon";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__blob hero__blob--a" />
      <div className="hero__blob hero__blob--b" />
      <div className="container hero__inner">
        <span className="hero__badge">
          <i /> Open to opportunities
        </span>
        <h1 className="hero__title">
          Hi, I'm <span className="hero__gradient">{profile.name}</span>
        </h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a id="hero-projects" href="#projects" className="btn btn--primary">
            View Projects <Icon name="arrow" size={18} />
          </a>
          <a id="hero-contact" href="#contact" className="btn btn--outline">
            Contact Me
          </a>
        </div>
        <div className="hero__socials">
          {profile.socials.map((s) => (
            <a key={s.label} id={`hero-social-${s.icon}`} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
              <Icon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
