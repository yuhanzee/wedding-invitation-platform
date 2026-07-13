"use client";

import { motion } from "motion/react";

type ButterflyProps = {
  color?: string;
  delay?: number;
  path?: "left" | "right" | "center";
};

function Butterfly({
  color = "#D99AAA",
  delay = 0,
  path = "left",
}: ButterflyProps) {
  const movement = {
    left: {
      x: [0, -30, -60, -35, -100],
      y: [0, -40, -90, -150, -230],
    },

    right: {
      x: [0, 35, 70, 45, 110],
      y: [0, -50, -100, -160, -240],
    },

    center: {
      x: [0, 15, -20, 25, 0],
      y: [0, -60, -120, -180, -260],
    },
  };

  const selectedPath = movement[path];

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      initial={{
        opacity: 0,
        scale: 0.3,
      }}
      animate={{
        x: selectedPath.x,
        y: selectedPath.y,
        opacity: [0, 1, 1, 1, 0],
        scale: [0.3, 0.7, 1, 0.8, 0.5],
        rotate: [0, -15, 15, -10, 20],
      }}
      transition={{
        duration: 3,
        delay,
        ease: "easeOut",
      }}
    >
      <motion.svg
        width="24"
        height="20"
        viewBox="0 0 24 20"
        animate={{
          scaleX: [1, 0.45, 1, 0.45, 1],
        }}
        transition={{
          duration: 0.35,
          repeat: Infinity,
        }}
      >
        <path
          d="M11 10C7 2 1 2 2 8C3 13 8 14 11 11Z"
          fill={color}
        />

        <path
          d="M13 10C17 2 23 2 22 8C21 13 16 14 13 11Z"
          fill={color}
        />

        <ellipse
          cx="12"
          cy="11"
          rx="1"
          ry="5"
          fill="#6B5660"
        />
      </motion.svg>
    </motion.div>
  );
}

type ButterflyMagicProps = {
  isOpen: boolean;
};

export default function ButterflyMagic({
  isOpen,
}: ButterflyMagicProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 pointer-events-none">
      <Butterfly
        color="#D99AAA"
        delay={1.3}
        path="left"
      />

      <Butterfly
        color="#7583A7"
        delay={1.6}
        path="right"
      />

      <Butterfly
        color="#E8B7C3"
        delay={1.9}
        path="center"
      />
    </div>
  );
}