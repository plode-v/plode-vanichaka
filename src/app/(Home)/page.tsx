import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Features";
import React from "react";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main className="font-poppins">
      <HeroSection />
      <Introduction />
      <Projects 
        header="Projects"
      />
    </main>
  )
}
