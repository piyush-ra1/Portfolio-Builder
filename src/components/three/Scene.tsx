"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import ParticleField from "./ParticleField";
import RotatingShape from "./RotatingShape";

function FallbackBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              background: ["#b829dd", "#00f5d4", "#00bbf9", "#f72585"][
                Math.floor(Math.random() * 4)
              ],
              animationDelay: Math.random() * 2 + "s",
              animationDuration: Math.random() * 3 + 2 + "s",
            }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(184, 41, 221, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0, 245, 212, 0.1) 0%, transparent 50%)",
        }}
      />
    </div>
  );
}

export default function Scene() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!isMounted) {
    return <FallbackBackground />;
  }

  if (!hasWebGL) {
    return <FallbackBackground />;
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor("#0a0a0f", 1);
        }}
      >
        <color attach="background" args={["#0a0a0f"]} />
        <fog attach="fog" args={["#0a0a0f", 5, 20]} />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#b829dd" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00f5d4" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#00bbf9"
        />

        <Suspense fallback={null}>
          <ParticleField />
          <RotatingShape />
        </Suspense>
      </Canvas>
    </div>
  );
}
