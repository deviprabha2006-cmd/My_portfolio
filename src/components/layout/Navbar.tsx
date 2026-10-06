import { useState } from "react";
import { sections } from "@/sections";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import "./Navbar.css";

const navSections = sections.filter((s) => s.inNav !== false);
const ids = sections.map((s) => s.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Primary">
        <a href="#hero" className="navbar__logo">
          {profile.name}<span>.</span>
        </a>
        <button
          id="nav-toggle"
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <ul className={`navbar__links ${open ? "is-open" : ""}`}>
          {navSections.map((s) => (
            <li key={s.id}>
              <a
                id={`nav-${s.id}`}
                href={`#${s.id}`}
                className={active === s.id ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
