"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "purple",
  delay = 0,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const glowColors: Record<string, string> = {
    purple: "#b829dd",
    teal: "#00f5d4",
    blue: "#00bbf9",
    magenta: "#f72585",
  };

  const color = glowColors[glowColor] || glowColors.purple;

  useEffect(() => {
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        boxShadow: `0 0 20px ${color}, 0 0 40px ${color}50`,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [color]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gsap.to(cardRef.current, {
      "--mouse-x": `${x}px`,
      "--mouse-y": `${y}px`,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 0 30px ${color}`,
      }}
      onMouseMove={handleMouseMove}
      className={`relative bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-dark-600 overflow-hidden group ${className}`}
      style={{
        boxShadow: `0 0 10px ${color}40`,
      }}
    >
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}20, transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
    </motion.div>
  );
}
