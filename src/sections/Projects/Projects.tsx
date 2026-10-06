import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Projects" title="Things I've built" subtitle="Real-world problems, solved with code." />
        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="card projects__card">
                <span className="projects__num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p className="projects__sub">{p.subtitle}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="projects__tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
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
