import { Hero } from "ui/Home";
import Footer from "../ui/components/Footer";
import About from "../slices/About";
import BigSection from "../slices/TabSection";

export default async function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <BigSection />
      <Footer />
    </div>
  );
}
