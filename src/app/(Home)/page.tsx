'use client'
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import React from "react";
import Introduction from "@/components/Introduction";
import CursorFollower from "@/components/features/CursorFollower";
import ScrollTop from "@/components/features/ScrollTop";

export default function Home() {
  return (
    <main className="font-poppins">
      <HeroSection />
      <Introduction />
      <Projects />
      <ScrollTop />
    </main>
  )
}
