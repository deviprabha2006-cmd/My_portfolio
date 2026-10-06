import Reveal from "./Reveal";
import "./SectionHeading.css";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <Reveal className="section-heading">
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__sub">{subtitle}</p>}
    </Reveal>
  );
}
