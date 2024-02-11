'use client';

import About from "../slices/About";
import Footer from "../slices/Footer";
import Hero from "../slices/Hero";
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
