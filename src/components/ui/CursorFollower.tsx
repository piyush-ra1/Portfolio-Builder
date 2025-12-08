"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[99] mix-blend-difference hidden md:block"
        style={{ x, y }}
      >
        <motion.div
          className="w-8 h-8 rounded-full border-2 border-neon-teal"
          animate={{
            scale: isHovering ? 1.5 : 1,
            borderColor: isHovering ? "#b829dd" : "#00f5d4",
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[98] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 400 }}
      >
        <div className="w-2 h-2 rounded-full bg-neon-purple" />
      </motion.div>

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-[97] hidden md:block"
          animate={{
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
            opacity: 0.3 - i * 0.05,
          }}
          transition={{
            type: "spring",
            damping: 30 + i * 5,
            stiffness: 200 - i * 30,
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: `hsl(${280 + i * 20}, 80%, 60%)`,
            }}
          />
        </motion.div>
      ))}
    </>
  );
}
