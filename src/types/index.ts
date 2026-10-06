import type { ComponentType } from "react";

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone";
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  socials: SocialLink[];
  about: string[];
  stats: { value: string; label: string }[];
}

export interface Education {
  course: string;
  institution: string;
  board: string;
  year: string;
  score: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  points: string[];
  tech: string[];
}

export interface Achievement {
  title: string;
  description: string;
  type: "award" | "certification";
}

/** A page section registered in src/sections/index.ts */
export interface SectionConfig {
  id: string;
  label: string;
  /** Show this section in the navbar? */
  inNav?: boolean;
  component: ComponentType;
}
