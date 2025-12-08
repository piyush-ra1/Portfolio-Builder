"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const prevPathRef = useRef<string>(pathname);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    if (prevPathRef.current !== pathname && overlayRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        overlayRef.current,
        {
          scaleY: 0,
          transformOrigin: "bottom",
        },
        {
          scaleY: 1,
          duration: 0.4,
          ease: "power4.inOut",
        }
      ).to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.4,
        ease: "power4.inOut",
        delay: 0.1,
      });
    }
    prevPathRef.current = pathname;
  }, [pathname, isFirstRender]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[60] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #b829dd 0%, #00f5d4 50%, #00bbf9 100%)",
          transform: "scaleY(0)",
          transformOrigin: "bottom",
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "tween",
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
