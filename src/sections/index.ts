import type { SectionConfig } from "@/types";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Achievements from "./Achievements/Achievements";
import Contact from "./Contact/Contact";

/**
 * SECTION REGISTRY – single source of truth.
 * To add a new section: create src/sections/<Name>/<Name>.tsx,
 * then add one entry below. Navbar + page update automatically.
 * Order here = order on the page.
 */
export const sections: SectionConfig[] = [
  { id: "hero", label: "Home", component: Hero },
  { id: "about", label: "About", component: About },
  { id: "skills", label: "Skills", component: Skills },
  { id: "projects", label: "Projects", component: Projects },
  { id: "achievements", label: "Achievements", component: Achievements },
  { id: "contact", label: "Contact", component: Contact },
];
