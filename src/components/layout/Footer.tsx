import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer style={{ padding: "2rem 0", textAlign: "center", color: "var(--text-muted)", fontSize: "0.9rem", borderTop: "1px solid var(--border)" }}>
      © {new Date().getFullYear()} {profile.name}. Built with React &amp; TypeScript.
    </footer>
  );
}
