import type { Education, Profile } from "@/types";

export const profile: Profile = {
  name: "Deviprabha",
  role: "Software Developer",
  tagline:
    "B.E. CSE student building intelligent mobile apps and machine-learning solutions that solve real-world problems.",
  location: "Hosur, Tamil Nadu",
  email: "deviprabha2006@gmail.com",
  phone: "6380013140",
  socials: [
    // TODO: replace with your real profile URLs
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "Email", href: "mailto:deviprabha2006@gmail.com", icon: "mail" },
  ],
  about: [
    "I'm a Computer Science undergraduate at Sri Sairam College of Engineering (VTU) with a passion for building products that create social impact.",
    "My work spans cross-platform development with Flutter and Firebase, and data-driven ML pipelines using Scikit-learn. I enjoy turning complex problems — like emergency response and disease risk prediction — into clean, usable software.",
    "I'm a hackathon winner, a continuous learner through Google and IBM programs, and I'm looking for opportunities to grow as a software engineer.",
  ],
  stats: [
    { value: "8.074", label: "Current CGPA" },
    { value: "2+", label: "Major Projects" },
    { value: "2", label: "Hackathon Wins" },
    { value: "3", label: "Certifications" },
  ],
};

export const education: Education[] = [
  {
    course: "B.E. – CSE",
    institution: "Sri Sairam College of Engineering",
    board: "Visvesvaraya Technological University (VTU)",
    year: "2027",
    score: "8.074 CGPA",
  },
  {
    course: "12th / HSC",
    institution: "Vailankanni Matric. Higher Secondary School",
    board: "Tamil Nadu State Board",
    year: "2023",
    score: "83%",
  },
  {
    course: "10th / SSC",
    institution: "Vailankanni Matric. Higher Secondary School",
    board: "Tamil Nadu State Board",
    year: "2021",
    score: "100%",
  },
];
