import { profile, education } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="About Me" title="Passionate about building with purpose" />
        <div className="about__grid">
          <Reveal className="about__text">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about__stats">
              {profile.stats.map((s) => (
                <div key={s.label} className="about__stat card">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h3 className="about__edu-title">Education</h3>
            <ol className="about__timeline">
              {education.map((e) => (
                <li key={e.course} className="card">
                  <span className="tag">{e.year}</span>
                  <h4>{e.course}</h4>
                  <p>{e.institution}</p>
                  <small>{e.board} · {e.score}</small>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
