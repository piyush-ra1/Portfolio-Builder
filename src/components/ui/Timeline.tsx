"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItemProps {
  children: ReactNode;
  index: number;
  isLast?: boolean;
}

export function TimelineItem({ children, index, isLast = false }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8"
    >
      <div className="absolute left-0 top-0 w-4 h-4 bg-neon-purple rounded-full border-4 border-dark-900 z-10">
        <div className="absolute inset-0 bg-neon-purple rounded-full animate-ping opacity-25" />
      </div>

      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="absolute left-[7px] top-4 w-0.5 bg-gradient-to-b from-neon-purple to-neon-teal"
          style={{ boxShadow: "0 0 10px #b829dd" }}
        />
      )}

      <div className="ml-4">{children}</div>
    </motion.div>
  );
}

interface TimelineProps {
  children: ReactNode;
}

export default function Timeline({ children }: TimelineProps) {
  return <div className="relative">{children}</div>;
}
