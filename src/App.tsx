import { sections } from "@/sections";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {sections.map(({ id, component: Component }) => (
          <Component key={id} />
        ))}
      </main>
      <Footer />
    </>
  );
}
