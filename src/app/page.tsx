"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";

const Scene = dynamic(() => import("@/components/three/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Scene />
      <HeroSection />
    </main>
  );
}
