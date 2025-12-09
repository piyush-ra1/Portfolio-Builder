"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, Mail, FolderOpen } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[10000] px-6 py-4 bg-dark-900/80 backdrop-blur-md border-b border-dark-600/50"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="group">
            <motion.span
              className="text-2xl font-bold text-white neon-text"
              whileHover={{ scale: 1.05 }}
            >
              PKR<span className="text-neon-teal">.</span>
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href} className="block">
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-white/90 hover:text-neon-teal transition-colors duration-300 text-xs md:text-sm uppercase tracking-wider font-medium cursor-pointer whitespace-nowrap"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[10001] p-2 text-white hover:text-neon-teal transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[10000] bg-dark-900/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-2xl text-gray-300 hover:text-neon-teal transition-colors"
                  >
                    <item.icon className="w-6 h-6" />
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-neon-teal to-neon-blue" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
