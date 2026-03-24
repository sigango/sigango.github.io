import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionTemplate, useSpring } from 'motion/react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  isDark?: boolean;
}

export function SpotlightCard({ 
  children, 
  className = '', 
  spotlightColor = 'rgba(99, 102, 241, 0.15)', // Default primary-500
  isDark = true 
}: SpotlightCardProps) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isDark 
          ? 'bg-surface-800/40 border-surface-700/50 hover:border-surface-600' 
          : 'bg-white border-surface-200 hover:border-surface-300'
      } ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}
