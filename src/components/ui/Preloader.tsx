"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loaded = sessionStorage.getItem("preloaderShown");
      if (loaded) {
        setShouldShow(false);
        setIsLoading(false);
        return;
      }
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      );

      gsap.to(textRef.current, {
        textShadow:
          "0 0 20px #b829dd, 0 0 40px #b829dd, 0 0 60px #00f5d4, 0 0 80px #00f5d4",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            if (typeof window !== "undefined") {
              sessionStorage.setItem("preloaderShown", "true");
            }
          }, 500);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-900"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <h1
              ref={textRef}
              className="text-4xl md:text-6xl font-bold text-white glitch-effect"
              data-text="PIYUSH"
            >
              <span className="neon-text">PIYUSH</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 w-64"
          >
            <div className="h-1 bg-dark-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-purple via-neon-teal to-neon-blue"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <p className="text-neon-teal text-sm mt-2 text-center font-mono">
              {Math.min(Math.floor(progress), 100)}%
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 text-gray-500 text-sm"
          >
            <span className="animate-pulse">Loading experience...</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
