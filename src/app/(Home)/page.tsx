import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Features";
import React from "react";

export default function Home() {
  return (
    <main className="font-poppins">
      <HeroSection />
      <Projects 
        header="Projects"
      />
    </main>
  )
}
