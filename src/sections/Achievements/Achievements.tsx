import { achievements } from "@/data/achievements";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading eyebrow="Achievements" title="Awards & certifications" />
        <div className="ach__grid">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <article className={`card ach__card ach__card--${a.type}`}>
                <div className="ach__icon">
                  <Icon name={a.type === "award" ? "trophy" : "badge"} size={24} />
                </div>
                <div>
                  <span className="ach__type">{a.type === "award" ? "Award" : "Certification"}</span>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
