"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Code, FolderOpen, Mail } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  const titleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          delay: 1.5,
        }
      );

      gsap.to(titleRef.current, {
        textShadow: "0 0 30px #b829dd, 0 0 60px #b829dd, 0 0 90px #00f5d4",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.5,
      });
    }

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 2,
        }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.p
            className="text-neon-teal text-lg mb-4 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {"<Hello World />"}
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-white">I&apos;m</span>
            <span
              ref={titleRef}
              className="block neon-text glitch-effect opacity-0"
              data-text="PIYUSH KUMAR RAI"
            >
              PIYUSH KUMAR RAI
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-gray-400 text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-0"
          >
            AI/ML Enthusiast • Developer • BCA Final Year Student
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <Link href="/skills">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #b829dd" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-magenta rounded-full text-white font-semibold transition-all"
              >
                <Code size={20} />
                Skills
              </motion.button>
            </Link>

            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00f5d4" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-neon-teal rounded-full text-neon-teal font-semibold hover:bg-neon-teal hover:text-dark-900 transition-all"
              >
                <FolderOpen size={20} />
                Projects
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00bbf9" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-neon-blue rounded-full text-neon-blue font-semibold hover:bg-neon-blue hover:text-dark-900 transition-all"
              >
                <Mail size={20} />
                Contact
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 3, y: { duration: 1.5, repeat: Infinity } }}
        >
          <ArrowDown className="text-neon-teal w-8 h-8" />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-900/50 to-dark-900 pointer-events-none" />
    </section>
  );
}
