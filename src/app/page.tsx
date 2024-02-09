import Footer from "../ui/components/Footer";
import About from "../slices/About";
import BigSection from "../slices/TabSection";

export default async function Home() {
  return (
    <div className="relative">
      <About />
      <BigSection />
      <Footer />
    </div>
  );
}
