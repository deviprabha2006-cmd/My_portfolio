import { skills } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Technologies I work with" subtitle="Languages, frameworks and tools I use to build and ship." />
        <div className="skills__grid">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <article className="card skills__card">
                <h3>{group.category}</h3>
                <div className="skills__tags">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
